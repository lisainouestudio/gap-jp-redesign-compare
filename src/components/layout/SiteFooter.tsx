import { Link } from "react-router-dom";
import {
  brandSwitcher,
  footerHelp,
  footerLegal,
  footerNews,
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
        <ul className={styles.newsList}>
          {footerNews.map((n) => (
            <li key={n.title}>
              <span className={styles.tag}>{n.tag}</span>
              <span className={styles.newsTitle}>{n.title}</span>
              <time>{n.date}</time>
            </li>
          ))}
        </ul>
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
            <span className={styles.gapBox}>GAP</span>
            <span>Gap 公式オンラインストア</span>
          </Link>
          <a
            href={brandSwitcher[1].href}
            className={styles.brandCard}
            target="_blank"
            rel="noreferrer"
          >
            <span className={styles.brMark}>BR</span>
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
