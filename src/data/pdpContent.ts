import { asset } from "./asset";

export const pdpPromoOffer = "2点で30%OFF 3点以上で40%OFF";

export type PdpGalleryItem =
  | { type: "image"; src: string; thumb?: string }
  | { type: "video"; src: string; poster: string; thumb?: string };

export type PdpColorway = {
  id: string;
  label: string;
  code: string;
  swatch: string;
  gallery: PdpGalleryItem[];
};

export const pdpColors: PdpColorway[] = [
  {
    id: "036",
    label: "ハッピーストライプ",
    code: "036",
    swatch: asset("images/live/pdp/gallery-flat.png"),
    gallery: [
      { type: "image", src: asset("images/live/pdp/gallery-front.webp") },
      {
        type: "video",
        src: asset("videos/pdp-turtleneck.webm"),
        poster: asset("images/live/pdp/gallery-full.png"),
      },
      { type: "image", src: asset("images/live/pdp/gallery-full.png") },
      { type: "image", src: asset("images/live/pdp/gallery-back.png") },
      { type: "image", src: asset("images/live/pdp/gallery-texture.webp") },
      { type: "image", src: asset("images/live/pdp/gallery-flat.png") },
    ],
  },
  {
    id: "006",
    label: "ブラック",
    code: "006",
    swatch: asset("images/live/pdp/black/flat.png"),
    gallery: [
      { type: "image", src: asset("images/live/pdp/black/look.png") },
      {
        type: "video",
        src: asset("videos/pdp-turtleneck.webm"),
        poster: asset("images/live/pdp/black/full.png"),
      },
      { type: "image", src: asset("images/live/pdp/black/full.png") },
      { type: "image", src: asset("images/live/pdp/black/back.png") },
      { type: "image", src: asset("images/live/pdp/black/texture.png") },
      { type: "image", src: asset("images/live/pdp/black/flat.png") },
    ],
  },
  {
    id: "016",
    label: "フロストアイボリーベージュ",
    code: "026",
    swatch: asset("images/live/pdp/white/texture.webp"),
    gallery: [
      { type: "image", src: asset("images/live/pdp/white/jeans.png") },
      {
        type: "video",
        src: asset("videos/pdp-turtleneck.webm"),
        poster: asset("images/live/pdp/white/front.png"),
      },
      { type: "image", src: asset("images/live/pdp/white/front.png") },
      { type: "image", src: asset("images/live/pdp/white/back.png") },
      { type: "image", src: asset("images/live/pdp/white/styled.png") },
      { type: "image", src: asset("images/live/pdp/white/jacket.png") },
      { type: "image", src: asset("images/live/pdp/white/texture.webp") },
      { type: "image", src: asset("images/live/pdp/white/flat.png") },
    ],
  },
];

/** Default / stripe gallery (kept for any legacy imports) */
export const pdpGallery = pdpColors[0].gallery;

export const pdpSizes = [
  { id: "XXS", available: false },
  { id: "XS", available: true },
  { id: "S", available: true },
  { id: "M", available: true },
  { id: "L", available: true },
  { id: "XL", available: true },
] as const;

export const pdpDescription = [
  "軽やかな着心地のリブニット。ソフトな肌触りとスリムなシルエット、少し短めの着丈が特徴です。",
  "タートルネック、長袖。",
  "リサイクルポリエステルを25%使用。バージン素材と比べ、資源の使用を抑え、廃棄物の削減につながります。",
  "商品番号 1184982",
];

export const pdpFitCopy = [
  "モデル身長：173cm / 着用サイズ：S",
  "フィット：スリム / 着丈：やや短め",
  "ストレッチあり。レイヤードしやすい薄手のリブです。",
];

export const pdpCareCopy = [
  "本体：ポリエステル65%・ナイロン30%・ポリウレタン5%",
  "洗濯機可（ネット使用推奨）",
  "タンブラー乾燥不可 / アイロン弱",
];

export const pdpPerks = [
  {
    title: "最短翌日到着",
    body: "商品は注文日から2〜3日以内(最短翌日)にお届けします。ヤマト運輸のクロネコメンバーズ登録で、受け取り日時・場所の指定や置き配指定など、便利な機能をご利用いただけます。",
  },
  {
    title: "フォーム入力で簡単返品",
    body: "返品は「返品受付フォーム」に必要な情報を入力するだけで簡単に依頼ができます。「ヤマト運輸の営業所や対象コンビニ等に持込」または「ヤマト運輸の集荷」を選んでお手続きいただけます。返品条件などの詳細はヘルプ＆ガイド「返品と交換」をご覧ください。",
    linkLabel: "返品と交換",
  },
  {
    title: "店舗でも無料返品可能",
    body: "オンラインストアで購入された商品も、お近くのGap店舗にて無料で返品を承ります。返品条件などの詳細はヘルプ＆ガイド「返品と交換」をご覧ください。",
    linkLabel: "返品と交換",
  },
];

