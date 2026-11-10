import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { heroProduct } from "../data/fixtures";
import { pdpColors, pdpSizes } from "../data/pdpContent";
import { sweaterProducts } from "../data/plpSweaters";
import { SiteShell } from "../components/layout/SiteShell";
import styles from "./StoreStockPage.module.css";

const AREAS = [
  { id: "", label: "エリア" },
  { id: "hokkaido-tohoku", label: "北海道・東北" },
  { id: "kanto", label: "関東" },
  { id: "chubu", label: "中部" },
  { id: "kinki", label: "近畿" },
  { id: "chugoku-shikoku", label: "中国・四国" },
  { id: "kyushu-okinawa", label: "九州・沖縄" },
] as const;

const PREFECTURES: Record<string, string[]> = {
  "hokkaido-tohoku": ["北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県"],
  kanto: ["茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県"],
  chubu: ["新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県", "岐阜県", "静岡県", "愛知県"],
  kinki: ["三重県", "滋賀県", "京都府", "大阪府", "兵庫県", "奈良県", "和歌山県"],
  "chugoku-shikoku": ["鳥取県", "島根県", "岡山県", "広島県", "山口県", "徳島県", "香川県", "愛媛県", "高知県"],
  "kyushu-okinawa": ["福岡県", "佐賀県", "長崎県", "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県"],
};

function firstImage(colorId: string) {
  const color = pdpColors.find((c) => c.id === colorId) ?? pdpColors[0];
  const img = color.gallery.find((g) => g.type === "image");
  return img && img.type === "image" ? img.src : heroProduct.images[0];
}

export function StoreStockPage() {
  const { id } = useParams();
  const product = useMemo(
    () =>
      sweaterProducts.find((p) => p.id === id) ??
      (id === heroProduct.id ? heroProduct : undefined) ??
      heroProduct,
    [id],
  );

  const [colorId, setColorId] = useState(pdpColors[0].id);
  const [size, setSize] = useState<string | null>(null);
  const [area, setArea] = useState("");
  const [prefecture, setPrefecture] = useState("");

  const color = pdpColors.find((c) => c.id === colorId) ?? pdpColors[0];
  const sku = `1184982${color.code}`;
  const prefs = area ? PREFECTURES[area] ?? [] : [];

  return (
    <SiteShell>
      <div className={styles.page}>
        <nav className={styles.crumbs} aria-label="パンくず">
          <Link to="/">トップ</Link>
          <span>/</span>
          <Link to="/women">ウィメンズ</Link>
          <span>/</span>
          <Link to="/women/sweaters">セーター・カーディガン</Link>
        </nav>

        <h1>店舗の在庫検索</h1>

        <div className={styles.layout}>
          <section className={styles.productCard} aria-label="商品情報">
            <div className={styles.productTop}>
              <img src={firstImage(colorId)} alt="" className={styles.thumb} />
              <p className={styles.name}>{product.name}</p>
            </div>

            <div className={styles.block}>
              <p className={styles.label}>
                カラー <span>{color.label}</span> <span className={styles.sku}>({sku})</span>
              </p>
              <div className={styles.swatches} role="list">
                {pdpColors.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    role="listitem"
                    className={c.id === colorId ? styles.swatchOn : styles.swatch}
                    aria-label={c.label}
                    aria-pressed={c.id === colorId}
                    onClick={() => setColorId(c.id)}
                    style={{ backgroundImage: `url(${c.swatch})` }}
                  />
                ))}
              </div>
            </div>

            <div className={styles.block}>
              <p className={styles.label}>
                サイズ <span>{size ?? "選択して下さい"}</span>
              </p>
              <div className={styles.sizes}>
                {pdpSizes.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    className={size === s.id ? styles.sizeOn : styles.size}
                    aria-pressed={size === s.id}
                    onClick={() => setSize(s.id)}
                  >
                    {s.id}
                  </button>
                ))}
              </div>
            </div>

            <p className={styles.note}>
              在庫状況は変動するため、ご来店時に売り切れとなっている場合がございます。店舗での取り置き・ご予約をご希望の場合は、お手数ですが直接店舗へお電話にてご確認ください。
            </p>

            <Link to={`/product/${product.id}`} className={styles.backBtn}>
              商品詳細へ戻る
            </Link>
          </section>

          <section className={styles.filterCard} aria-label="店舗検索">
            <label className={styles.selectWrap}>
              <span className={styles.srOnly}>エリア</span>
              <select
                value={area}
                onChange={(e) => {
                  setArea(e.target.value);
                  setPrefecture("");
                }}
              >
                {AREAS.map((a) => (
                  <option key={a.id || "empty"} value={a.id} disabled={a.id === ""}>
                    {a.label}
                  </option>
                ))}
              </select>
            </label>

            <label className={styles.selectWrap}>
              <span className={styles.srOnly}>都道府県</span>
              <select
                value={prefecture}
                disabled={!area}
                onChange={(e) => setPrefecture(e.target.value)}
              >
                <option value="" disabled>
                  都道府県
                </option>
                {prefs.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </label>
          </section>
        </div>
      </div>
    </SiteShell>
  );
}
