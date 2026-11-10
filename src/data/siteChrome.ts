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

/** Improved mega — shop by item / featured / body-fit / new & popular */
const womenMegaImproved: MegaColumn[] = [
  {
    title: "アイテムから探す",
    links: [
      { label: "アイテム一覧", href: "/women" },
      { label: "パーカー・スウェット上下", href: "/women" },
      { label: "セーター・カーディガン", href: "/women/sweaters" },
      { label: "アウター・ジャケット", href: "/women" },
      { label: "セットアップ", href: "/women" },
      { label: "Tシャツ・トップス", href: "/women" },
      { label: "デニム", href: "/women" },
      { label: "ブラウス・シャツ", href: "/women" },
      { label: "ボトムス", href: "/women" },
      { label: "スカート", href: "/women" },
      { label: "ワンピース・オールインワン・サロペット", href: "/women" },
      { label: "小物・ペット", href: "/women" },
    ],
  },
  {
    title: "特集コラボ",
    links: [
      { label: "GapX", href: "/women" },
      { label: "Gap × A.P.C.", href: "/women" },
      { label: "GAP × Victoria Beckham", href: "/women" },
      { label: "Momiji Collection", href: "/women" },
      { label: "The Holiday Collection", href: "/women" },
      { label: "The Hailey Jean", href: "/women" },
      { label: "GAPロゴ", href: "/women" },
    ],
  },
  {
    title: "GapBody・GapFit",
    links: [
      { label: "アイテム一覧", href: "/women" },
      { label: "パジャマ・ルームウェア", href: "/women" },
      { label: "アンダーウェア", href: "/women" },
      { label: "アクティブ", href: "/women" },
    ],
  },
  {
    title: "新着・人気",
    links: [
      { label: "新着", href: "/women" },
      { label: "今週のベストセラー", href: "/women" },
      { label: "おすすめアイテム", href: "/women" },
      { label: "オンラインストア限定", href: "/women" },
      { label: "ユニセックス", href: "/women" },
      { label: "セール", href: "/women", accent: true },
    ],
  },
];

const menMegaImproved: MegaColumn[] = [
  {
    title: "アイテムから探す",
    links: [
      { label: "アイテム一覧", href: "/women" },
      { label: "パーカー・スウェット上下", href: "/women" },
      { label: "セーター・カーディガン", href: "/women/sweaters" },
      { label: "アウター・ジャケット", href: "/women" },
      { label: "セットアップ", href: "/women" },
      { label: "Tシャツ・トップス", href: "/women" },
      { label: "シャツ", href: "/women" },
      { label: "デニム", href: "/women" },
      { label: "ボトムス", href: "/women" },
      { label: "小物・ペット", href: "/women" },
    ],
  },
  {
    title: "特集コラボ",
    links: [
      { label: "GapX", href: "/women" },
      { label: "Gap × A.P.C.", href: "/women" },
      { label: "The Holiday Collection", href: "/women" },
      { label: "GAPロゴ", href: "/women" },
    ],
  },
  {
    title: "GapBody・GapFit",
    links: [
      { label: "アイテム一覧", href: "/women" },
      { label: "パジャマ・ルームウェア", href: "/women" },
      { label: "アンダーウェア", href: "/women" },
      { label: "アクティブ", href: "/women" },
    ],
  },
  {
    title: "新着・人気",
    links: [
      { label: "新着", href: "/women" },
      { label: "今週のベストセラー", href: "/women" },
      { label: "おすすめアイテム", href: "/women" },
      { label: "オンラインストア限定", href: "/women" },
      { label: "ユニセックス", href: "/women" },
      { label: "セール", href: "/women", accent: true },
    ],
  },
];

const kidsMegaImproved: MegaColumn[] = [
  {
    title: "アイテムから探す",
    links: [
      { label: "アイテム一覧", href: "/women" },
      { label: "パーカー・スウェット上下", href: "/women" },
      { label: "アウター・ジャケット", href: "/women" },
      { label: "セットアップ", href: "/women" },
      { label: "Tシャツ・トップス", href: "/women" },
      { label: "デニム", href: "/women" },
      { label: "ボトムス", href: "/women" },
      { label: "ワンピース・スカート", href: "/women" },
      { label: "小物", href: "/women" },
    ],
  },
  {
    title: "特集コラボ",
    links: [
      { label: "GapX", href: "/women" },
      { label: "The Holiday Collection", href: "/women" },
      { label: "人気キャラクター", href: "/women" },
      { label: "GAPロゴ", href: "/women" },
    ],
  },
  {
    title: "GapBody・GapFit",
    links: [
      { label: "アイテム一覧", href: "/women" },
      { label: "パジャマ・ルームウェア", href: "/women" },
      { label: "アクティブ", href: "/women" },
    ],
  },
  {
    title: "新着・人気",
    links: [
      { label: "新着", href: "/women" },
      { label: "今週のベストセラー", href: "/women" },
      { label: "おすすめアイテム", href: "/women" },
      { label: "セール", href: "/women", accent: true },
    ],
  },
];

