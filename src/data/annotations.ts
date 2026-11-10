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
    id: "a-feature-slider",
    page: "/",
    x: 28,
    y: 1100,
    title: "Feature shops as a slider",
    why: "A single full-bleed Hailey module hides other key stories that were buried in the bottom promo drawer.",
    how: "Replaced it with a horizontal slider on a light gray section: The Hailey Jean, Gap × Victoria Beckham, Character Shop, Cozy Accessories, and Give your gift. Removed the bottom promo drawer so those stories live in one place.",
  },
  {
    id: "a-snap-tabs",
    page: "/",
    x: 22,
    y: 1960,
    title: "One staff snap module with tabs",
    why: "Two separate snap carousels add scroll length and split related content.",
    how: "Merged into one Staff Snap module with WOMENS & MEN / KIDS & BABY tabs (WOMENS & MEN default). Tiles stay full-body portrait in a smaller UGC frame, with name/height/date below the image for readability. Tiles open a staff-snap lightbox.",
  },
  {
    id: "a-brand-spotlight",
    page: "/",
    x: 28,
    y: 2480,
    title: "Brand stories as a clearer grid",
    why: "The old dense promo cards felt heavy after browsing, and didn’t separate cleanly from the modules above.",
    how: "Rebuilt the eight brand stories as a simple 4×2 image + text grid on a light gray section divider.",
  },
  {
    id: "a-news-to-footer",
    page: "/",
    x: 18,
    y: 3020,
    title: "News moved to the footer",
    why: "A full news row on the homepage doesn’t help shoppers complete a purchase and adds scroll length after the browse modules.",
    how: "Removed the news carousel from the homepage and added a News link in the footer for anyone who still needs it.",
  },
  {
    id: "a-pdp-model-fit",
    page: "/product/:id",
    x: 48,
    y: 620,
    title: "Model height & size on the image",
    why: "Shoppers can’t tell how the garment fits from the photo alone, and fit details are buried in tabs below the fold.",
    how: "Added “Model: 172cm / Size worn: L” on the bottom-right of the main gallery image so fit context stays with the product shot.",
  },
  {
    id: "a-pdp-size-preselect",
    page: "/product/:id",
    x: 80,
    y: 480,
    title: "Recommended size pre-selected",
    why: "Landing with no size selected forces an extra step and shows “Select a size” instead of a ready-to-buy CTA.",
    how: "Pre-selects the Virtusize recommended size (S) on load so the CTA already reads “Add to cart.”",
  },
  {
    id: "a-pdp-store-status",
    page: "/product/:id",
    x: 80,
    y: 545,
    title: "Store availability, not a search dead-end",
    why: "“Store stock search” sends shoppers into a locator for an online-only item, which wastes a step.",
    how: "Renamed to “Store stock status” and states up front that this item isn’t sold in stores.",
  },
  {
    id: "a-pdp-ship-estimate",
    page: "/product/:id",
    x: 78,
    y: 600,
    title: "Delivery date from your location",
    why: "Generic “arrives next day” copy doesn’t tell shoppers when their order will actually arrive.",
    how: "Auto-detects approximate location and shows a concrete delivery window plus destination (postal code + city), with details still available via the info icon.",
  },
  {
    id: "a-pdp-rating",
    page: "/product/:id",
    x: 92,
    y: 210,
    title: "Customer rating beside price",
    why: "Gap’s current PDP has no social proof, so shoppers lack a quick signal for whether the product is worth buying.",
    how: "Added the star rating and review count on the right edge of the price row, plus a full reviews section beneath product details, so shoppers can feel more confident about purchasing—or walking away.",
  },
  {
    id: "a-pdp-details-accordion",
    page: "/product/:id",
    x: 50,
    y: 780,
    title: "Centered product details accordion",
    why: "In the old layout, product details sat narrow on the left and felt tucked away, so shoppers often missed 商品説明 and related copy.",
    how: "Centered the details block and switched to a vertical accordion so the content is easier to spot and open in place.",
  },
  {
    id: "a-pdp-recent",
    page: "/product/:id",
    x: 22,
    y: 3180,
    title: "Recently viewed for easier return",
    why: "When recent history is empty, shoppers have to re-find items through browse or search just to compare or go back.",
    how: "Surfaces recently viewed products (Victoria Beckham edit) so shoppers can jump back in one click.",
  },
  {
    id: "a-pdp-reviews",
    page: "/product/:id",
    x: 50,
    y: 980,
    title: "Reviews under product details",
    why: "Without reviews on the PDP, shoppers lack social proof and fit context before adding to cart.",
    how: "Added a reviews block under the details accordion with rating, fit scale, AI summary, keywords, three visible reviews, and pagination.",
  },
  {
    id: "a-pdp-coord-order",
    page: "/product/:id",
    x: 50,
    y: 1680,
    title: "Outfit ideas moved up",
    why: "おすすめコーディネート商品 used to sit lower on the page, so shoppers decided on the item before seeing how to wear it with other pieces.",
    how: "Brought the coordinate module up after reviews so shoppers can envision complete looks sooner.",
  },
];











