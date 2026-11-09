export type Annotation = {
  id: string;
  page: string;
  x: number;
  y: number;
  title: string;
  why: string;
  how: string;
};

/** Phase 2 placeholders — shown when annotations toggle is on */
export const annotations: Annotation[] = [
  {
    id: "a1",
    page: "/",
    x: 48,
    y: 12,
    title: "Navigation structure",
    why: "Placeholder — UX workshop will define the improved IA.",
    how: "Mega-nav and category hierarchy will be refined here.",
  },
  {
    id: "a2",
    page: "/product/:id",
    x: 72,
    y: 40,
    title: "Add to cart clarity",
    why: "Placeholder for PDP CTA improvements.",
    how: "Size selection feedback and post-ATC path.",
  },
];
