import { useState } from "react";
import { useCompare } from "../../context/CompareContext";
import { heroProduct } from "../../data/fixtures";
import styles from "./CompareToolbar.module.css";

const PAGES = [
  { label: "Home", path: "/" },
  { label: "PDP", path: `/product/${heroProduct.id}` },
] as const;

function pageActive(syncedPath: string, path: string) {
  if (path === "/") return syncedPath === "/" || syncedPath === "";
  if (path.startsWith("/product/")) return syncedPath.startsWith("/product/");
  return syncedPath === path || syncedPath.startsWith(`${path}/`);
}

export function CompareToolbar() {
  const { layout, syncedPath, setLayout, setSyncedPath } = useCompare();
  const [copied, setCopied] = useState(false);

  async function copyLink() {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      // ignore
    }
  }

  return (
    <header className={styles.toolbar}>
      <div className={styles.brand}>
        <strong>Gap JP</strong>
        <span>Redesign Compare</span>
        <span className={[styles.liveViewport, styles.liveDesktop].join(" ")} aria-live="polite">
          Viewing: Desktop 1280
        </span>
      </div>

      <div className={styles.groups}>
        <div className={styles.group} role="group" aria-label="Pages">
          {PAGES.map((page) => (
            <button
              key={page.path}
              type="button"
              className={pageActive(syncedPath, page.path) ? styles.active : undefined}
              onClick={() => setSyncedPath(page.path)}
            >
              {page.label}
            </button>
          ))}
        </div>

        <div className={styles.group} role="group" aria-label="レイアウト">
          <button
            type="button"
            className={layout === "sideBySide" ? styles.active : undefined}
            onClick={() => setLayout("sideBySide")}
          >
            Side by side
          </button>
          <button
            type="button"
            className={layout === "improvedOnly" ? styles.active : undefined}
            onClick={() => setLayout("improvedOnly")}
          >
            Improved only
          </button>
        </div>

        <div className={styles.group} role="group" aria-label="Share">
          <button type="button" onClick={copyLink}>
            {copied ? "Copied" : "Copy link"}
          </button>
        </div>
      </div>

      <p className={styles.credit}>Audit &amp; redesign by Lisa Inoue</p>
    </header>
  );
}
