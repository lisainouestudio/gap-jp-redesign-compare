import { Link } from "react-router-dom";
import { homeHeroes, womenCategories } from "../data/fixtures";
import { asset } from "../data/asset";
import { SiteShell } from "../components/layout/SiteShell";
import styles from "./HomePage.module.css";

export function HomePage() {
  return (
    <SiteShell>
      <section className={styles.hero}>
        <img src={homeHeroes[0].image} alt="" className={styles.heroImg} />
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>New Arrivals</p>
          <h1>{homeHeroes[0].title}</h1>
          <p>{homeHeroes[0].subtitle}</p>
          <Link to={homeHeroes[0].href} className={styles.cta}>
            {homeHeroes[0].cta}
          </Link>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Shop by Category — Women</h2>
        <div className={styles.cats}>
          {womenCategories.map((cat) => (
            <Link key={cat.label} to={cat.href} className={styles.cat}>
              <img src={cat.image} alt="" />
              <span>{cat.label}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.bannerRow}>
        <Link to="/women" className={styles.banner}>
          <img src={homeHeroes[1].image} alt="" />
          <div>
            <h2>{homeHeroes[1].title}</h2>
            <p>{homeHeroes[1].subtitle}</p>
            <span>{homeHeroes[1].cta}</span>
          </div>
        </Link>
        <Link to="/women/sweaters" className={styles.banner}>
          <img src={asset("images/hero-knit.svg")} alt="" />
          <div>
            <h2>Sweaters & Cardigans</h2>
            <p>CashSoft をはじめとする秋のニット</p>
            <span>今すぐ見る</span>
          </div>
        </Link>
      </section>
    </SiteShell>
  );
}
