import { asset } from "./asset";

/** Faithful Current-site chrome extracted from gap.co.jp */

export const utilityLinks = [
  { label: "店舗検索", href: "/" },
  { label: "ニュース", href: "/" },
  { label: "ヘルプ&ガイド", href: "/" },
];

export const brandSwitcher: {
  id: string;
  label: string;
  href: string;
  active: boolean;
  external?: boolean;
}[] = [
  {
    id: "gap",
    label: "GAP",
    href: "/",
    active: true,
  },
  {
    id: "br",
    label: "BANANA REPUBLIC",
    href: "https://bananarepublic.gap.co.jp/?ssiteID=GAP_JP",
    active: false,
    external: true,
  },
];

export type MegaColumn = {
  title?: string;
  links: { label: string; href: string; accent?: boolean }[];
};

export type MainNavItem = {
  id: string;
  label: string;
  href: string;
  accent?: boolean;
  columns?: MegaColumn[];
};

export const mainNav: MainNavItem[] = [
  {
    id: "new",
    label: "新作・おすすめ",
    href: "/women",
    columns: [
      {
        title: "新着",
        links: [
          { label: "ウィメンズ | 新着", href: "/women" },
          { label: "メンズ | 新着", href: "/women" },
          { label: "ガールズ 110-160cm | 新着", href: "/women" },
          { label: "ボーイズ 110-160cm | 新着", href: "/women" },
          { label: "幼児・ベビーガールズ | 新着", href: "/women" },
          { label: "幼児・ベビーボーイズ | 新着", href: "/women" },
          { label: "新生児 | 新着", href: "/women" },
        ],
      },
      {
        title: "特集・おすすめ",
        links: [
          { label: "The Holiday Collection", href: "/women" },
          { label: "Gap Hoodie Day", href: "/women" },
          { label: "Momijiコレクション", href: "/women" },
          { label: "GapStudio", href: "/women" },
          { label: "GAP MUSIC 着用アイテム", href: "/women" },
          { label: "おそろいパジャマ", href: "/women" },
          { label: "セットアップ", href: "/women" },
          { label: "Gap x ディズニー", href: "/women" },
          { label: "The Logo Shop", href: "/women" },
          { label: "人気キャラクター", href: "/women" },
          { label: "今週のベストセラー", href: "/women" },
        ],
      },
    ],
  },
  {
    id: "gapx",
    label: "GapX",
    href: "/women",
    columns: [
      {
        title: "ブランドコラボ",
        links: [
          { label: "GAP × Victoria Beckham", href: "/women" },
          { label: "【特集】Gap × A.P.C.", href: "/women" },
          { label: "Gap × A.P.C.", href: "/women" },
          { label: "Gap × Malbon", href: "/women" },
          { label: "OuiGap Collection", href: "/women" },
          { label: "Gap x Sean Wotherspoon", href: "/women" },
          { label: "GAP × Awake NY", href: "/women" },
          { label: "Gap x Harlem's Fashion Row", href: "/women" },
        ],
      },
      {
        title: "コレクション",
        links: [
          { label: "ザ・シンプソンズ", href: "/women" },
          { label: "ONE PIECE", href: "/women" },
          { label: "FIFA Classics", href: "/women" },
          { label: "スーパーマリオ", href: "/women" },
          { label: "アーティストシリーズ", href: "/women" },
        ],
      },
      {
        title: "アーカイブ",
        links: [
          { label: "Gap × NEW ERA®", href: "/women" },
          { label: "Gap × Sandy Liang", href: "/women" },
          { label: "Gap × BÉIS", href: "/women" },
          { label: "Gap × DÔEN", href: "/women" },
        ],
      },
    ],
  },
  {
    id: "women",
    label: "ウィメンズ",
    href: "/women",
    columns: [
      {
        title: "新作・おすすめ",
        links: [
          { label: "ウィメンズ | 新着", href: "/women" },
          { label: "The Hailey Jean", href: "/women" },
          { label: "The Holiday Collection", href: "/women" },
          { label: "GAP × Victoria Beckham", href: "/women" },
          { label: "Gap Hoodie Day", href: "/women" },
          { label: "Momijiコレクション", href: "/women" },
          { label: "今週のベストセラー", href: "/women" },
          { label: "GAPロゴ", href: "/women" },
          { label: "ウィメンズ おすすめアイテム", href: "/women" },
          { label: "ユニセックス", href: "/women" },
          { label: "オンラインストア限定", href: "/women" },
        ],
      },
      {
        title: "商品カテゴリー",
        links: [
          { label: "アイテム一覧（ウィメンズ）", href: "/women" },
          { label: "パーカー・スウェット上下", href: "/women" },
          { label: "セーター・カーディガン", href: "/women/sweaters" },
          { label: "アウター・ジャケット", href: "/women" },
          { label: "セットアップ", href: "/women" },
          { label: "Tシャツ・トップス", href: "/women" },
          { label: "デニム", href: "/women" },
          { label: "ブラウス・シャツ", href: "/women" },
          { label: "パンツ・ボトムス", href: "/women" },
          { label: "スカート", href: "/women" },
          { label: "ワンピース・オールインワン・サロペット", href: "/women" },
          { label: "GapBody パジャマ・ルームウェア", href: "/women" },
          { label: "GapFit アクティブ", href: "/women" },
          { label: "小物・ペット", href: "/women" },
        ],
      },
      {
        title: "セール",
        links: [{ label: "セール (ウィメンズ)", href: "/women", accent: true }],
      },
    ],
  },
  {
    id: "men",
    label: "メンズ",
    href: "/women",
    columns: [
      {
        title: "新作・おすすめ",
        links: [
          { label: "メンズ | 新着", href: "/women" },
          { label: "The Holiday Collection", href: "/women" },
          { label: "Gap Hoodie Day", href: "/women" },
          { label: "ザ・シンプソンズ", href: "/women" },
          { label: "ONE PIECE", href: "/women" },
          { label: "The Logo Shop", href: "/women" },
          { label: "今週のベストセラー", href: "/women" },
        ],
      },
      {
        title: "商品カテゴリー",
        links: [
          { label: "アイテム一覧 (メンズ）", href: "/women" },
          { label: "パーカー・スウェット上下", href: "/women" },
          { label: "アウター・ジャケット", href: "/women" },
          { label: "セーター・カーディガン", href: "/women/sweaters" },
          { label: "Tシャツ・トップス", href: "/women" },
          { label: "シャツ", href: "/women" },
          { label: "デニム", href: "/women" },
          { label: "パンツ・ボトムス", href: "/women" },
        ],
      },
      {
        title: "セール",
        links: [{ label: "セール (メンズ)", href: "/women", accent: true }],
      },
    ],
  },
  {
    id: "girls",
    label: "ガールズ",
    href: "/women",
    columns: [
      {
        title: "新作・おすすめ",
        links: [
          { label: "ガールズ 110-160cm | 新着", href: "/women" },
          { label: "The Holiday Collection", href: "/women" },
          { label: "人気キャラクター", href: "/women" },
          { label: "GAPロゴ", href: "/women" },
        ],
      },
      {
        title: "商品カテゴリー",
        links: [
          { label: "アイテム一覧 (ガールズ）", href: "/women" },
          { label: "パーカー・スウェット上下", href: "/women" },
          { label: "セットアップ", href: "/women" },
          { label: "デニム", href: "/women" },
          { label: "ワンピース・スカート", href: "/women" },
        ],
      },
    ],
  },
  {
    id: "boys",
    label: "ボーイズ",
    href: "/women",
    columns: [
      {
        title: "新作・おすすめ",
        links: [
          { label: "ボーイズ 110-160cm | 新着", href: "/women" },
          { label: "The Holiday Collection", href: "/women" },
          { label: "GAPロゴ", href: "/women" },
        ],
      },
      {
        title: "商品カテゴリー",
        links: [
          { label: "アイテム一覧 (ボーイズ）", href: "/women" },
          { label: "パーカー・スウェット上下", href: "/women" },
          { label: "デニム", href: "/women" },
          { label: "GAPFIT・アクティブウェア", href: "/women" },
        ],
      },
    ],
  },
  {
    id: "baby",
    label: "幼児＆ベビー",
    href: "/women",
    columns: [
      {
        title: "特集",
        links: [
          { label: "ブラナンベア特集", href: "/women" },
          { label: "厳選!ギフト決定版", href: "/women" },
          { label: "はじめてのお気に入り", href: "/women" },
        ],
      },
      {
        title: "商品カテゴリー",
        links: [
          { label: "アイテム一覧 (幼児・ベビーガールズ）", href: "/women" },
          { label: "ボディスーツ・カバーオール", href: "/women" },
          { label: "セットアップ・コーデセット", href: "/women" },
          { label: "アイテム一覧 (新生児)", href: "/women" },
        ],
      },
    ],
  },
  { id: "accessories", label: "小物", href: "/women" },
  { id: "sale", label: "セール", href: "/women", accent: true },
];

