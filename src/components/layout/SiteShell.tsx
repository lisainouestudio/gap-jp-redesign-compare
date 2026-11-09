import type { ReactNode } from "react";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import styles from "./SiteShell.module.css";

export function SiteShell({
  children,
  hideChrome = false,
}: {
  children: ReactNode;
  hideChrome?: boolean;
}) {
  if (hideChrome) {
    return <div className={styles.root}>{children}</div>;
  }

  return (
    <div className={styles.root}>
      <SiteHeader />
      <main className={styles.main}>{children}</main>
      <SiteFooter />
    </div>
  );
}
