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

## Deploy

Static Vite build. Connect the GitHub repo to Vercel (framework preset: Vite) or:

```bash
npx vercel --prod
```

## Phase 2

Improved currently mirrors Current. Next: diverge Improved (especially nav IA) and fill hotspot copy in `src/data/annotations.ts`.
