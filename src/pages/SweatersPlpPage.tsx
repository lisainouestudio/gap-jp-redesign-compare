import { Link } from "react-router-dom";
import { asset } from "../data/asset";
import {
  sweaterFilters,
  sweaterProducts,
  sweatersResultCount,
} from "../data/plpSweaters";
import { ProductCard } from "../components/ui/ProductCard";
import { SiteShell } from "../components/layout/SiteShell";
import styles from "./PlpPage.module.css";

export function SweatersPlpPage() {
  return (
    <SiteShell>
      <div className={styles.page}>
        <nav className={styles.crumbs} aria-label="パンくず">
          <Link to="/">トップ</Link>
          <span>/</span>
          <Link to="/women">ウィメンズ</Link>
          <span>/</span>
          <span>セーター・カーディガン</span>
        </nav>

        <header className={styles.header}>
          <h1>セーター・カーディガン</h1>
          <p>{sweatersResultCount} 件</p>
        </header>

        <div className={styles.ism}>
          <img src={asset("images/live/plp-ism-1.jpg")} alt="" />
          <img src={asset("images/live/plp-ism-2.jpg")} alt="" />
        </div>

        <div className={styles.layout}>
          <aside className={styles.filters} aria-label="絞り込み">
            <h2>絞り込み</h2>
            {sweaterFilters.map((group) => (
              <div key={group.id} className={styles.filterGroup}>
                <h3>{group.title}</h3>
                <ul>
                  {group.options.map((opt) => (
                    <li key={opt}>
                      <label>
                        <input type="checkbox" /> {opt}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </aside>

          <div>
            <div className={styles.toolbar}>
              <span>並べ替え: おすすめ</span>
              <span className={styles.mobileCount}>{sweatersResultCount} 件</span>
            </div>
            <div className={styles.grid}>
              {sweaterProducts.map((p) => (
                <ProductCard key={p.id} product={p} to={`/product/${p.id}`} />
              ))}
            </div>
            <p className={styles.moreNote}>
              表示中 {sweaterProducts.length} / {sweatersResultCount} 件（ライブPLPより抽出）
            </p>
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
