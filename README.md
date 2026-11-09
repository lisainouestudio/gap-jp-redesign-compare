# Gap JP — Redesign Compare

Interactive UX mockup that recreates Gap Japan’s browse-to-checkout flow and shows **Current** vs **Improved** side by side.

> Portfolio / recruiter demo. Not affiliated with Gap Inc. Product photography uses placeholder SVGs; UI chrome is a faithful recreation for redesign discussion.

## Features

- Side-by-side or Improved-only layout
- Desktop / mobile viewport frames
- Annotation hotspots toggle (Phase 2 content — placeholders for now)
- Synced navigation across both panes
- Shared design system (tokens + components)
- Flow: Home → Women CLP → Sweaters PLP → PDP → ATC modal → Cart → Checkout

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Live demo

- **GitHub Pages:** https://lisainouestudio.github.io/gap-jp-redesign-compare/
- **Repo:** https://github.com/lisainouestudio/gap-jp-redesign-compare

### Redeploy Pages

```bash
GITHUB_PAGES=true npm run build && npx gh-pages -d dist -b gh-pages
```

### Vercel (optional)

```bash
npx vercel login
npx vercel --prod
```

## Phase 2

Improved currently mirrors Current. Next: diverge Improved (especially nav IA) and fill hotspot copy in `src/data/annotations.ts`.
