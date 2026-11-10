import { useState } from "react";
import { Link } from "react-router-dom";
import { asset } from "../../data/asset";
import {
  brandSwitcher,
  mainNav,
  mainNavImproved,
  utilityLinks,
} from "../../data/siteChrome";
import { useCart } from "../../context/CartContext";
import { useCompare } from "../../context/CompareContext";
import { useVariant } from "../../context/VariantContext";
import styles from "./SiteHeader.module.css";

export function SiteHeader() {
  const { count } = useCart();
  const { viewport } = useCompare();
  const variant = useVariant();
  const [openNav, setOpenNav] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = viewport === "mobile";
  const isCurrent = variant === "current";
  const showBrandBar = isCurrent;
  const showPromoTicker = isCurrent;
  const navItems = isCurrent ? mainNav : mainNavImproved;

  return (
    <header className={styles.header}>
      {showBrandBar ? (
        <div className={styles.brandBar}>
          <div className={styles.brandBarInner}>
            <div className={styles.brands}>
              {brandSwitcher.map((b) =>
                b.external ? (
                  <a
                    key={b.id}
                    href={b.href}
                    className={[styles.brandLink, b.active ? styles.brandActive : ""].join(" ")}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={b.label}
                  >
                    {b.id === "gap" ? (
                      <span className={styles.gapBox}>GAP</span>
                    ) : (
                      <img
                        src={asset("images/live/logos/br-stacked-light.webp")}
                        alt=""
                        className={styles.brBrandLogo}
                      />
                    )}
                  </a>
                ) : (
                  <Link
                    key={b.id}
                    to={b.href}
                    className={[styles.brandLink, b.active ? styles.brandActive : ""].join(" ")}
                    aria-label={b.label}
                  >
                    {b.id === "gap" ? (
                      <span className={styles.gapBox}>GAP</span>
                    ) : (
                      <img
                        src={asset("images/live/logos/br-stacked-light.webp")}
                        alt=""
                        className={styles.brBrandLogo}
                      />
                    )}
                  </Link>
                ),
              )}
            </div>
            <div className={styles.utilityRight}>
              {!isMobile
                ? utilityLinks.map((l) => (
                    <Link key={l.label} to={l.href} className={styles.utilLink}>
                      {l.label}
                    </Link>
                  ))
                : null}
              <button type="button" className={styles.memberBtn}>
                会員登録/ログイン
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {showPromoTicker ? (
        <div className={styles.promoTicker}>
          <p>GAP MUSIC PRESENTS:</p>
        </div>
      ) : null}

      {isMobile ? (
        <div className={styles.barMobile}>
          <button
            className={styles.iconBtn}
            aria-label="メニュー"
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <Hamburger />
          </button>
          <Link to="/" className={styles.logoCenter} aria-label="Gap トップ">
            <span className={styles.gapBoxLg}>GAP</span>
          </Link>
          <div className={styles.actions}>
            <button className={styles.iconBtn} aria-label="検索" type="button">
              <SearchIcon />
            </button>
            {!isCurrent ? (
              <button className={styles.iconBtn} aria-label="会員登録/ログイン" type="button">
                <AccountIcon />
              </button>
            ) : null}
            <Link to="/cart" className={styles.cart} aria-label={`カート内商品数${count}個`}>
              <BagIcon />
              <span className={styles.badge}>{count}</span>
            </Link>
          </div>
        </div>
      ) : (
        <div className={[styles.barDesktop, !isCurrent ? styles.barCompact : ""].filter(Boolean).join(" ")}>
          <div className={styles.barTop}>
            <Link to="/" className={styles.logoLeft} aria-label="Gap トップ">
              <img
                src={asset("images/live/logos/gap-wordmark.png")}
                alt="Gap"
                className={styles.logoWordmark}
              />
            </Link>

            <nav className={styles.navInline} aria-label="メイン">
              <ul className={styles.navList}>
                {navItems.map((item) => (
                  <li
                    key={item.id}
                    className={styles.navItem}
                    onMouseEnter={() => setOpenNav(item.id)}
                    onMouseLeave={() => setOpenNav(null)}
                  >
                    <Link
                      to={item.href}
                      className={item.accent ? styles.sale : undefined}
                    >
                      {item.label}
                    </Link>
                    {item.columns && openNav === item.id ? (
                      <div className={styles.mega}>
                        <div className={styles.megaInner}>
                          {item.columns.map((col) => (
                            <div key={col.title ?? "col"} className={styles.megaCol}>
                              {col.title ? <h3>{col.title}</h3> : null}
                              <ul>
                                {col.links.map((link) => (
                                  <li key={link.label}>
                                    <Link
                                      to={link.href}
                                      className={link.accent ? styles.sale : undefined}
                                      onClick={() => setOpenNav(null)}
                                    >
                                      {link.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </li>
                ))}
              </ul>
            </nav>

            <div className={styles.actionsDesktop}>
              <label className={styles.searchField}>
                <SearchIcon />
                <span>検索</span>
                <input type="search" placeholder="" aria-label="検索" readOnly />
              </label>
              <button className={styles.iconBtn} aria-label="お気に入り" type="button">
                <HeartIcon />
              </button>
              {!isCurrent ? (
                <button className={styles.iconBtn} aria-label="会員登録/ログイン" type="button">
                  <AccountIcon />
                </button>
              ) : null}
              <Link to="/cart" className={styles.cart} aria-label={`カート内商品数${count}個`}>
                <BagIcon />
                <span className={styles.badge}>{count}</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      {isMobile && mobileOpen ? (
        <nav className={styles.mobileNav} aria-label="モバイルメニュー">
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.href}
                  className={item.accent ? styles.sale : undefined}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.columns?.[0] ? (
                  <ul className={styles.mobileSub}>
                    {item.columns[0].links.slice(0, 6).map((child) => (
                      <li key={child.label}>
                        <Link to={child.href} onClick={() => setMobileOpen(false)}>
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
          <div className={styles.mobileBrands}>
            <span className={styles.gapBox}>GAP</span>
            <a
              href={brandSwitcher[1].href}
              target="_blank"
              rel="noreferrer"
              aria-label="BANANA REPUBLIC"
            >
              <img
                src={asset("images/live/logos/br-footer.png")}
                alt=""
                className={styles.brBrandLogoDark}
              />
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

function Hamburger() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 20s-7-4.4-7-9.2A3.8 3.8 0 0112 8a3.8 3.8 0 017 2.8C19 15.6 12 20 12 20z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function AccountIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="8" r="3.25" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M5.5 19.25c1.4-3.1 3.6-4.5 6.5-4.5s5.1 1.4 6.5 4.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M16 16l4 4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 8h12l-1 12H7L6 8z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M9 8V7a3 3 0 016 0v1" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
