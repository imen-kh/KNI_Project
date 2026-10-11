# KNI Website — Editable Source / Deployment Package

الموقع كاملاً: HTML + CSS + Vanilla JavaScript + SVG animations.

This repository contains the website source and the images, logos, fonts and SVG animations needed to run it. The company profile PDF and its download links are excluded.

## Deployment

Clone this repository, or choose **Code → Download ZIP** on GitHub and extract it. `index.html` is at the repository root. Upload the website files alongside `assets/` to your hosting document root (`public_html` on typical cPanel hosting).

```sh
git clone https://github.com/imen-kh/KNI_Project.git
cd KNI_Project
```

For Netlify or Cloudflare Pages direct upload, upload the extracted folder. No installation, dependencies, build command, database or backend is required.

Add your domain in the hosting dashboard, then apply the DNS records supplied by that host. Keep existing email MX/TXT records. Enable HTTPS.

Set production metadata before uploading:

```sh
python3 set-site-url.py https://your-domain.example
```

Or manually update `og:image`, `og:url` and the canonical URL in `index.html`.

## Local preview

```sh
python3 -m http.server 8080 --bind 127.0.0.1
```

Open http://127.0.0.1:8080. Serve the files over HTTP(S): section animation SVGs are loaded through fetch().

## Editing

- `index.html`: page structure, Arabic/English text, links and inline hero SVG.
- `styles.css`, `fonts.css`: overall styling and locally hosted fonts.
- `app.js`: language switching, service/solution tabs and brief workflow.
- `office-motion.css`, `hero-assembly.css`: homepage office animation.
- `section-motion.js`, `section-motion.css`, `motion-*.css`: section animations and lazy loading.
- `assets/motion/*.svg`: individual animated illustrations.
- `assets/`: site images, company logos and local fonts, including font licenses.

The current request form generates a local copy/download only. Email or WhatsApp delivery requires a separate integration using the company's confirmed contact details.

The source and assets are self-contained and do not require ChatGPT hosting or a ChatGPT account.
