export type Annotation = {
  id: string;
  page: string;
  /** Horizontal position as % of page width */
  x: number;
  /** Vertical position in px from top of the page (not % — page is very tall) */
  y: number;
  title: string;
  why: string;
  how: string;
};

/** Shown on Improved when Annotations are on. Numbers follow array order. */
export const annotations: Annotation[] = [
  {
    id: "a-promo-ticker",
    page: "/",
    x: 50,
    y: 28,
    title: "Removed campaign ticker",
    why: "The blue bar repeats the hero message and delays the main content.",
    how: "Removed “GAP MUSIC PRESENTS” so the page opens on logo, nav, and the hero story.",
  },
  {
    id: "a-hero-play-once",
    page: "/",
    x: 78,
    y: 460,
    title: "Hero plays once, then static",
    why: "A looping video pulls attention from the headline and CTAs.",
    how: "Video plays once, then freezes on the last frame. Current still loops.",
  },
  {
    id: "a-header-focus",
    page: "/",
    x: 91,
    y: 36,
    title: "Simplified header, account in actions",
    why: "Shoppers came for Gap. The sister-brand bar and text login pull focus away from the task.",
    how: "Removed the top black bar. Moved sign-in into an account icon between wishlist and bag.",
  },
  {
    id: "a-nav-ia",
    page: "/",
    x: 28,
    y: 36,
    title: "Audience-first navigation",
    why: "The current nav mixes campaigns, collabs, and categories, so finding a department takes extra work.",
    how: "Reduced top nav to five audiences — Women, Men, Girls, Boys, Baby — and placed them beside the logo.",
  },
  {
    id: "a-mega-menu",
    page: "/",
    x: 22,
    y: 72,
    title: "Clearer mega menu",
    why: "Shoppers need a fast path from audience to item, story, or sale — not a mixed list of campaigns and categories.",
    how: "On hover, a 4-column menu groups Shop by item, Featured & collab, GapBody/GapFit, and New & popular. Sale stays in red.",
  },
  {
    id: "a-post-hero-split",
    page: "/",
    x: 50,
    y: 620,
    title: "Three offers under the hero",
    why: "A thin promo strip above the hero is easy to miss, and stacking full-bleed modules makes the page feel long before shoppers act.",
    how: "Moved sale, Gap Music, and Color your sweats into one contained three-column band under the holiday hero.",
  },
  {
    id: "a-snap-tabs",
    page: "/",
    x: 22,
    y: 1975,
    title: "One staff snap module with tabs",
    why: "Two separate snap carousels add scroll length and split related content.",
    how: "Merged into one Staff Snap module with WOMENS & MEN / KIDS & BABY tabs (WOMENS & MEN default). Tiles stay full-body portrait in a smaller UGC frame, with name/height/date below the image for readability. Tiles open a staff-snap lightbox.",
  },
  {
    id: "a-feature-slider",
    page: "/",
    x: 28,
    y: 1120,
    title: "Feature shops as a slider",
    why: "A single full-bleed Hailey module hides other key stories that were buried in the bottom promo drawer.",
    how: "Replaced it with a horizontal slider on a light gray section: The Hailey Jean, Gap × Victoria Beckham, Character Shop, Cozy Accessories, and Give your gift. Removed the bottom promo drawer so those stories live in one place.",
  },
  {
    id: "a-news-to-footer",
    page: "/",
    x: 82,
    y: 4895,
    title: "News moved to the footer",
    why: "A full news row on the homepage doesn’t help shoppers complete a purchase and adds scroll length after the browse modules.",
    how: "Removed the news carousel from the homepage and added a News link in the footer for anyone who still needs it.",
  },
  {
    id: "a-brand-spotlight",
    page: "/",
    x: 28,
    y: 4140,
    title: "Brand stories as a clearer grid",
    why: "The old dense promo cards felt heavy after browsing, and didn’t separate cleanly from the modules above.",
    how: "Rebuilt the eight brand stories as a simple 4×2 image + text grid on a light gray section divider.",
  },
];











