import { asset } from "./asset";

export type Product = {
  id: string;
  slug: string;
  name: string;
  nameEn: string;
  price: number;
  color: string;
  colorCode: string;
  images: string[];
  category: string;
  badge?: string;
};

export type NavItem = {
  id: string;
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const formatYen = (n: number) =>
  `¥${n.toLocaleString("ja-JP")}`;

export const heroProduct: Product = {
  id: "1184982036",
  slug: "lightweight-cashsoft-rib-turtleneck-sweater",
  name: "CashSoft ライトウェイト カシミヤタッチ リブ編み タートルネック セーター",
  nameEn: "CashSoft Lightweight Cashmere-touch Ribbed Turtleneck Sweater",
  price: 7990,
  color: "ハッピーストライプ",
  colorCode: "1184982036",
  images: [
    asset("images/live/pdp/gallery-front.webp"),
    asset("images/live/pdp/gallery-full.png"),
    asset("images/live/pdp/gallery-back.png"),
    asset("images/live/pdp/gallery-texture.webp"),
    asset("images/live/pdp/gallery-flat.png"),
  ],
  category: "セーター＆カーディガン",
  badge: "New",
};

export const plpProducts: Product[] = [
  heroProduct,
  {
    id: "p2",
    slug: "softspun-crewneck",
    name: "ソフトスパン クルーネック セーター",
    nameEn: "Softspun Crewneck Sweater",
    price: 6990,
    color: "ネイビー",
    colorCode: "navy",
    images: [asset("images/product-alt-1.svg")],
    category: "セーター＆カーディガン",
  },
  {
    id: "p3",
    slug: "cashsoft-cardigan",
    name: "CashSoft カーディガン",
    nameEn: "CashSoft Cardigan",
    price: 9990,
    color: "オートミール",
    colorCode: "oatmeal",
    images: [asset("images/product-alt-2.svg")],
    category: "セーター＆カーディガン",
    badge: "Sale",
  },
  {
    id: "p4",
    slug: "rib-mockneck",
    name: "リブ編み モックネック セーター",
    nameEn: "Rib Mockneck Sweater",
    price: 5990,
    color: "ブラック",
    colorCode: "black",
    images: [asset("images/product-alt-3.svg")],
    category: "セーター＆カーディガン",
  },
  {
    id: "p5",
    slug: "vneck-pullover",
    name: "Vネック プルオーバー",
    nameEn: "V-Neck Pullover",
    price: 7490,
    color: "グレー",
    colorCode: "grey",
    images: [asset("images/rec-3.svg")],
    category: "セーター＆カーディガン",
  },
  {
    id: "p6",
    slug: "cropped-cardigan",
    name: "クロップド カーディガン",
    nameEn: "Cropped Cardigan",
    price: 8490,
    color: "クリーム",
    colorCode: "cream",
    images: [asset("images/rec-4.svg")],
    category: "セーター＆カーディガン",
  },
  {
    id: "p7",
    slug: "half-zip-sweater",
    name: "ハーフジップ セーター",
    nameEn: "Half-Zip Sweater",
    price: 8990,
    color: "カーキ",
    colorCode: "khaki",
    images: [asset("images/rec-1.svg")],
    category: "セーター＆カーディガン",
  },
  {
    id: "p8",
    slug: "cable-crew",
    name: "ケーブル編み クルーネック",
    nameEn: "Cable Crewneck",
    price: 10900,
    color: "アイボリー",
    colorCode: "ivory",
    images: [asset("images/rec-2.svg")],
    category: "セーター＆カーディガン",
  },
];

export const recommendations: Product[] = [
  {
    id: "r1",
    slug: "logo-hoodie",
    name: "GAPロゴ フーディー",
    nameEn: "GAP Logo Hoodie",
    price: 10900,
    color: "ブラウン",
    colorCode: "brown",
    images: [asset("images/rec-1.svg")],
    category: "パーカー",
  },
  {
    id: "r2",
    slug: "toddler-puffer",
    name: "ベビーギャップ パファー",
    nameEn: "babyGap Puffer",
    price: 13900,
    color: "ブラウン",
    colorCode: "brown",
    images: [asset("images/rec-2.svg")],
    category: "アウター",
  },
  {
    id: "r3",
    slug: "wide-jeans",
    name: "ワイドレッグ ジーンズ",
    nameEn: "Wide-Leg Jeans",
    price: 9990,
    color: "ライトインディゴ",
    colorCode: "indigo",
    images: [asset("images/rec-3.svg")],
    category: "デニム",
  },
  {
    id: "r4",
    slug: "boatneck-tee",
    name: "ボートネック ロングスリーブ",
    nameEn: "Boatneck Long Sleeve",
    price: 3990,
    color: "ホワイト",
    colorCode: "white",
    images: [asset("images/rec-4.svg")],
    category: "トップス",
  },
];

export const sizes = ["XXS", "XS", "S", "M", "L", "XL"] as const;

export const colors = [
  { id: "stripe", label: "ハッピーストライプ", swatch: "linear-gradient(135deg,#c45c4a,#2c5f8a,#e8d5a3)" },
  { id: "navy", label: "ネイビー", swatch: "#1a2a4a" },
  { id: "black", label: "ブラック", swatch: "#111111" },
  { id: "grey", label: "ヘザーグレー", swatch: "#9a9a9a" },
];

export const mainNav: NavItem[] = [
  {
    id: "women",
    label: "ウィメンズ",
    href: "/women",
    children: [
      { label: "新着アイテム", href: "/women" },
      { label: "セーター＆カーディガン", href: "/women/sweaters" },
      { label: "デニム", href: "/women" },
      { label: "トップス", href: "/women" },
      { label: "アウター", href: "/women" },
    ],
  },
  {
    id: "men",
    label: "メンズ",
    href: "/women",
    children: [
      { label: "新着アイテム", href: "/women" },
      { label: "デニム", href: "/women" },
      { label: "トップス", href: "/women" },
    ],
  },
  { id: "kids", label: "キッズ", href: "/women" },
  { id: "baby", label: "ベビー", href: "/women" },
  { id: "sale", label: "セール", href: "/women" },
];

export const womenCategories = [
  { label: "セーター＆カーディガン", href: "/women/sweaters", image: asset("images/cat-sweaters.svg") },
  { label: "デニム", href: "/women", image: asset("images/cat-denim.svg") },
  { label: "トップス", href: "/women", image: asset("images/cat-tops.svg") },
  { label: "アウター", href: "/women", image: asset("images/cat-outer.svg") },
  { label: "ワンピース", href: "/women", image: asset("images/cat-dress.svg") },
  { label: "アクティブ", href: "/women", image: asset("images/cat-active.svg") },
];

export const homeHeroes = [
  {
    id: "h1",
    title: "Fall CashSoft",
    subtitle: "やわらかな着心地の新作ニット",
    cta: "ウィメンズを見る",
    href: "/women",
    image: asset("images/hero-1.svg"),
  },
  {
    id: "h2",
    title: "Denim for Everyday",
    subtitle: "毎日はけるフィットを見つけよう",
    cta: "デニムを見る",
    href: "/women",
    image: asset("images/hero-2.svg"),
  },
];

export const checkoutCustomer = {
  name: "井上 リサ",
  nameEn: "Lisa Inoue",
  postal: "180-0001",
  address: "東京都武蔵野市吉祥寺北町1-2-3",
  phone: "09000000000",
  email: "lisa@example.com",
  points: 72,
};
