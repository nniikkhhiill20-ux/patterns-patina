# Patterns + Patina

A celebration of furniture with character. Classic furniture forms, made afresh in
Nairobi from real wood and by hand, dressed in bold pattern.

Photography-led marketing site. There is no e-commerce — pieces are made to order and
the conversion is an enquiry.

## Stack

- **[Astro 5](https://astro.build)** with the **Node standalone adapter** (`output: 'server'`).
- Every content page is prerendered; only `/api/enquiry` renders on demand.
- Self-hosted fonts via `@fontsource` (Cormorant Garamond, Jost, Spline Sans Mono).
- Images optimised at build time by `sharp` (large source PNGs never ship to the browser).

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:4321.

## Build & run (production)

```bash
npm run build
npm start        # node ./dist/server/entry.mjs — honours the PORT env var
```

## Deploy (Railway)

`railway.json` builds with Nixpacks (`npm run build`) and starts the Node server. Railway
assigns `PORT` automatically. Push to the connected GitHub repo and Railway redeploys.

Optional: set `ENQUIRY_WEBHOOK` in the Railway service variables to a URL that should also
receive each enquiry as JSON (e.g. an email automation). Without it, enquiries are logged to
stdout and written to `data/enquiries.json`.

## Structure

```
src/
  data/        content model (capsules, pieces), the verbatim manifesto, site chrome
  components/  Header, Footer, ProductCard, Button, Divider, LetterSignup, Wordmark
  layouts/     Base.astro — head, fonts, header/footer, scroll-reveal
  pages/       / · /capsules · /capsules/[slug] · /pieces/[slug] · /about · /commissions
  pages/api/   enquiry.ts — the enquiry + newsletter endpoint
  assets/      photography + logo (processed by astro:assets)
  styles/      global.css — the full design system (tokens, type, buttons, fields)
```

## Content & assets

- The manifesto on `/about` is reproduced verbatim from the brand manual — do not reword it.
- Photography for the workshop, process and makers is still to be sourced; those slots render
  labelled `#EDE9DE` placeholders rather than stock.
- The raster crest should be replaced with an SVG redraw before a real launch (it is used as a
  watermark and at 180px on the About page).