export const footerHelp = [
  { label: "ヘルプ＆ガイド", href: "/" },
  { label: "返品について", href: "/" },
  { label: "配送料について", href: "/" },
  { label: "お問い合わせ", href: "/" },
  { label: "GAPメンバーシップ", href: "/" },
  { label: "店舗検索", href: "/" },
  { label: "ギフトカードについて", href: "/" },
];

export const footerLegal = [
  { label: "プライバシーポリシー", href: "/" },
  { label: "利用規約", href: "/" },
  { label: "プライバシー設定", href: "/" },
  { label: "特定商取引法・古物営業法に基づく表示案内", href: "/" },
  { label: "サステナビリティ", href: "/" },
  { label: "企業情報", href: "/" },
  { label: "採用情報", href: "/" },
  { label: "プレスリリース", href: "/" },
];

export const footerNews = [
  {
    tag: "ご案内",
    title: "オンラインストアのお支払いはPayPayで。期間限定PayPayクーポン配布中！",
    date: "2026.11.10",
  },
  {
    tag: "ストア",
    title: "Gap イオンモールKYOTO店 RE-OPEN!",
    date: "2026.11.09",
  },
  {
    tag: "ストア",
    title: "Gift your style.｜Gapスタッフのホリデーコーデ",
    date: "2026.11.05",
  },
  {
    tag: "ストア",
    title: "Gap ららぽーと横浜店 閉店のお知らせ",
    date: "2026.10.26",
  },
];

