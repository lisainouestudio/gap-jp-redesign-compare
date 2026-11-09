# Phase 2 — UX workshop gate

Phase 1 is complete: Current and Improved are twins inside the compare shell.

## Next session agenda

1. Walk the flow side by side (desktop, then mobile).
2. Decide Improved divergences — start with **nav IA** on Home.
3. Capture each change as a hotspot in `src/data/annotations.ts` (`title` / `why` / `how`).
4. Optionally skin Improved via `useVariant()` without forking the whole page tree.

## Annotation format

```ts
{
  id: "nav-1",
  page: "/",
  x: 48, // % from left
  y: 12, // % from top
  title: "Clearer category hierarchy",
  why: "Shoppers struggle to find sweaters from the mega-nav.",
  how: "Promote Shop by Category and shorten top-level labels.",
}
```
