import { useCompare } from "../../context/CompareContext";
import { CompareToolbar } from "./CompareToolbar";
import { MockFrame } from "./MockFrame";
import styles from "./CompareShell.module.css";

export function CompareShell() {
  const { layout, viewport } = useCompare();

  return (
    <div className={styles.shell}>
      <CompareToolbar />
      <div
        className={[
          styles.stage,
          layout === "sideBySide" ? styles.split : styles.solo,
          viewport === "mobile" ? styles.mobileStage : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {layout === "sideBySide" ? (
          <MockFrame variant="current" label="Current" />
        ) : null}
        <MockFrame variant="improved" label="Improved" />
      </div>
    </div>
  );
}