const babyMegaImproved: MegaColumn[] = [
  {
    title: "アイテムから探す",
    links: [
      { label: "アイテム一覧", href: "/women" },
      { label: "ボディスーツ・カバーオール", href: "/women" },
      { label: "セットアップ・コーデセット", href: "/women" },
      { label: "トップス", href: "/women" },
      { label: "ボトムス", href: "/women" },
      { label: "アウター", href: "/women" },
      { label: "ワンピース・スカート", href: "/women" },
      { label: "小物", href: "/women" },
      { label: "新生児", href: "/women" },
    ],
  },
  {
    title: "特集コラボ",
    links: [
      { label: "ブラナンベア特集", href: "/women" },
      { label: "The Holiday Collection", href: "/women" },
      { label: "厳選!ギフト決定版", href: "/women" },
      { label: "GAPロゴ", href: "/women" },
    ],
  },
  {
    title: "GapBody",
    links: [
      { label: "アイテム一覧", href: "/women" },
      { label: "パジャマ・ルームウェア", href: "/women" },
    ],
  },
  {
    title: "新着・人気",
    links: [
      { label: "新着", href: "/women" },
      { label: "おすすめアイテム", href: "/women" },
      { label: "はじめてのお気に入り", href: "/women" },
      { label: "セール", href: "/women", accent: true },
    ],
  },
];

