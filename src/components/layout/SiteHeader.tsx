import { useState } from "react";
import { Link } from "react-router-dom";
import { mainNav } from "../../data/fixtures";
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
      <div className={styles.promo}>
        <p>会員登録でポイント還元 — ゲストでも購入できます</p>
      </div>
      <div className={styles.bar}>
        {isMobile ? (
          <button
            className={styles.iconBtn}
            aria-label="メニュー"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <Hamburger />
          </button>
        ) : (
          <div className={styles.utility}>
            <Link to="/">店舗検索</Link>
            <Link to="/">ヘルプ</Link>
          </div>
        )}

        <Link to="/" className={styles.logo} aria-label="GAP ホーム">
          GAP
        </Link>

        <div className={styles.actions}>
          {!isMobile ? (
            <button className={styles.iconBtn} aria-label="検索" type="button">
              <SearchIcon />
            </button>
          ) : null}
          <button className={styles.iconBtn} aria-label="アカウント" type="button">
            <UserIcon />
          </button>
          <Link to="/cart" className={styles.cart} aria-label={`カート ${count}点`}>
            <BagIcon />
            {count > 0 ? <span className={styles.badge}>{count}</span> : null}
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
                  className={item.id === "sale" ? styles.sale : undefined}
                >
                  {item.label}
                </Link>
                {item.children && openNav === item.id ? (
                  <div className={styles.mega}>
                    <ul>
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link to={child.href}>{child.label}</Link>
                        </li>
                      ))}
                    </ul>
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
                <Link to={item.href} onClick={() => setMobileOpen(false)}>
                  {item.label}
                </Link>
                {item.children ? (
                  <ul className={styles.mobileSub}>
                    {item.children.map((child) => (
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

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M16 16l4 4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M5 19c1.5-3 4-4.5 7-4.5s5.5 1.5 7 4.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
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
      <path
        d="M9 8V7a3 3 0 016 0v1"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}
