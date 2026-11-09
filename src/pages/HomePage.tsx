import { Link } from "react-router-dom";
import {
  homeBrandAnnouncements,
  homeCategoryTiles,
  homeEditorialTiles,
  homeFeatureBanner,
  homeHero,
  homePromoStrip,
  staffSnaps,
} from "../data/siteChrome";
import { SiteShell } from "../components/layout/SiteShell";
import styles from "./HomePage.module.css";

export function HomePage() {
  return (
    <SiteShell>
      <div className={styles.promoStrip}>
        <p>{homePromoStrip}</p>
        <span>期間限定、セール・一部商品を除く</span>
      </div>

      <section className={styles.hero}>
        <img src={homeHero.image} alt="" className={styles.heroImg} />
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>{homeHero.eyebrow}</p>
          <h1>{homeHero.title}</h1>
          <p className={styles.subtitle}>{homeHero.subtitle}</p>
          <p className={styles.body}>{homeHero.body}</p>
          <div className={styles.heroCtas}>
            {homeHero.ctas.map((cta) => (
              <Link key={cta.label} to={cta.href} className={styles.heroCta}>
                {cta.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.feature}>
        <Link to={homeFeatureBanner.href} className={styles.featureLink}>
          <img src={homeFeatureBanner.image} alt="" />
          <span>{homeFeatureBanner.title}</span>
        </Link>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>カテゴリーから探す</h2>
        <div className={styles.catGrid}>
          {homeCategoryTiles.map((tile) => (
            <Link key={tile.label} to={tile.href} className={styles.catTile}>
              <img src={tile.image} alt="" />
              <span>{tile.label}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>特集・エディトリアル</h2>
        <div className={styles.editorial}>
          {homeEditorialTiles.map((tile) => (
            <Link key={tile.title} to={tile.href} className={styles.edTile}>
              <img src={tile.image} alt="" />
              <span>{tile.title}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.sectionMuted}>
        <h2 className={styles.sectionTitle}>ブランドからのお知らせ</h2>
        <div className={styles.announcements}>
          {homeBrandAnnouncements.map((a) => (
            <Link key={a.title} to={a.href} className={styles.announcement}>
              <img src={a.image} alt={a.title} />
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.staffHead}>
          <h2>スタッフスナップ</h2>
          <Link to="/">もっと見る</Link>
        </div>
        <div className={styles.staffGrid}>
          {staffSnaps.map((s) => (
            <article key={`${s.name}-${s.store}`} className={styles.staffCard}>
              <div
                className={styles.staffPhoto}
                style={{
                  background: `linear-gradient(145deg, hsl(${(s.name.charCodeAt(0) * 12) % 360} 28% 72%), hsl(${(s.name.charCodeAt(0) * 12 + 40) % 360} 22% 58%))`,
                }}
              />
              <p className={styles.staffName}>
                {s.name} <span>{s.height}</span>
              </p>
              <p className={styles.staffStore}>{s.store}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