export const homePromoStrip =
  "2点で30%OFF、3点以上で40%OFF — 対象アイテムを見る";

export const homeHero = {
  eyebrow: "The Holiday Collection",
  title: "Give your gift.",
  subtitle: "届けよう。あなたらしく。",
  body: "ホリデーシーズンに贈る、あたたかいニットとロゴの定番たち。",
  image: asset("images/live/hero-hailey.jpg"),
  ctas: [
    { label: "ホリデーコレクションをチェック", href: "/women" },
    { label: "新作をチェック", href: "/women" },
  ],
};

export const homeCategoryTiles = [
  { label: "ウィメンズ", href: "/women", image: asset("images/live/cat-w.jpg") },
  { label: "メンズ", href: "/women", image: asset("images/live/cat-m.jpg") },
  { label: "キッズ", href: "/women", image: asset("images/live/cat-k.jpg") },
  { label: "幼児・ベビー", href: "/women", image: asset("images/live/cat-b.jpg") },
];

export const homeFeatureBanner = {
  title: "スウェットをチェック",
  href: "/women",
  image: asset("images/live/tile-active.jpg"),
};

export const homeEditorialTiles = [
  {
    title: "GAP × Victoria Beckham",
    href: "/women",
    image: asset("images/live/md-vb.png"),
  },
  {
    title: "人気キャラクター",
    href: "/women",
    image: asset("images/live/md-kb.png"),
  },
  {
    title: "ホリデーアクセサリー",
    href: "/women",
    image: asset("images/live/md-hol.png"),
  },
  {
    title: "GAP MUSIC PROJECT",
    href: "/women",
    image: asset("images/live/md-music1.png"),
  },
];

export const homeBrandAnnouncements = [
  {
    title: "GapX",
    href: "/women",
    image: asset("images/live/ba-gapx.jpg"),
  },
  {
    title: "Gap for Good",
    href: "/women",
    image: asset("images/live/ba-good.jpg"),
  },
  {
    title: "Baby Gifts We Love",
    href: "/women",
    image: asset("images/live/ba-baby.jpg"),
  },
  {
    title: "パーソナルスタイリング",
    href: "/women",
    image: asset("images/live/ba-styling.jpg"),
  },
];

export const staffSnaps = [
  { name: "Ito", height: "161cm", store: "Gapストア 国分寺マルイ店" },
  { name: "Hiyori", height: "159cm", store: "Gap Outlet 北陸小矢部店" },
  { name: "Natan", height: "170cm", store: "Gap Outlet 御殿場店" },
  { name: "Sato", height: "163cm", store: "Gapストア 大宮西口駅前店" },
  { name: "Kabun", height: "167cm", store: "Gapストア 高松店" },
  { name: "Suzuki", height: "161cm", store: "Gapストア ららぽーと和泉店" },
  { name: "MIYU", height: "176cm", store: "Gap Outlet 多摩南大沢店" },
  { name: "Yasumi", height: "162cm", store: "Gapストア 新宿フラッグス店" },
];