const gapxMegaImproved: MegaColumn[] = [
  {
    title: "ブランドコラボ",
    links: [
      { label: "GAP × Victoria Beckham", href: "/women" },
      { label: "Gap × A.P.C.", href: "/women" },
      { label: "Gap × Malbon", href: "/women" },
      { label: "OuiGap Collection", href: "/women" },
      { label: "Gap x Sean Wotherspoon", href: "/women" },
      { label: "GAP × Awake NY", href: "/women" },
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
];

/** Improved IA — audience-first top nav + structured mega */
export const mainNavImproved: MainNavItem[] = [
  { id: "women", label: "WOMEN", href: "/women", columns: womenMegaImproved },
  { id: "men", label: "MEN", href: "/women", columns: menMegaImproved },
  { id: "girls", label: "GIRLS", href: "/women", columns: kidsMegaImproved },
  { id: "boys", label: "BOYS", href: "/women", columns: kidsMegaImproved },
  { id: "baby", label: "BABY", href: "/women", columns: babyMegaImproved },
  { id: "gapx", label: "GAPX", href: "/women", columns: gapxMegaImproved },
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
    image: asset("images/live/news-1.jpg"),
  },
  {
    tag: "ストア",
    title: "Gap イオンモールKYOTO店 RE-OPEN!",
    date: "2026.11.09",
    image: asset("images/live/news-2.jpg"),
  },
  {
    tag: "ストア",
    title: "Gift your style.｜Gapスタッフのホリデーコーデ",
    date: "2026.11.05",
    image: asset("images/live/news-3.jpg"),
  },
  {
    tag: "ストア",
    title: "Gap Logo POPUP-SHOP",
    date: "2026.11.01",
    image: asset("images/live/news-4.jpg"),
  },
  {
    tag: "ストア",
    title: "babyGap POP-UP SHOP",
    date: "2026.11.01",
    image: asset("images/live/news-5.jpg"),
  },
];

/** Live homepage brand-announcement / cross-promo grid (2×4) */
export const homeCrossPromos = [
  {
    id: "music",
    title: "GAP MUSIC",
    body: "音楽もファッションも、自分らしさを映し出す。ひとつひとつの表現が、カルチャーとなっていく。",
    cta: "特設サイト",
    image: asset("images/live/promo/ba-music.png"),
    href: "/",
    tone: "#0033a0",
  },
  {
    id: "loyalty",
    title: "メンバーシップがリニューアル!",
    body: "新規会員登録で1,000ポイントプレゼント。これからも、魅力が広がるメンバーシップへ。",
    cta: "今すぐ登録",
    image: asset("images/live/promo/ba-loyalty.png"),
    href: "/",
    tone: "#000d42",
  },
  {
    id: "gapx",
    title: "GapX",
    body: "多様なブランドの世界観が交差する、期間限定コラボコレクション。",
    cta: "もっと詳しく",
    image: asset("images/live/promo/ba-gapx.png"),
    href: "/women",
    tone: "#111111",
  },
  {
    id: "good",
    title: "Create better.",
    body: "サステナビリティへの取り組みと、環境に配慮したものづくりについて。",
    cta: "もっと詳しく",
    image: asset("images/live/promo/ba-good.png"),
    href: "/women",
    tone: "#5a6a7a",
  },
  {
    id: "baby",
    title: "Baby Gifts We Love",
    body: "サービススタッフがセレクトした、出産祝い・ギフトアイディア。",
    cta: "出産祝い・ギフトアイディアをチェック",
    image: asset("images/live/promo/ba-baby.png"),
    href: "/women",
    tone: "#c9d2dc",
  },
  {
    id: "styling",
    title: "パーソナルスタイリングサービス",
    body: "LINE予約で無料のスタイリングサービスをご利用いただけます。",
    cta: "もっと詳しく",
    image: asset("images/live/promo/ba-styling.png"),
    href: "/",
    tone: "#b8a99a",
  },
  {
    id: "app",
    title: "Gap公式アプリ 今すぐダウンロード！",
    body: "クーポンやバーコードスキャン、スタッフスナップもアプリで簡単に。",
    cta: "もっと詳しく",
    image: asset("images/live/promo/ba-app.png"),
    href: "/",
    tone: "#1a1a1a",
  },
  {
    id: "brannan",
    title: "BRANNAN CLUB",
    body: "小学生以下のお子さま向け無料キッズクラブ。特典がいっぱい。",
    cta: "ブラナンクラブについて",
    image: asset("images/live/promo/ba-brannan.png"),
    href: "/",
    tone: "#000d42",
  },
];

/** @deprecated use homeCrossPromos */
export const homePromoRows = homeCrossPromos;

export const homePromoStrip =
  "2点で30%OFF、3点以上で40%OFF — 対象アイテムを見る";

export const homeHero = {
  eyebrow: "The Holiday Collection",
  title: "Give your gift.",
  subtitle: "届けよう。あなたらしく。",
  body: "ホリデーシーズンに贈る、あたたかいニットとロゴの定番たち。",
  image: asset("images/live/hero-hailey.jpg"),
  video: asset("videos/holiday-hero.mp4"),
  textOverlay: asset("images/live/holiday-hero-text.svg"),
  ctas: [
    { label: "ホリデーコレクションをチェック", href: "/women" },
    { label: "新作をチェック", href: "/women" },
  ],
};

export const homeMusicHero = {
  title: "GAP MUSIC",
  eyebrow: "Gap Music Presents:",
  headline: "Give your gift.",
  body: "音楽もファッションも、自分らしさを映し出す。ひとつひとつの表現が、カルチャーとなっていく。",
  video: asset("videos/music-hero.mp4"),
  textOverlay: asset("images/live/music-hero-text.svg"),
  poster: asset("images/live/music-poster.jpg"),
  tileImage: asset("images/live/gap-music-tile.png"),
  ctas: [
    { label: "特設サイトを見る", href: "https://gapmusic.jp" },
    { label: "着用アイテムを見る", href: "/women" },
  ],
};

export const homeCategoryTiles = [
  { label: "ウィメンズ", href: "/women", image: asset("images/live/cat-w.jpg") },
  { label: "メンズ", href: "/women", image: asset("images/live/cat-m.jpg") },
  { label: "キッズ +", href: "/women", image: asset("images/live/cat-k.jpg") },
  { label: "幼児・ベビー +", href: "/women", image: asset("images/live/cat-b.jpg") },
];

export const homeSweatSplit = {
  href: "/women",
  leftImage: asset("images/live/sweat-left.jpg"),
  rightImage: asset("images/live/sweat-right.jpg"),
  tileImage: asset("images/live/sweat-stack-tile.jpg"),
  title: "Color your sweats.",
  body: "豊富なカラー。ふんわり柔らかな肌触り。\nおうち時間も、お出かけも。単品でも、セットアップでも。",
  cta: "スウェットをチェック +",
};

/** Improved — feature / shop slider (gray section divider) */
export const homeFeatureSlider: {
  id: string;
  title: string;
  body: string;
  href: string;
  image: string;
}[] = [
  {
    id: "hailey",
    title: "The Hailey Jean",
    body: "ルーズでバギーなシルエット。1996年インスパイアのデニムが再入荷。",
    href: "/women",
    image: asset("images/live/back-in-stock.webp"),
  },
  {
    id: "vb",
    title: "Gap × Victoria Beckham",
    body: "新着コラボ第二章。上質なベーシックが日常をアップデート。",
    href: "/women",
    image: asset("images/live/feature-vb.webp"),
  },
  {
    id: "character",
    title: "The Character Shop",
    body: "着るだけでHAPPY。人気キャラクターアイテムに新作登場。",
    href: "/women",
    image: asset("images/live/feature-character.png"),
  },
  {
    id: "cozy",
    title: "The Cozy Accessories Shop",
    body: "冬支度をたのしくする、小物とアクセサリーのセレクション。",
    href: "/women",
    image: asset("images/live/feature-cozy.png"),
  },
  {
    id: "gift",
    title: "Give your gift.",
    body: "届けよう。あなたらしく。ホリデーに贈りたい定番と新作。",
    href: "/women",
    image: asset("images/live/feature-gift.jpg"),
  },
];


export const homeFeatureBanner = {
  title: "スウェットをチェック",
  href: "/women",
  image: asset("images/live/sweat-left.jpg"),
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

/** Sticky bottom promo drawer tiles (live #promoDrawerContent) */
export const promoDrawerTiles: {
  id: string;
  title: string;
  href: string;
  image: string | null;
  tone?: "music";
}[] = [
  {
    id: "vb",
    title: "VICTORIA BECKHAM",
    href: "/women",
    image: asset("images/live/md-vb.png"),
  },
  {
    id: "kb",
    title: "The Character Shop",
    href: "/women",
    image: asset("images/live/md-kb.png"),
  },
  {
    id: "hol",
    title: "The Cozy Accessories Shop",
    href: "/women",
    image: asset("images/live/md-hol.png"),
  },
  {
    id: "music",
    title: "GAP MUSIC PRESENTS",
    href: "https://gapmusic.jp",
    image: null,
    tone: "music",
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

export type SnapCard = {
  title: string;
  name: string;
  height?: string;
  store: string;
  date: string;
  image?: string;
};

/** Live homepage スタッフスナップ cards */
export const staffSnaps: SnapCard[] = [
  {
    title: "The Haileyで楽しむ、大人のアメリカンカジュアル",
    name: "Ito",
    height: "161cm",
    store: "Gapストア 国分寺マルイ店",
    date: "2026-11-10",
    image: asset("images/live/staff-1.webp"),
  },
  {
    title: "『ハーフスナップボタンマイクロフリース&スウェットパンツ』",
    name: "Hiyori",
    height: "159cm",
    store: "Gap Outlet 三井アウトレットパーク北陸小矢部店",
    date: "2026-11-09",
    image: asset("images/live/staff-2.webp"),
  },
  {
    title: "ロゴパーカー×スーパーバギー",
    name: "Natan",
    height: "170cm",
    store: "Gap Outlet 御殿場プレミアム・アウトレット店",
    date: "2026-11-09",
    image: asset("images/live/staff-3.webp"),
  },
  {
    title: "【イエロー×ブルー】が新鮮!!大人カラーコ―デ♪",
    name: "Sato",
    height: "163cm",
    store: "Gapストア イオンスタイル大宮西口駅前店",
    date: "2026-11-09",
    image: asset("images/live/staff-4.webp"),
  },
  {
    title: "バランスで魅せる",
    name: "Kabun",
    height: "167cm",
    store: "Gapストア 高松店",
    date: "2026-11-09",
    image: asset("images/live/staff-5.webp"),
  },
];

/** Live homepage キッズ＆ベビースナップ cards */
export const kidsBabySnaps: SnapCard[] = [
  {
    title: "ホリデーブラナンあったかコーデ",
    name: "Yoko",
    height: "172cm",
    store: "Gapストア ららぽーと柏の葉店",
    date: "2026-11-10",
    image: asset("images/live/kids-1.webp"),
  },
  {
    title: "キッズ　ボアジップアップで寒さ知らず",
    name: "JYO",
    height: "140cm",
    store: "Gapストア 福岡三越店",
    date: "2026-11-10",
    image: asset("images/live/kids-2.webp"),
  },
  {
    title: "ベビー　リボンが可愛い",
    name: "Furumoto",
    height: "155cm",
    store: "Gapストア 福岡三越店",
    date: "2026-11-09",
    image: asset("images/live/kids-3.webp"),
  },
  {
    title: "キルティングカバーオールあったかコーデ",
    name: "Watanabe",
    height: "155cm",
    store: "Gapストア ランドマークプラザ店",
    date: "2026-11-09",
    image: asset("images/live/kids-4.webp"),
  },
  {
    title: "飛び出すくまさん",
    name: "Ootsu",
    store: "Gapストア イオンスタイル大宮西口駅前店",
    date: "2026-11-09",
    image: asset("images/live/kids-5.jpg"),
  },
];
