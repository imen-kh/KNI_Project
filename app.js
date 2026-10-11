'use strict';

(() => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const pair = (ar, en) => ({ ar, en });
  const services = [
    {
      id: 'maintenance', title: pair('الصيانة', 'Maintenance'), image: 'maintenance.webp',
      hook: pair('مرافق موثوقة. أعمال مستمرة.', 'Reliable facilities. Continuous operations.'),
      description: pair('حلول صيانة شاملة تحافظ على سلامة مكان العمل ووظيفته وجاهزيته التشغيلية. نعتني بالأنظمة والأصول، من الوقاية إلى الاستجابة للأعطال.', 'Comprehensive maintenance solutions that keep workplaces safe, functional and operational. We support your systems and assets, from preventive care to reactive maintenance.'),
      features: [pair('الصيانة الوقائية والتصحيحية', 'Preventive & corrective maintenance'), pair('الصيانة الطارئة والاستجابة للأعطال', 'Emergency & reactive maintenance'), pair('أنظمة الكهرباء والإضاءة', 'Electrical & lighting systems'), pair('التكييف والتهوية', 'HVAC & air conditioning'), pair('السباكة وصيانة المباني العامة', 'Plumbing & general building maintenance'), pair('فحص الأصول وإدارة دورة حياتها', 'Asset inspection & lifecycle management'), pair('جدولة الصيانة', 'Maintenance scheduling'), pair('تقارير الخدمة', 'Service reporting')]
    },
    {
      id: 'fitout', title: pair('التجهيز الداخلي', 'Fit-out'), image: 'fit-out.webp',
      hook: pair('من مساحة فارغة إلى مكان جاهز للعمل.', 'From empty space to ready workplace.'),
      description: pair('تجهيز المكاتب وتجديدها من التخطيط الأولي إلى التسليم النهائي. تنسيق متكامل للأعمال والتشطيبات والأثاث، لتجهيز مساحة عملية ومهنية.', 'Complete office fit-out and refurbishment, from initial planning to final handover. Coordinated works, finishes and furniture for a functional, professional workplace.'),
      features: [pair('تجهيز المكاتب وتجديدها', 'Office fit-out & refurbishment'), pair('القواطع والأسقف', 'Partitions & ceilings'), pair('الأرضيات وتشطيبات الجدران', 'Flooring & wall finishes'), pair('الكهرباء والإضاءة', 'Electrical & lighting'), pair('التكييف والسباكة', 'HVAC & plumbing'), pair('النجارة والأعمال الخشبية', 'Joinery & carpentry'), pair('تنسيق تقنية المعلومات والتيار الخفيف', 'IT & low-current coordination'), pair('توريد الأثاث وتركيبه', 'Furniture supply & installation'), pair('إدارة المشاريع', 'Project management'), pair('الاختبار والتشغيل ومعالجة الملاحظات والتسليم', 'Testing, commissioning, snagging & handover')]
    },
    {
      id: 'space', title: pair('المساحات والأثاث', 'Space & furniture'), image: 'space-furniture.webp',
      hook: pair('كل متر، يخدم طريقة عملك.', 'Making every space work better.'),
      description: pair('تخطيط مرن واستثمار أفضل للمساحات، مع حلول أثاث تتكيّف مع تغيّر احتياجات أعمالك. من توزيع محطات العمل إلى نقل المكتب وإعادة تهيئته.', 'Flexible planning and better use of space, with furniture solutions that respond to changing business needs. From workstation allocation to office moves and reconfiguration.'),
      features: [pair('تخطيط المساحات وتحسين استغلالها', 'Workplace planning & space optimization'), pair('توزيع محطات العمل والمكاتب', 'Workstation & office allocation'), pair('تخطيط غرف الاجتماعات', 'Meeting room planning'), pair('حلول مساحات العمل المرنة', 'Flexible workspace solutions'), pair('نقل المكاتب والانتقال إلى مواقع جديدة', 'Office moves & relocations'), pair('توريد الأثاث وتركيبه', 'Furniture supply & installation'), pair('إعادة توزيع الأثاث', 'Furniture reconfiguration'), pair('إصلاح الأثاث وتجديده', 'Furniture repair & refurbishment'), pair('إدارة أصول الأثاث', 'Furniture asset management')]
    },
    {
      id: 'supplies', title: pair('مستلزمات المكاتب', 'Office supplies'), image: 'office-supplies.webp',
      hook: pair('الأساسيات التي تجعل يومك أسهل.', 'Everything your workplace needs.'),
      description: pair('توريد موثوق للمستلزمات المكتبية والقرطاسية. من الورق إلى تفاصيل الاجتماعات، مع إدارة المخزون وإعادة التزويد المجدولة.', 'Reliable sourcing and replenishment of office essentials and stationery. From paper to meeting supplies, with inventory management and scheduled replenishment.'),
      features: [pair('القرطاسية والأقلام', 'Stationery & writing materials'), pair('الورق ومستهلكات الطباعة', 'Paper & printing consumables'), pair('الملفات والمجلدات', 'Files & folders'), pair('إكسسوارات المكاتب', 'Desk accessories'), pair('مستلزمات الاجتماعات والمؤتمرات', 'Meeting & conference supplies'), pair('المستهلكات المكتبية', 'Office consumables'), pair('قرطاسية الشركات المخصصة', 'Customized corporate stationery'), pair('إدارة المخزون', 'Inventory management'), pair('إعادة التزويد المجدولة', 'Scheduled replenishment')]
    },
    {
      id: 'printing', title: pair('الطباعة والضيافة', 'Printing & pantry'), image: 'pantry.webp',
      hook: pair('التفاصيل اليومية، في مكانها.', 'The everyday essentials, taken care of.'),
      description: pair('مواد مطبوعة تدعم حضور شركتك، ومستلزمات ضيافة تُبقي المساحات اليومية مجهّزة. خدمات إنتاج وتسليم، ومراقبة للمخزون وإعادة تزويد منتظمة.', 'Professional printed materials that support your company’s presence, and hospitality supplies that keep everyday spaces ready. Print production and delivery, stock monitoring and regular replenishment.'),
      features: [pair('بطاقات الأعمال والمراسلات والأظرف', 'Business cards, letterheads & envelopes'), pair('بروفايلات الشركات والكتيبات والمنشورات', 'Company profiles, brochures & flyers'), pair('مواد العروض والملصقات واللافتات', 'Presentation materials, posters & banners'), pair('لوحات المكاتب ومواد الهوية', 'Office signage & corporate branding materials'), pair('الطباعة المخصصة والإنتاج والتسليم', 'Customized printing, production & delivery'), pair('القهوة والشاي ومياه الشرب والمشروبات', 'Coffee, tea, drinking water & beverages'), pair('الأكواب والأطباق وأدوات المائدة', 'Cups, plates & cutlery'), pair('السكر والحليب ومستلزمات المطبخ', 'Sugar, milk & pantry essentials'), pair('ضيافة الاجتماعات ومستهلكات النظافة', 'Meeting hospitality & hygiene consumables'), pair('مراقبة المخزون وإعادة التزويد المنتظمة', 'Stock monitoring & regular replenishment')]
    }
  ];
  const process = [
    [pair('نخطّط', 'Plan'), pair('نفهم طبيعة أعمالك ومتطلبات المساحة والتشغيل.', 'Understand your business, workplace and operational requirements.')],
    [pair('نصمّم', 'Design'), pair('نطوّر توزيع المساحات ومخططات العمل ومتطلباتها.', 'Develop the space, layout and workplace requirements.')],
    [pair('ننفّذ', 'Deliver'), pair('ننجز التجهيز والتجديد والأثاث والمشاريع المرتبطة.', 'Execute fit-out, refurbishment, furniture and related projects.')],
    [pair('نشغّل', 'Operate'), pair('ندعم احتياجات مكان العمل اليومية.', 'Support the workplace’s day-to-day requirements.')],
    [pair('نصون', 'Maintain'), pair('نحافظ على أداء المرافق ووظيفتها وحالتها.', 'Protect facility performance, functionality and condition.')],
    [pair('نزوّد', 'Supply'), pair('نوفّر مستلزمات المكتب والطباعة والضيافة.', 'Provide essential office, printing and pantry requirements.')]
  ];
  const solutions = [
    { title: pair('مكتب جديد', 'New office'), bundle: [pair('التجهيز الداخلي', 'Fit-out'), pair('تخطيط المساحات', 'Space planning'), pair('الأثاث', 'Furniture')], description: pair('من تخطيط التوزيع إلى تجهيز المساحة وتركيب الأثاث. خدمات مترابطة تُهيّئ مكتبك للأعمال.', 'From planning the layout to completing the fit-out and installing furniture. Connected services that prepare your office for business.') },
    { title: pair('تجديد المكتب', 'Office refurbishment'), bundle: [pair('التجهيز الداخلي', 'Fit-out'), pair('تحسين المساحات', 'Space optimization'), pair('الأثاث', 'Furniture')], description: pair('تجديد المكان وإعادة التفكير في استخدامه، مع تجهيزات وأثاث يتكيّفان مع متطلبات أعمالك.', 'Refresh your workplace and rethink how its space is used, with fit-out and furniture that respond to your business requirements.') },
    { title: pair('التشغيل اليومي', 'Daily operations'), bundle: [pair('إدارة المرافق', 'Facility management'), pair('الصيانة', 'Maintenance')], description: pair('دعم للمتطلبات التشغيلية وصيانة للأنظمة والمرافق، للحفاظ على بيئة عملية وجاهزة كل يوم.', 'Operational support and maintenance for your systems and facilities, to help keep your workplace functional and ready each day.') },
    { title: pair('تحسين المساحات', 'Space optimization'), bundle: [pair('تخطيط المساحات', 'Space planning'), pair('الأثاث', 'Furniture')], description: pair('توزيع مدروس لمحطات العمل والاجتماعات، مع حلول أثاث مرنة تجعل المساحة تعمل بشكل أفضل.', 'Considered workstation and meeting room planning, with flexible furniture solutions that make your space work better.') },
    { title: pair('نقل المكتب', 'Office relocation'), bundle: [pair('تخطيط المساحات', 'Space planning'), pair('إدارة الانتقال', 'Move management')], description: pair('تخطيط المساحة الجديدة وتنسيق انتقال المكتب، بما يتوافق مع احتياجات فريقك وطريقة عمله.', 'Plan your new space and coordinate your office move around your team’s requirements and the way they work.') },
    { title: pair('احتياجات الموظفين', 'Employee workplace needs'), bundle: [pair('المساحات', 'Space'), pair('الأثاث', 'Furniture'), pair('مستلزمات المكاتب', 'Office supplies')], description: pair('مساحات موزّعة بعناية، وأثاث مناسب، ومستلزمات يومية تدعم احتياجات الموظفين في مكان العمل.', 'Thoughtfully allocated space, suitable furniture and everyday supplies that support employee workplace needs.') },
    { title: pair('متطلبات المكتب اليومية', 'Daily office requirements'), bundle: [pair('القرطاسية', 'Stationery'), pair('الضيافة', 'Pantry'), pair('الطباعة', 'Printing')], description: pair('تجميع تفاصيل اليوم في خدمات منسّقة: مستلزمات المكتب، والطباعة، ومخزون الضيافة.', 'Bring everyday details together through coordinated stationery, printing and pantry supply services.') },
    { title: pair('دعم مستمر لمكان العمل', 'Ongoing workplace support'), bundle: [pair('خدمات مرافق متكاملة', 'Integrated facility services')], description: pair('منظومة خدمات تتكيّف مع متطلبات مكان العمل المستمرة، وتربط التنسيق والتشغيل والإمداد.', 'An integrated service model that adapts to ongoing workplace requirements and connects coordination, operations and supply.') }
  ];
  const benefits = [
    [pair('تكامل', 'Integrated'), pair('خدمات متعددة، ينسّقها شريك واحد.', 'Multiple workplace services coordinated through one partner.')],
    [pair('موثوقية', 'Reliable'), pair('خدمة منتظمة ودعم يستجيب للاحتياجات التشغيلية.', 'Consistent service delivery and responsive operational support.')],
    [pair('مرونة', 'Flexible'), pair('حلول تتكيّف مع مساحتك ومتطلباتك وميزانيتك.', 'Solutions tailored to your workplace, requirements and budget.')],
    [pair('كفاءة', 'Efficient'), pair('تنسيق ومشتريات وإدارة خدمات أكثر بساطة.', 'Streamlined coordination, procurement and service management.')],
    [pair('احترافية', 'Professional'), pair('اهتمام بالجودة والمظهر والمعايير التشغيلية.', 'A focus on quality, presentation and operational standards.')],
    [pair('قابلية للتوسّع', 'Scalable'), pair('خدمات تتطوّر مع نمو أعمالك وتغيّر مساحتك.', 'Services that adapt as your business grows and your workplace evolves.')]
  ];
  const industries = [pair('مكاتب الشركات', 'Corporate offices'), pair('الخدمات المالية', 'Financial services'), pair('شركات التقنية', 'Technology companies'), pair('التعليم والتدريب', 'Education & training'), pair('مكاتب التجزئة والأعمال التجارية', 'Retail & commercial offices'), pair('الخدمات المهنية', 'Professional services'), pair('العقارات', 'Real estate'), pair('المكاتب في القطاع الصحي', 'Healthcare offices'), pair('الجهات الحكومية والقطاع العام', 'Government & public sector'), pair('الشركات الناشئة والنامية', 'Startups & growing businesses'), pair('المؤسسات الإقليمية ومتعددة المواقع', 'Regional & multi-site organizations')];

  const storage = {
    get(key) { try { return localStorage.getItem(key); } catch { return null; } },
    set(key, value) { try { localStorage.setItem(key, value); } catch { /* The site also works without storage. */ } }
  };
  const state = { language: storage.get('kni-language') === 'en' ? 'en' : 'ar', service: 0, solution: 0, brief: null, briefRequirement: null, returnFocus: null, status: null };
  const text = value => typeof value === 'string' ? value : value[state.language];
  const number = index => String(index + 1).padStart(2, '0');
  function element(tag, className, content) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (content !== undefined) node.textContent = text(content);
    return node;
  }
  function multiline(node, value) {
    node.replaceChildren();
    value.split(/\\n|\n/).forEach((line, index) => {
      if (index) node.append(document.createElement('br'));
      node.append(document.createTextNode(line));
    });
  }
  function arrow() { const node = element('span', 'arrow', '↗'); node.setAttribute('aria-hidden', 'true'); return node; }
  function briefButton(serviceId, requirement, underlined = false) {
    const button = element('button', underlined ? 'underlined-link detail-cta' : 'button detail-cta');
    button.type = 'button';
    button.append(element('span', '', pair('جهّز ملخّص احتياجاتك', 'Prepare your brief')), arrow());
    button.addEventListener('click', () => openBrief(serviceId, requirement));
    return button;
  }

  function renderServiceTabs() {
    const container = $('#service-selector');
    container.replaceChildren();
    container.setAttribute('aria-label', text(pair('مجالات الخدمات', 'Service areas')));
    services.forEach((service, index) => {
      const button = element('button', `service-tab${index === state.service ? ' active' : ''}`);
      button.type = 'button'; button.id = `service-tab-${service.id}`;
      button.setAttribute('role', 'tab'); button.setAttribute('aria-controls', 'service-detail');
      button.setAttribute('aria-selected', String(index === state.service));
      button.tabIndex = index === state.service ? 0 : -1;
      const image = element('img', 'service-tab-image'); image.src = `assets/${service.image}`; image.alt = ''; image.loading = 'lazy'; image.width = 320; image.height = 240;
      button.append(element('span', 'service-tab-number', number(index)), image, element('span', 'service-tab-title', service.title), element('span', 'service-tab-icon', '↗'));
      $('.service-tab-icon', button).setAttribute('aria-hidden', 'true');
      button.addEventListener('click', () => selectService(index));
      container.append(button);
    });
  }
  function renderServiceDetail() {
    const service = services[state.service];
    const container = $('#service-detail');
    container.setAttribute('aria-labelledby', `service-tab-${service.id}`);
    const copy = element('div', 'service-detail-copy');
    copy.append(element('span', 'eyebrow', `${number(state.service)} / ${service.title.en.toUpperCase()}`), element('h3', '', service.hook), element('p', '', service.description));
    const list = element('ul', 'service-feature-list');
    service.features.forEach(feature => list.append(element('li', '', feature)));
    copy.append(list, briefButton(service.id, undefined, true));
    const figure = element('figure', 'service-detail-image');
    const image = element('img'); image.src = `assets/${service.image}`; image.alt = text(pair(`تصوّر توضيحي لخدمات ${service.title.ar}`, `Illustrative ${service.title.en.toLowerCase()} concept`)); image.loading = 'lazy'; image.width = 800; image.height = 1000;
    figure.append(image, element('figcaption', '', pair('تصوّر توضيحي للخدمة', 'Illustrative service concept')));
    container.replaceChildren(copy, figure);
  }
  function selectService(index, focus = false) {
    state.service = index;
    $$('.service-tab').forEach((button, i) => {
      button.classList.toggle('active', i === index); button.setAttribute('aria-selected', String(i === index)); button.tabIndex = i === index ? 0 : -1;
      if (focus && i === index) button.focus({ preventScroll: true });
    });
    renderServiceDetail();
  }
  function renderProcess() {
    const container = $('#process-list'); container.replaceChildren();
    process.forEach(([title, description], index) => {
      const step = element('article', 'process-step reveal');
      const copy = element('div', 'process-content');
      copy.append(element('h3', '', title), element('p', '', description));
      step.append(element('span', 'process-number', number(index)), copy); container.append(step);
    });
  }
  function renderSolutionChoices() {
    const container = $('#solution-choices'); container.replaceChildren();
    container.setAttribute('aria-label', text(pair('احتياجات بيئة العمل', 'Workplace requirements')));
    container.setAttribute('aria-orientation', 'vertical');
    solutions.forEach((solution, index) => {
      const button = element('button', `solution-choice${state.solution === index ? ' active' : ''}`);
      button.id = `solution-choice-${index}`; button.type = 'button'; button.setAttribute('role', 'tab'); button.setAttribute('aria-controls', 'solution-result'); button.setAttribute('aria-selected', String(state.solution === index)); button.tabIndex = state.solution === index ? 0 : -1;
      const glyph = element('span', 'solution-arrow', '↗'); glyph.setAttribute('aria-hidden', 'true');
      button.append(element('span', 'solution-number', number(index)), element('span', 'solution-choice-title', solution.title), glyph);
      button.addEventListener('click', () => selectSolution(index)); container.append(button);
    });
  }
  function renderSolutionResult() {
    const solution = solutions[state.solution], container = $('#solution-result');
    container.setAttribute('aria-labelledby', `solution-choice-${state.solution}`);
    const content = element('div', 'solution-result-content');
    content.append(element('span', 'solution-result-number', number(state.solution)), element('span', 'eyebrow', pair('خدمات مترابطة حول احتياجك', 'Connected around your requirement')), element('h3', '', solution.title));
    const bundle = element('div', 'solution-bundle');
    solution.bundle.forEach(item => bundle.append(element('span', 'solution-chip', item)));
    content.append(bundle, element('p', 'solution-description', solution.description), briefButton('integrated', state.solution));
    container.replaceChildren(content);
  }
  function selectSolution(index, focus = false) {
    state.solution = index;
    $$('.solution-choice').forEach((button, i) => {
      button.classList.toggle('active', i === index); button.setAttribute('aria-selected', String(i === index)); button.tabIndex = i === index ? 0 : -1;
      if (focus && i === index) button.focus({ preventScroll: true });
    });
    renderSolutionResult();
  }
  function renderBenefits() {
    const container = $('#benefits-grid'); container.replaceChildren();
    benefits.forEach(([title, description], index) => {
      const article = element('article', 'benefit reveal');
      article.append(element('span', 'benefit-number', number(index)), element('h3', '', title), element('p', '', description)); container.append(article);
    });
    $('#industry-tags').replaceChildren(...industries.map(industry => element('span', 'industry-tag', industry)));
  }
  function tabKeyboard(event, selector, selected, count, select, vertical = false) {
    if (!event.target.closest(selector)) return;
    let next;
    if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = count - 1;
    else if (vertical && event.key === 'ArrowDown') next = (selected + 1) % count;
    else if (vertical && event.key === 'ArrowUp') next = (selected - 1 + count) % count;
    else if (!vertical && ['ArrowLeft', 'ArrowRight'].includes(event.key)) {
      const advance = event.key === (state.language === 'ar' ? 'ArrowLeft' : 'ArrowRight');
      next = (selected + (advance ? 1 : -1) + count) % count;
    }
    if (next !== undefined) { event.preventDefault(); select(next, true); }
  }
  $('#service-selector').addEventListener('keydown', event => tabKeyboard(event, '.service-tab', state.service, services.length, selectService));
  $('#solution-choices').addEventListener('keydown', event => tabKeyboard(event, '.solution-choice', state.solution, solutions.length, selectSolution, true));

  function translateStatic() {
    $$('[data-ar][data-en]').forEach(node => multiline(node, node.dataset[state.language]));
    $$('[data-ar-label][data-en-label]').forEach(node => node.setAttribute('aria-label', node.dataset[`${state.language}Label`]));
    $$('[data-ar-placeholder][data-en-placeholder]').forEach(node => node.placeholder = node.dataset[`${state.language}Placeholder`]);
  }
  function renderServiceOptions() {
    const select = $('#brief-service'), selected = select.value || 'integrated';
    const option = element('option', '', pair('حلول متكاملة / عدة خدمات', 'Integrated / multiple services')); option.value = 'integrated'; select.replaceChildren(option);
    services.forEach(service => { const node = element('option', '', service.title); node.value = service.id; select.append(node); });
    select.value = selected;
  }
  function setLanguage(language) {
    state.language = language;
    document.documentElement.lang = language; document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    storage.set('kni-language', language);
    translateStatic();
    const switcher = $('#language-switch');
    switcher.replaceChildren(document.createTextNode(language === 'ar' ? 'EN ' : 'AR '), element('span', '', '↗'));
    switcher.setAttribute('aria-label', language === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
    $('#close-brief').setAttribute('aria-label', text(pair('إغلاق', 'Close')));
    $('#mobile-nav').setAttribute('aria-label', text(pair('القائمة', 'Mobile navigation')));
    document.title = language === 'ar' ? 'KNI Projects Management | مساحات تعمل للغد' : 'KNI Projects Management | Spaces that work for tomorrow';
    const description = $('meta[name="description"]');
    if (description) description.content = text(pair('KNI Projects Management — حلول متكاملة للمرافق وبيئات العمل. التجهيز، الصيانة، تخطيط المساحات، الأثاث، والتوريد.', 'KNI Projects Management — Integrated facility and workplace solutions. Fit-out, maintenance, space planning, furniture and essential supplies.'));
    renderServiceTabs(); renderServiceDetail(); renderProcess(); renderSolutionChoices(); renderSolutionResult(); renderBenefits(); renderServiceOptions();
    updateMenuLabel(); updateMotionLabel();
    if (state.brief) $('#brief-text').textContent = formatBrief(state.brief);
    if (state.status) $('#brief-status').textContent = text(state.status);
    observeReveals();
  }
  $('#language-switch').addEventListener('click', () => setLanguage(state.language === 'ar' ? 'en' : 'ar'));

  const menuButton = $('#menu-toggle'), mobileNav = $('#mobile-nav');
  function updateMenuLabel() { menuButton.setAttribute('aria-label', text(mobileNav.hidden ? pair('فتح القائمة', 'Open menu') : pair('إغلاق القائمة', 'Close menu'))); }
  function setMenu(open) {
    mobileNav.hidden = !open; menuButton.setAttribute('aria-expanded', String(open)); document.body.classList.toggle('menu-open', open); updateMenuLabel();
  }
  menuButton.addEventListener('click', () => setMenu(mobileNav.hidden));
  $$('a[href^="#"]').forEach(link => link.addEventListener('click', event => {
    const target = $(link.getAttribute('href'));
    if (!target) return;
    event.preventDefault(); setMenu(false);
    target.scrollIntoView({ behavior: motionPaused ? 'auto' : 'smooth', block: 'start' });
    try { history.replaceState(null, '', link.getAttribute('href')); } catch { /* Embedded previews may restrict history. */ }
    if (link.classList.contains('skip-link')) { target.tabIndex = -1; target.focus({ preventScroll: true }); }
  }));
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && !mobileNav.hidden) { setMenu(false); menuButton.focus(); } });
  window.addEventListener('resize', () => { if (window.innerWidth > 900 && !mobileNav.hidden) setMenu(false); });

  const media = window.matchMedia('(prefers-reduced-motion: reduce)');
  let motionPaused = storage.get('kni-motion') === 'paused' || media.matches;
  const hero = $('.hero'), motionButton = $('#motion-toggle');
  function updateMotionLabel() {
    document.body.classList.toggle('motion-paused', motionPaused);
    document.documentElement.classList.toggle('motion-paused', motionPaused);
    motionButton.setAttribute('aria-pressed', String(motionPaused));
    motionButton.setAttribute('aria-label', text(motionPaused ? pair('تشغيل الحركة', 'Enable motion') : pair('إيقاف الحركة', 'Pause motion')));
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); svg.setAttribute('viewBox', '0 0 20 20'); svg.setAttribute('aria-hidden', 'true');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path'); path.setAttribute('d', motionPaused ? 'M6 4l9 6-9 6V4Z' : 'M7 5v10M13 5v10'); svg.append(path); motionButton.replaceChildren(svg);
    if (motionPaused) { hero.style.setProperty('--mx', '0'); hero.style.setProperty('--my', '0'); hero.style.setProperty('--scroll', '0'); }
  }
  motionButton.addEventListener('click', () => { motionPaused = !motionPaused; storage.set('kni-motion', motionPaused ? 'paused' : 'enabled'); updateMotionLabel(); observeReveals(); scheduleFrame(); });
  const motionChange = event => { if (event.matches) { motionPaused = true; updateMotionLabel(); observeReveals(); } };
  if (media.addEventListener) media.addEventListener('change', motionChange);
  else if (media.addListener) media.addListener(motionChange);
  let revealObserver;
  function observeReveals() {
    if (revealObserver) revealObserver.disconnect();
    if (!('IntersectionObserver' in window) || motionPaused) { $$('.reveal').forEach(node => node.classList.add('visible')); return; }
    revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); }
    }), { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });
    $$('.reveal:not(.visible)').forEach(node => revealObserver.observe(node));
  }
  let framePending = false, pointerX = 0, pointerY = 0;
  const navigationSections = ['about', 'services', 'approach', 'solutions'].map(id => document.getElementById(id));
  function updateFrame() {
    framePending = false;
    const scroll = window.scrollY, range = document.documentElement.scrollHeight - window.innerHeight;
    $('.reading-progress').style.width = `${(range > 0 ? Math.min(1, Math.max(0, scroll / range)) : 0) * 100}%`;
    $('#header').classList.toggle('scrolled', scroll > 24);
    if (!motionPaused) { hero.style.setProperty('--scroll', String(Math.min(1, Math.max(0, scroll / Math.max(1, hero.offsetHeight))))); hero.style.setProperty('--mx', pointerX.toFixed(4)); hero.style.setProperty('--my', pointerY.toFixed(4)); }
    let current = '';
    navigationSections.forEach(section => { if (section.getBoundingClientRect().top <= Math.min(220, window.innerHeight * 0.3)) current = section.id; });
    $$('.desktop-nav a, .mobile-nav a').forEach(link => {
      const active = link.getAttribute('href') === `#${current}`;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
    });
  }
  function scheduleFrame() { if (!framePending) { framePending = true; requestAnimationFrame(updateFrame); } }
  window.addEventListener('scroll', scheduleFrame, { passive: true }); window.addEventListener('resize', scheduleFrame, { passive: true });
  hero.addEventListener('pointermove', event => {
    if (motionPaused || event.pointerType === 'touch') return;
    const bounds = hero.getBoundingClientRect(); pointerX = (event.clientX - bounds.left) / bounds.width - 0.5; pointerY = (event.clientY - bounds.top) / bounds.height - 0.5; scheduleFrame();
  }, { passive: true });
  hero.addEventListener('pointerleave', () => { pointerX = 0; pointerY = 0; scheduleFrame(); });

  const dialog = $('#brief-dialog'), form = $('#brief-form'), output = $('#brief-output');
  function status(message) { state.status = message; $('#brief-status').textContent = message ? text(message) : ''; }
  function openBrief(serviceId, requirement) {
    state.returnFocus = document.activeElement;
    if (serviceId) $('#brief-service').value = serviceId;
    state.briefRequirement = Number.isInteger(requirement) ? requirement : null;
    state.brief = null; form.hidden = false; output.hidden = true; status(null);
    if (!dialog.open) dialog.showModal();
    $('input[name="company"]', form).focus();
  }
  function closeBrief() { dialog.close(); }
  $('#open-brief').addEventListener('click', () => openBrief());
  $('#close-brief').addEventListener('click', closeBrief);
  dialog.addEventListener('cancel', event => { event.preventDefault(); closeBrief(); });
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) closeBrief();
  });
  dialog.addEventListener('close', () => { if (state.returnFocus && document.contains(state.returnFocus)) state.returnFocus.focus({ preventScroll: true }); });
  function formatBrief(brief) {
    const service = services.find(item => item.id === brief.service);
    const label = service ? service.title : pair('حلول متكاملة / عدة خدمات', 'Integrated / multiple services');
    const lines = [text(pair('KNI — ملخّص احتياجات مكان العمل', 'KNI — Workplace requirements brief')), '', `${text(pair('الاسم / الشركة', 'Name / Company'))}: ${brief.company}`, `${text(pair('الخدمة المطلوبة', 'Service required'))}: ${text(label)}`];
    if (brief.requirement !== null) { const solution = solutions[brief.requirement]; lines.push(`${text(pair('احتياج مكان العمل', 'Workplace requirement'))}: ${text(solution.title)}`, `${text(pair('الخدمات المرتبطة', 'Connected services'))}: ${solution.bundle.map(text).join(' + ')}`); }
    lines.push('', `${text(pair('التفاصيل', 'Details'))}:`, brief.details, '', text(pair('تم تجهيز هذا الملخّص محلياً. لم يُرسل إلى KNI.', 'This brief was prepared locally. It has not been sent to KNI.')), 'www.kni.ae');
    return lines.join('\n');
  }
  form.addEventListener('submit', event => {
    event.preventDefault();
    const fields = new FormData(form);
    state.brief = { company: String(fields.get('company') || '').trim(), service: String(fields.get('service') || 'integrated'), details: String(fields.get('details') || '').trim(), requirement: state.briefRequirement };
    if (!state.brief.company || !state.brief.details) { status(pair('أضف اسمك وتفاصيل احتياجك لإنشاء الملخّص.', 'Add your name and requirements to create your brief.')); return; }
    $('#brief-text').textContent = formatBrief(state.brief); form.hidden = true; output.hidden = false;
    status(pair('ملخّصك جاهز للنسخ أو التحميل. لم يُرسل تلقائياً.', 'Your brief is ready to copy or download. It has not been submitted.'));
    $('#copy-brief').focus();
  });
  $('#copy-brief').addEventListener('click', async () => {
    const value = $('#brief-text').textContent;
    try {
      if (!navigator.clipboard || !navigator.clipboard.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(value); status(pair('تم نسخ الملخّص.', 'Brief copied.'));
    } catch {
      const range = document.createRange(); range.selectNodeContents($('#brief-text'));
      const selection = window.getSelection(); if (selection) { selection.removeAllRanges(); selection.addRange(range); }
      status(pair('تم تحديد الملخّص. استخدم أمر النسخ في جهازك لنسخه.', 'The brief is selected. Use your device’s copy command to copy it.'));
    }
  });
  $('#download-brief').addEventListener('click', () => {
    const blob = new Blob(['\uFEFF', $('#brief-text').textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob), link = element('a'); link.href = url; link.download = 'KNI-Workplace-Brief.txt'; document.body.append(link); link.click(); link.remove(); setTimeout(() => URL.revokeObjectURL(url), 1000);
    status(pair('تم تجهيز ملف الملخّص للتحميل.', 'Your brief file is ready to download.'));
  });
  $('#reset-brief').addEventListener('click', () => { state.brief = null; output.hidden = true; form.hidden = false; status(null); $('input[name="company"]', form).focus(); });
  $('#year').textContent = String(new Date().getFullYear());
  setLanguage(state.language); scheduleFrame();
})();
