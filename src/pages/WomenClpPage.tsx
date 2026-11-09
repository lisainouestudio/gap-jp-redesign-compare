import { Link } from "react-router-dom";
import {
  womenClpCategories,
  womenNewArrivalImage,
  womenSnaps,
} from "../data/womenClp";
import { sweaterProducts } from "../data/plpSweaters";
import { ProductCard } from "../components/ui/ProductCard";
import { SiteShell } from "../components/layout/SiteShell";
import styles from "./WomenClpPage.module.css";

export function WomenClpPage() {
  const bestsellers = sweaterProducts.slice(0, 8);
  const recommended = sweaterProducts.slice(8, 16);

  return (
    <SiteShell>
      <div className={styles.page}>
        <nav className={styles.crumbs} aria-label="パンくず">
          <Link to="/">トップ</Link>
          <span>/</span>
          <span>ウィメンズ</span>
        </nav>

        <h1 className={styles.title}>ウィメンズ</h1>

        <section className={styles.catSection} aria-labelledby="cat-heading">
          <h2 id="cat-heading">カテゴリーで選ぶ</h2>
          <div className={styles.catRail}>
            {womenClpCategories.map((cat) => (
              <Link key={cat.label} to={cat.href} className={styles.catTile}>
                <img src={cat.image} alt={cat.label} />
                <span>{cat.label}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.newArrival}>
          <img src={womenNewArrivalImage} alt="Women New Arrival" />
        </section>

        <section className={styles.snapSection}>
          <div className={styles.sectionHead}>
            <h2>ウィメンズスナップ</h2>
            <Link to="/">もっと見る</Link>
          </div>
          <div className={styles.snapRail}>
            {womenSnaps.map((s) => (
              <article key={`${s.name}-${s.title}`} className={styles.snapCard}>
                <div
                  className={styles.snapPhoto}
                  style={{
                    background: `linear-gradient(145deg, hsl(${(s.name.charCodeAt(0) * 17) % 360} 30% 74%), hsl(${(s.name.charCodeAt(0) * 17 + 50) % 360} 24% 56%))`,
                  }}
                />
                <p className={styles.snapTitle}>{s.title}</p>
                <p className={styles.snapMeta}>
                  {s.name} <span>{s.height}</span>
                </p>
                <p className={styles.snapStore}>{s.store}</p>
                <time>{s.date}</time>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.productSection}>
          <h2>ベストセラー</h2>
          <div className={styles.productGrid}>
            {bestsellers.map((p) => (
              <ProductCard key={p.id} product={p} to={`/product/${p.id}`} />
            ))}
          </div>
        </section>

        <section className={styles.productSection}>
          <h2>あなたへのおすすめアイテム</h2>
          <div className={styles.productGrid}>
            {recommended.map((p) => (
              <ProductCard key={p.id} product={p} to={`/product/${p.id}`} />
            ))}
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
