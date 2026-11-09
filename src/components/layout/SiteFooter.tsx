import { Link } from "react-router-dom";
import { asset } from "../../data/asset";
import {
  brandSwitcher,
  footerHelp,
  footerLegal,
  footerNews,
  homePromoRows,
} from "../../data/siteChrome";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.news}>
        <div className={styles.newsHead}>
          <h2>ニュース</h2>
          <Link to="/">ニュース一覧へ</Link>
        </div>
        <ul className={styles.newsCards}>
          {footerNews.map((n) => (
            <li key={n.title} className={styles.newsCard}>
              <div className={styles.newsCardMedia} aria-hidden />
              <p className={styles.newsTitle}>{n.title}</p>
              <time>{n.date}</time>
              <span className={styles.tag}>{n.tag}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.promoRows}>
        {homePromoRows.map((row) => (
          <article key={row.title} className={styles.promoRow} data-tone={row.tone}>
            <div className={styles.promoThumb} aria-hidden>
              <span>{row.title}</span>
            </div>
            <div>
              <h3>{row.title}</h3>
              <p>{row.body}</p>
              <button type="button">{row.cta}</button>
            </div>
          </article>
        ))}
      </div>

      <div className={styles.help}>
        <ul>
          {footerHelp.map((l) => (
            <li key={l.label}>
              <Link to={l.href}>{l.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.brandBlock}>
        <p className={styles.brandIntro}>公式オンラインストア</p>
        <div className={styles.brandCards}>
          <Link to="/" className={styles.brandCard}>
            <img
              src={asset("images/live/footer-gap.svg")}
              alt="Gap 公式オンラインストア"
              className={styles.brandLogo}
            />
            <span>Gap 公式オンラインストア</span>
          </Link>
          <a
            href={brandSwitcher[1].href}
            className={styles.brandCard}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={asset("images/live/footer-br.svg")}
              alt="BANANA REPUBLIC 公式オンラインストア"
              className={styles.brandLogo}
            />
            <span>BANANA REPUBLIC 公式オンラインストア</span>
          </a>
        </div>
        <p className={styles.collabNote}>
          【新着コラボ】Gap×ヴィクトリア・ベッカム第二章 着るだけでHAPPY!
          人気キャラクターアイテムに新作登場
        </p>
      </div>

      <div className={styles.legal}>
        <ul>
          {footerLegal.map((l) => (
            <li key={l.label}>
              <Link to={l.href}>{l.label}</Link>
            </li>
          ))}
        </ul>
        <p className={styles.copy}>
          © Gap Inc. UX redesign mockup — not affiliated with Gap Inc. / Banana
          Republic.
        </p>
      </div>
    </footer>
  );
}
