import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  colors,
  formatYen,
  heroProduct,
  plpProducts,
  recommendations,
  sizes,
} from "../data/fixtures";
import { useCart } from "../context/CartContext";
import { SiteShell } from "../components/layout/SiteShell";
import { Button } from "../components/ui/Button";
import { Modal } from "../components/ui/Modal";
import { Price } from "../components/ui/Price";
import styles from "./PdpPage.module.css";

export function PdpPage() {
  const { id } = useParams();
  const product = useMemo(
    () => plpProducts.find((p) => p.id === id) ?? heroProduct,
    [id],
  );
  const cart = useCart();
  const [size, setSize] = useState<string>("M");
  const [colorId, setColorId] = useState(colors[0].id);
  const [imageIdx, setImageIdx] = useState(0);
  const [atcOpen, setAtcOpen] = useState(false);
  const [sizeError, setSizeError] = useState(false);

  const images = product.images.length ? product.images : heroProduct.images;

  const onAdd = () => {
    if (!size) {
      setSizeError(true);
      return;
    }
    setSizeError(false);
    cart.addItem({ product, size, qty: 1 });
    setAtcOpen(true);
  };

  return (
    <SiteShell>
      <div className={styles.page}>
        <nav className={styles.crumbs} aria-label="パンくず">
          <Link to="/">ホーム</Link>
          <span>/</span>
          <Link to="/women">ウィメンズ</Link>
          <span>/</span>
          <Link to="/women/sweaters">セーター＆カーディガン</Link>
          <span>/</span>
          <span>{product.name}</span>
        </nav>

        <div className={styles.layout}>
          <div className={styles.gallery}>
            <div className={styles.thumbs}>
              {images.map((src, i) => (
                <button
                  key={src + i}
                  type="button"
                  className={i === imageIdx ? styles.thumbActive : undefined}
                  onClick={() => setImageIdx(i)}
                >
                  <img src={src} alt="" />
                </button>
              ))}
            </div>
            <div className={styles.mainImage}>
              <img src={images[imageIdx] ?? images[0]} alt="" />
            </div>
          </div>

          <div className={styles.info}>
            <h1>{product.name}</h1>
            <Price amount={product.price} size="lg" />
            <p className={styles.tax}>税込</p>

            <div className={styles.block}>
              <p className={styles.label}>
                カラー: <strong>{colors.find((c) => c.id === colorId)?.label}</strong>
              </p>
              <div className={styles.swatches}>
                {colors.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    aria-label={c.label}
                    className={colorId === c.id ? styles.swatchOn : styles.swatch}
                    style={{ background: c.swatch }}
                    onClick={() => setColorId(c.id)}
                  />
                ))}
              </div>
            </div>

            <div className={styles.block}>
              <div className={styles.sizeHead}>
                <p className={styles.label}>サイズ</p>
                <button type="button" className={styles.linkBtn}>
                  サイズガイド
                </button>
              </div>
              <div className={styles.sizes}>
                {sizes.map((s) => (
                  <button
                    key={s}
                    type="button"
                    className={size === s ? styles.sizeOn : styles.size}
                    onClick={() => {
                      setSize(s);
                      setSizeError(false);
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
              {sizeError ? (
                <p className={styles.error}>サイズを選択してください</p>
              ) : null}
            </div>

            <Button fullWidth size="lg" onClick={onAdd}>
              カートに入れる
            </Button>

            <ul className={styles.perks}>
              <li>配送料無料（条件あり）</li>
              <li>簡単返品・交換</li>
              <li>店舗受け取り可</li>
            </ul>
          </div>
        </div>
      </div>

      <Modal open={atcOpen} onClose={() => setAtcOpen(false)} labelledBy="atc-title">
        <div className={styles.atc}>
          <header className={styles.atcHead}>
            <h2 id="atc-title">
              <span className={styles.check}>✓</span> カートに追加しました
            </h2>
            <button
              type="button"
              className={styles.close}
              aria-label="閉じる"
              onClick={() => setAtcOpen(false)}
            >
              ×
            </button>
          </header>

          <div className={styles.atcItem}>
            <img src={product.images[0]} alt="" />
            <div>
              <p className={styles.atcName}>{product.name}</p>
              <p className={styles.atcMeta}>
                カラー: {product.color}
                <br />
                サイズ: {size}
                <br />
                数量: 1
                <br />
                価格: {formatYen(product.price)}
              </p>
            </div>
          </div>

          <div className={styles.ship}>
            <p>配送料無料でお届けします</p>
            <div className={styles.shipBar} />
          </div>

          <div className={styles.recs}>
            <h3>こちらもおすすめ！</h3>
            <div className={styles.recTrack}>
              {recommendations.map((r) => (
                <Link
                  key={r.id}
                  to={`/product/${r.id}`}
                  className={styles.rec}
                  onClick={() => setAtcOpen(false)}
                >
                  <img src={r.images[0]} alt="" />
                  <span>{formatYen(r.price)}</span>
                </Link>
              ))}
            </div>
          </div>

          <footer className={styles.atcFoot}>
            <div>
              <span>支払総額:</span>
              <strong>
                合計 {cart.count || 1}点 {formatYen(cart.subtotal || product.price)}
              </strong>
            </div>
            <div className={styles.atcActions}>
              <Button variant="secondary" onClick={() => setAtcOpen(false)}>
                お買い物を続ける
              </Button>
              <Link to="/cart" className={styles.cartLink} onClick={() => setAtcOpen(false)}>
                <Button>カートに移動</Button>
              </Link>
            </div>
          </footer>
        </div>
      </Modal>
    </SiteShell>
  );
}