/** Virtusize mock — cleaner fit graphics + chrome around them */
export const pdpVirtusize = {
  recommendedSize: "S",
  icons: asset("images/live/pdp/virtusize-icons.png"),
  panels: [
    { size: "XXS", src: asset("images/live/pdp/virtusize/xxs.png") },
    { size: "XS", src: asset("images/live/pdp/virtusize/xs.png") },
    { size: "S", src: asset("images/live/pdp/virtusize/s.png"), note: "おすすめ" },
    { size: "M", src: asset("images/live/pdp/virtusize/m.png"), note: "2番目におすすめ" },
  ],
};

export const pdpRecs = [
  {
    id: "1185362006",
    name: "CashSoft カシミヤタッチ オーバーサイズ ハーフジップ セーター",
    price: 11900,
    image: asset("images/live/pdp/rec-1.jpg"),
    badges: [pdpPromoOffer],
  },
  {
    id: "triangle-scarf",
    name: "CashSoft カシミヤタッチ トライアングルニットスカーフ",
    price: 4990,
    image: asset("images/live/pdp/rec-2.jpg"),
    badges: [pdpPromoOffer],
  },
  {
    id: "stretch-mock",
    name: "ストレッチ ジャージー モックネックTシャツ",
    price: 4990,
    image: asset("images/live/pdp/rec-3.jpg"),
    badges: [pdpPromoOffer, "オンラインストア限定"],
  },
  {
    id: "1184759076",
    name: "CashSoft カシミヤタッチ ニットスカーフ",
    price: 5990,
    image: asset("images/live/pdp/rec-4.jpg"),
    badges: [pdpPromoOffer, "SNS着用アイテム"],
  },
  {
    id: "1185362016",
    name: "CashSoft カシミヤタッチ オーバーサイズ ハーフジップ セーター",
    price: 11900,
    image: asset("images/live/pdp/rec-5.jpg"),
    badges: [pdpPromoOffer],
  },
  {
    id: "crew-fairisle-navy",
    name: "CashSoft カシミヤタッチ クルーネックセーター",
    price: 7990,
    image: asset("images/live/pdp/rec-6.jpg"),
    badges: [pdpPromoOffer],
  },
  {
    id: "balaclava-stripe",
    name: "CashSoft カシミヤタッチ ドローストリング バラクラバ",
    price: 4990,
    image: asset("images/live/pdp/rec-7.jpg"),
    badges: [pdpPromoOffer, "オンラインストア限定"],
  },
  {
    id: "cardigan-stripe",
    name: "CashSoft カシミヤタッチ カーディガン",
    price: 11900,
    image: asset("images/live/pdp/rec-8.jpg"),
    badges: [pdpPromoOffer],
  },
  {
    id: "crew-multi-stripe",
    name: "CashSoft カシミヤタッチ クルーネックセーター",
    price: 13900,
    image: asset("images/live/pdp/rec-9.jpg"),
    badges: [pdpPromoOffer],
  },
  {
    id: "crew-fairisle-white",
    name: "CashSoft カシミヤタッチ クルーネックセーター",
    price: 7990,
    image: asset("images/live/pdp/rec-10.jpg"),
    badges: [pdpPromoOffer],
  },
];

/** Intentionally empty — matches live PDP when no recent history */
export const pdpRecent: {
  id: string;
  name: string;
  price: number;
  image: string;
  badges?: string[];
}[] = [];

/** Improved: show recent history so shoppers can jump back easily */
export const pdpRecentImproved = [
  {
    id: "vb-merino-grey",
    name: "Gap × Victoria Beckham メリノ タートルネックセーター",
    price: 14900,
    image: asset("images/live/pdp/recent/recent-1.jpg"),
    badges: ["プロモーション対象外"],
  },
  {
    id: "1183568016",
    name: "Gap × Victoria Beckham ハイライズ ストレートデニム",
    price: 17900,
    image: asset("images/live/pdp/recent/recent-2.jpg"),
    badges: ["プロモーション対象外"],
  },
  {
    id: "1183570006",
    name: "Gap × Victoria Beckham ウールブレンド チェスターフィールドコート",
    price: 49900,
    image: asset("images/live/pdp/recent/recent-3.jpg"),
    badges: ["プロモーション対象外", "オンラインストア限定"],
  },
  {
    id: "903434006",
    name: "Gap × Victoria Beckham オーバーサイズ トレンチコート",
    price: 43900,
    image: asset("images/live/pdp/recent/recent-4.jpg"),
    badges: ["プロモーション対象外"],
  },
  {
    id: "vb-merino-green",
    name: "Gap × Victoria Beckham メリノ タートルネックセーター",
    price: 14900,
    image: asset("images/live/pdp/recent/recent-5.jpg"),
    badges: ["プロモーション対象外", "オンラインストア限定"],
  },
];

