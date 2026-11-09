import { Link } from "react-router-dom";
import { plpProducts } from "../data/fixtures";
import { ProductCard } from "../components/ui/ProductCard";
import { SiteShell } from "../components/layout/SiteShell";
import styles from "./PlpPage.module.css";

export function SweatersPlpPage() {
  return (
    <SiteShell>
      <div className={styles.page}>
        <nav className={styles.crumbs} aria-label="パンくず">
          <Link to="/">ホーム</Link>
          <span>/</span>
          <Link to="/women">ウィメンズ</Link>
          <span>/</span>
          <span>セーター＆カーディガン</span>
        </nav>

        <header className={styles.header}>
          <h1>セーター＆カーディガン</h1>
          <p>{plpProducts.length} 件</p>
        </header>

        <div className={styles.layout}>
          <aside className={styles.filters} aria-label="フィルター">
            <h2>絞り込み</h2>
            <div className={styles.filterGroup}>
              <h3>サイズ</h3>
              <ul>
                {["XXS", "XS", "S", "M", "L", "XL"].map((s) => (
                  <li key={s}>
                    <label>
                      <input type="checkbox" /> {s}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.filterGroup}>
              <h3>価格</h3>
              <ul>
                <li>
                  <label>
                    <input type="checkbox" /> ¥5,000以下
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" /> ¥5,000–¥10,000
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" /> ¥10,000以上
                  </label>
                </li>
              </ul>
            </div>
          </aside>

          <div>
            <div className={styles.toolbar}>
              <span>並べ替え: おすすめ</span>
            </div>
            <div className={styles.grid}>
              {plpProducts.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  to={`/product/${p.id}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
