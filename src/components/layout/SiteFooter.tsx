import { Link } from "react-router-dom";
import { asset } from "../../data/asset";
import { brandSwitcher, footerHelp, footerLegal } from "../../data/siteChrome";
import { useVariant } from "../../context/VariantContext";
import styles from "./SiteFooter.module.css";

const socialLinks = [
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@gap_jp",
    icon: asset("images/live/footer/tiktok_dark.svg"),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/gap_jp/",
    icon: asset("images/live/footer/instagram_dark.svg"),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/user/GapJapanKK",
    icon: asset("images/live/footer/youtube_dark.svg"),
  },
  {
    label: "Spotify",
    href: "https://open.spotify.com/user/31vmjl3pr34lwdnlx4gf22hapxie",
    icon: asset("images/live/footer/spotify_dark.svg"),
  },
];

export function SiteFooter() {
  const variant = useVariant();
  const helpLinks =
    variant === "improved"
      ? [...footerHelp, { label: "ニュース", href: "/" }]
      : footerHelp;

  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.help}>
        <ul className={styles.helpGrid}>
          {helpLinks.map((l) => (
            <li key={l.label}>
              <Link
                to={l.href}
                {...(l.label === "ニュース"
                  ? { "data-hotspot": "a-news-to-footer" }
                  : {})}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.appSocial}>
        <div className={styles.appBlock}>
          <p className={styles.appHeading}>
            公式アプリのダウンロードはこちらから
          </p>
          <div className={styles.appBadges}>
            <a
              href="https://apps.apple.com/jp/app/gap-japan-gong-shiapuri/id937160971"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={asset("images/live/footer/appstore.svg")}
                alt="Download on the App Store"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=jp.co.gap.camplus.cpn&hl=ja"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={asset("images/live/footer/googleplay.svg")}
                alt="GET IT ON Google Play"
              />
            </a>
          </div>
        </div>
        <ul className={styles.social}>
          {socialLinks.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                <img src={s.icon} alt="" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.brandBlock}>
        <div className={styles.brandLogos}>
          <Link to="/" aria-label="Gap">
            <img
              src={asset("images/live/logos/gap-wordmark.png")}
              alt="Gap"
              className={styles.gapLogo}
            />
          </Link>
          <a
            href={brandSwitcher[1].href}
            target="_blank"
            rel="noreferrer"
            aria-label="Banana Republic"
          >
            <img
              src={asset("images/live/logos/br-footer.png")}
              alt="BANANA REPUBLIC"
              className={styles.brLogo}
            />
          </a>
        </div>
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