export const pdpShopCategories = [
  ["ウィメンズ", "幼児ガールズ"],
  ["メンズ", "幼児ボーイズ"],
  ["ガールズ", "新生児"],
  ["ボーイズ", "アクセサリー"],
];

export const pdpCoordImages = [
  asset("images/live/pdp/coord-1.jpg"),
  asset("images/live/pdp/coord-2.jpg"),
  asset("images/live/pdp/coord-3.jpg"),
];

export const pdpReviewSummary = {
  average: 4.7,
  count: 29,
  fitIndex: 2, // 0..4 — center = ちょうどよい
  aiSummary:
    "多くのレビューで袖丈や着丈のバランスが良いと評価されています。低身長の方でも裾がだらしなくならず、タートルの高さやリブの伸縮がちょうどよいという声が目立ちます。一方で、ワンサイズ上げると袖が長く感じるというコメントもあります。",
  keywords: [
    { label: "袖丈", count: 13 },
    { label: "丈感", count: 8 },
    { label: "着心地", count: 6 },
    { label: "サイズ感", count: 6 },
  ],
};

export const PDP_REVIEWS_PER_PAGE = 3;

export const pdpReviews = [
  {
    id: "r1",
    author: "M.K.",
    date: "2026/10/28",
    rating: 5,
    size: "S",
    height: "158cm",
    title: "袖丈がぴったり",
    body: "低身長ですが袖丈がちょうどよく、タートルも窮屈じゃありません。黒のパンツに合わせやすくリピートしたいです。",
  },
  {
    id: "r2",
    author: "あや",
    date: "2026/10/21",
    rating: 4,
    size: "M",
    height: "165cm",
    title: "薄手でレイヤードしやすい",
    body: "思ったより薄手でインナーにもアウターにも使えます。色味が写真より少し明るめだったので星4つにしました。",
  },
  {
    id: "r3",
    author: "Yuki",
    date: "2026/10/12",
    rating: 5,
    size: "S",
    height: "152cm",
    title: "丈感が優秀",
    body: "短すぎず長すぎず、ボトムにインしてもきれいに収まります。洗っても型崩れしにくくて助かっています。",
  },
  {
    id: "r4",
    author: "なな",
    date: "2026/09/30",
    rating: 5,
    size: "XS",
    height: "155cm",
    title: "着心地が柔らかい",
    body: "カシミヤタッチの表記どおり肌触りがよく、チクチクしません。毎日使えそうな一枚です。",
  },
  {
    id: "r5",
    author: "Rina",
    date: "2026/09/18",
    rating: 4,
    size: "M",
    height: "170cm",
    title: "サイズ感は普通",
    body: "いつものMで問題なし。袖は少し長めですが折り返せば気になりません。コスパも良いと思います。",
  },
  {
    id: "r6",
    author: "さとみ",
    date: "2026/09/05",
    rating: 5,
    size: "S",
    height: "160cm",
    title: "ギフトにも",
    body: "母へのプレゼントに購入。シルエットがきれいと喜ばれました。包装も丁寧でした。",
  },
  {
    id: "r7",
    author: "H.S.",
    date: "2026/08/22",
    rating: 3,
    size: "L",
    height: "168cm",
    title: "袖が長め",
    body: "Lにしたら袖が少し余ります。普通体型ならMがよさそうです。生地自体は気に入っています。",
  },
  {
    id: "r8",
    author: "みき",
    date: "2026/08/09",
    rating: 5,
    size: "S",
    height: "157cm",
    title: "色違いも欲しい",
    body: "ストライプが華やかでコーデのポイントになります。黒も追加で検討中です。",
  },
  {
    id: "r9",
    author: "Emi",
    date: "2026/07/28",
    rating: 4,
    size: "M",
    height: "162cm",
    title: "仕事にも使える",
    body: "オフィスカジュアルにぴったり。伸縮があるので動きやすく一日着ていても楽でした。",
  },
];
