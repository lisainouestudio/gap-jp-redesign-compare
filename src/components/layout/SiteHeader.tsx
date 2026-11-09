import { useState } from "react";
import { Link } from "react-router-dom";
import { brandSwitcher, mainNav, utilityLinks } from "../../data/siteChrome";
import { useCart } from "../../context/CartContext";
import { useCompare } from "../../context/CompareContext";
import styles from "./SiteHeader.module.css";

export function SiteHeader() {
  const { count } = useCart();
  const { viewport } = useCompare();
  const [openNav, setOpenNav] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = viewport === "mobile";

  return (
    <header className={styles.header}>
      {/* Dual-brand utility bar */}
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
                >
                  {b.id === "gap" ? <span className={styles.gapBox}>GAP</span> : b.label}
                </a>
              ) : (
                <Link
                  key={b.id}
                  to={b.href}
                  className={[styles.brandLink, b.active ? styles.brandActive : ""].join(" ")}
                >
                  {b.id === "gap" ? <span className={styles.gapBox}>GAP</span> : b.label}
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

      {/* Promo ticker */}
      <div className={styles.promoTicker}>
        <p>GAP MUSIC PRESENTS: 着用アイテムをチェック</p>
      </div>

      {/* Main bar */}
      <div className={styles.bar}>
        <div className={styles.barLeft}>
          <button
            className={styles.iconBtn}
            aria-label="メニュー"
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <Hamburger />
          </button>
          {!isMobile ? (
            <button className={styles.iconBtn} aria-label="お気に入り" type="button">
              <HeartIcon />
            </button>
          ) : null}
        </div>

        <Link to="/" className={styles.logo} aria-label="Gap トップ">
          <span className={styles.gapBoxLg}>GAP</span>
        </Link>

        <div className={styles.actions}>
          <button className={styles.iconBtn} aria-label="検索" type="button">
            <SearchIcon />
          </button>
          <Link to="/cart" className={styles.cart} aria-label={`カート内商品数${count}個`}>
            <BagIcon />
            <span className={styles.badge}>{count}</span>
          </Link>
        </div>
      </div>

      {!isMobile ? (
        <nav className={styles.nav} aria-label="メイン">
          <ul className={styles.navList}>
            {mainNav.map((item) => (
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
                      <div className={styles.megaAside}>
                        <p>アカウント</p>
                        <ul>
                          <li>ログイン / 会員登録</li>
                          <li>メンバーシッププログラムについて</li>
                          <li>スタッフスナップ</li>
                          <li>ニュース</li>
                          <li>店舗検索</li>
                          <li>ギフトカードについて</li>
                          <li>ヘルプ&ガイド</li>
                          <li>返品について</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
      ) : null}

      {isMobile && mobileOpen ? (
        <nav className={styles.mobileNav} aria-label="モバイルメニュー">
          <ul>
            {mainNav.map((item) => (
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
            <a href={brandSwitcher[1].href} target="_blank" rel="noreferrer">
              BANANA REPUBLIC
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

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
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
