import { useCompare } from "../../context/CompareContext";
import styles from "./CompareToolbar.module.css";

export function CompareToolbar() {
  const {
    layout,
    viewport,
    showAnnotations,
    setLayout,
    setViewport,
    setShowAnnotations,
  } = useCompare();

  return (
    <header className={styles.toolbar}>
      <div className={styles.brand}>
        <strong>Gap JP</strong>
        <span>Redesign Compare</span>
        <span
          className={[
            styles.liveViewport,
            viewport === "mobile" ? styles.liveMobile : styles.liveDesktop,
          ].join(" ")}
          aria-live="polite"
        >
          Viewing: {viewport === "mobile" ? "Mobile 390" : "Desktop 1280"}
        </span>
      </div>

      <div className={styles.groups}>
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

        <div className={styles.group} role="group" aria-label="ビューポート">
          <button
            type="button"
            className={viewport === "desktop" ? styles.active : undefined}
            onClick={() => setViewport("desktop")}
          >
            Desktop
          </button>
          <button
            type="button"
            className={viewport === "mobile" ? styles.active : undefined}
            onClick={() => setViewport("mobile")}
          >
            Mobile
          </button>
        </div>

        <div className={styles.group} role="group" aria-label="アノテーション">
          <button
            type="button"
            className={showAnnotations ? styles.active : undefined}
            onClick={() => setShowAnnotations(!showAnnotations)}
          >
            {showAnnotations ? "Annotations on" : "Annotations off"}
          </button>
        </div>
      </div>

      <p className={styles.note}>Phase 1: Current = Improved twin. UX workshop next.</p>
    </header>
  );
}
