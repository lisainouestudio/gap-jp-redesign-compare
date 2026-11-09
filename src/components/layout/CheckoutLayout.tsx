import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { OrderSummary } from "./OrderSummary";
import styles from "./CheckoutLayout.module.css";

type Props = {
  children: ReactNode;
  title?: string;
};

export function CheckoutLayout({ children, title = "購入手続きに進む" }: Props) {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link to="/cart" className={styles.back}>
          ← カート
        </Link>
        <Link to="/" className={styles.logo}>
          GAP
        </Link>
        <span className={styles.spacer} />
      </header>
      <div className={styles.body}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.grid}>
          <div className={styles.main}>{children}</div>
          <OrderSummary />
        </div>
      </div>
      <footer className={styles.footer}>
        <p>© Gap Inc. UX redesign mockup</p>
        <p>
          <span>利用規約</span>
          <span>プライバシーポリシー</span>
        </p>
      </footer>
    </div>
  );
}
