# Renew Plus — Website

Marketing site for **Renew Plus**, an occupational therapy & rehabilitation practice in New Zealand.

A single-page static website — plain HTML, CSS and JavaScript. No build step.

## Run locally

Just open `index.html` in a browser, or serve the folder:

```bash
# Python
python3 -m http.server
# or Node
npx serve
```

## Files

- `index.html` — page markup
- `styles.css` — all styles + brand design tokens (colours, type, spacing)
- `main.js` — small interactions (mobile menu, sticky-nav shadow, footer year)
- `assets/` — Renew Plus logomark icons (PNG)

## External dependencies (loaded via CDN)

- **Google Fonts** — Fredoka (display) + Nunito (body)
- **Lucide** — icon set

Both load over the network; no install needed.

## Deploying

Works as-is on any static host — **GitHub Pages**, Netlify, Vercel, Cloudflare Pages, etc.
For GitHub Pages: push this folder to a repo and enable Pages on the branch.

## Contact

admin@renewplus.co.nz · 027 455 1832
