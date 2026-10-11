(() => {
  'use strict';

  const sceneNames = new Set(['maintenance', 'fitout', 'space', 'supplies', 'printing', 'connection', 'lifecycle', 'partnership', 'skyline', 'conversation']);
  const solutionScenes = ['fitout', 'fitout', 'maintenance', 'space', 'space', 'supplies', 'printing', 'connection'];
  const sourceCache = new Map();
  const initialized = new WeakSet();
  const watchedScenes = new Set();
  const heroScene = document.querySelector('.hero-office-scene');
  let instanceNumber = 0;

  function sceneSource(name) {
    if (!sourceCache.has(name)) {
      sourceCache.set(name, fetch(new URL(`assets/motion/${name}.svg`, document.baseURI), { credentials: 'same-origin' })
        .then(response => {
          if (!response.ok) throw new Error('Scene unavailable');
          return response.text();
        }));
    }
    return sourceCache.get(name);
  }

  function createSvg(source, name) {
    const parsed = new DOMParser().parseFromString(source, 'image/svg+xml');
    const sourceSvg = parsed.documentElement;
    if (parsed.querySelector('parsererror, script') || sourceSvg.localName !== 'svg') throw new Error('Invalid scene');
    const svg = document.importNode(sourceSvg, true);
    const prefix = `kni-${name}-${++instanceNumber}-`;
    const ids = new Map();
    [svg, ...svg.querySelectorAll('[id]')].forEach(node => {
      if (node.id) {
        ids.set(node.id, prefix + node.id);
        node.id = prefix + node.id;
      }
    });
    const rewriteUrls = value => value.replace(/url\(\s*(['"]?)#([^\s)'"\\]+)\1\s*\)/g, (match, quote, id) => ids.has(id) ? `url(#${ids.get(id)})` : match);
    [svg, ...svg.querySelectorAll('*')].forEach(node => {
      [...node.attributes].forEach(attribute => {
        let value = rewriteUrls(attribute.value);
        if ((attribute.localName === 'href') && value.startsWith('#') && ids.has(value.slice(1))) value = '#' + ids.get(value.slice(1));
        if (attribute.name === 'aria-labelledby' || attribute.name === 'aria-describedby') value = value.split(/\s+/).map(id => ids.get(id) || id).join(' ');
        if (value !== attribute.value) node.setAttributeNS(attribute.namespaceURI, attribute.name, value);
      });
      if (node.localName === 'style') node.textContent = rewriteUrls(node.textContent);
    });
    svg.classList.add('motion-scene-svg');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('focusable', 'false');
    svg.removeAttribute('role');
    return svg;
  }

  async function loadScene(host) {
    if (host.dataset.motionState) return;
    const name = host.dataset.scene;
    if (!sceneNames.has(name)) return;
    host.dataset.motionState = 'loading';
    host.classList.add('motion-loading');
    try {
      const svg = createSvg(await sceneSource(name), name);
      // A tab change can remove a host while its shared source is loading.
      if (!host.isConnected) return;
      host.append(svg);
      const fallback = host.querySelector('.motion-fallback');
      if (fallback) fallback.hidden = true;
      host.dataset.motionState = 'loaded';
      host.classList.add('motion-loaded');
    } catch {
      if (!host.isConnected) return;
      host.dataset.motionState = 'failed';
      host.classList.add('motion-failed');
    } finally {
      host.classList.remove('motion-loading');
    }
  }

  const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.target === heroScene) {
        entry.target.classList.toggle('motion-is-active', entry.isIntersecting);
        return;
      }
      entry.target.classList.toggle('is-inview', entry.isIntersecting);
      if (entry.isIntersecting) loadScene(entry.target);
    });
  }, { rootMargin: '100px 0px', threshold: 0.01 }) : null;

  function registerScene(host) {
    if (initialized.has(host)) return;
    initialized.add(host);
    host.setAttribute('aria-hidden', 'true');
    watchedScenes.add(host);
    if (observer) observer.observe(host);
    else {
      host.classList.add('is-inview');
      loadScene(host);
    }
  }

  function newHost(name) {
    const host = document.createElement('div');
    host.className = 'motion-scene';
    host.dataset.scene = name;
    host.setAttribute('aria-hidden', 'true');
    return host;
  }

  function prepareService() {
    const panel = document.getElementById('service-detail');
    if (!panel) return;
    const figure = panel.querySelector('.service-detail-image');
    if (!figure) return;
    let host = figure.querySelector('.motion-scene');
    if (!host) {
      const name = (panel.getAttribute('aria-labelledby') || '').replace(/^service-tab-/, '');
      if (!sceneNames.has(name)) return;
      const image = figure.querySelector('img');
      host = newHost(name);
      if (image) {
        image.classList.add('motion-fallback');
        image.replaceWith(host);
        host.append(image);
      } else figure.prepend(host);
    }
    registerScene(host);
  }

  function prepareSolution() {
    const panel = document.getElementById('solution-result');
    if (!panel || !panel.querySelector('.solution-result-content')) return;
    let host = panel.querySelector('.solution-motion .motion-scene');
    if (!host) {
      const selected = Number((panel.getAttribute('aria-labelledby') || '').replace(/^solution-choice-/, ''));
      const wrapper = document.createElement('div');
      wrapper.className = 'solution-motion';
      wrapper.setAttribute('aria-hidden', 'true');
      host = newHost(solutionScenes[selected] || 'connection');
      wrapper.append(host);
      panel.append(wrapper);
    }
    registerScene(host);
  }

  function forgetRemovedScenes() {
    watchedScenes.forEach(host => {
      if (!host.isConnected) {
        if (observer) observer.unobserve(host);
        watchedScenes.delete(host);
      }
    });
  }

  prepareService();
  prepareSolution();
  document.querySelectorAll('.motion-scene[data-scene]').forEach(registerScene);
  if (heroScene) {
    if (observer) observer.observe(heroScene);
    else heroScene.classList.add('motion-is-active');
  }
  [['service-detail', prepareService], ['solution-result', prepareSolution]].forEach(([id, prepare]) => {
    const panel = document.getElementById(id);
    if (panel) new MutationObserver(() => { forgetRemovedScenes(); prepare(); }).observe(panel, { childList: true });
  });

  const floatingControl = document.getElementById('site-motion-toggle');
  const originalControl = document.getElementById('motion-toggle');
  if (floatingControl && originalControl) {
    const updateControl = () => {
      const paused = document.body.classList.contains('motion-paused');
      const arabic = document.documentElement.lang === 'ar';
      const label = paused ? (arabic ? 'تشغيل الحركة' : 'Enable motion') : (arabic ? 'إيقاف الحركة' : 'Pause motion');
      floatingControl.setAttribute('aria-pressed', String(paused));
      floatingControl.setAttribute('aria-label', label);
      floatingControl.title = label;
      floatingControl.dataset.state = paused ? 'paused' : 'playing';
      const icon = floatingControl.querySelector('svg path');
      if (icon) icon.setAttribute('d', paused ? 'M6 4l9 6-9 6V4Z' : 'M7 5v10M13 5v10');
      const text = floatingControl.querySelector('.motion-control-label, .site-motion-label');
      if (text) text.textContent = label;
    };
    let scrollFrame = false;
    const updateVisibility = () => {
      scrollFrame = false;
      const hero = document.querySelector('.hero');
      const visible = window.scrollY > (hero ? hero.offsetTop + hero.offsetHeight - 80 : 600);
      floatingControl.classList.toggle('is-visible', visible);
      floatingControl.setAttribute('aria-hidden', String(!visible));
      floatingControl.tabIndex = visible ? 0 : -1;
    };
    floatingControl.addEventListener('click', () => originalControl.click());
    new MutationObserver(updateControl).observe(document.body, { attributes: true, attributeFilter: ['class'] });
    new MutationObserver(updateControl).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
    window.addEventListener('scroll', () => {
      if (!scrollFrame) { scrollFrame = true; requestAnimationFrame(updateVisibility); }
    }, { passive: true });
    window.addEventListener('resize', updateVisibility, { passive: true });
    updateControl();
    updateVisibility();
  }
})();
