import { Link } from "react-router-dom";
import { womenCategories } from "../data/fixtures";
import { asset } from "../data/asset";
import { SiteShell } from "../components/layout/SiteShell";
import styles from "./ClpPage.module.css";

export function WomenClpPage() {
  return (
    <SiteShell>
      <div className={styles.page}>
        <nav className={styles.crumbs} aria-label="パンくず">
          <Link to="/">ホーム</Link>
          <span>/</span>
          <span>ウィメンズ</span>
        </nav>
        <header className={styles.header}>
          <h1>ウィメンズ</h1>
          <p>新作から定番まで。毎日のワードローブをアップデート。</p>
        </header>
        <div className={styles.hero}>
          <img src={asset("images/clp-women.svg")} alt="" />
          <div>
            <h2>Shop Women</h2>
            <Link to="/women/sweaters">セーター＆カーディガンを見る</Link>
          </div>
        </div>
        <section>
          <h2 className={styles.sectionTitle}>カテゴリーから探す</h2>
          <div className={styles.grid}>
            {womenCategories.map((cat) => (
              <Link key={cat.label} to={cat.href} className={styles.card}>
                <img src={cat.image} alt="" />
                <span>{cat.label}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
