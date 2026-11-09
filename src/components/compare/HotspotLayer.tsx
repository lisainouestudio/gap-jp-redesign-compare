import { useState } from "react";
import { useLocation } from "react-router-dom";
import { annotations } from "../../data/annotations";
import { useCompare } from "../../context/CompareContext";
import { useVariant } from "../../context/VariantContext";
import styles from "./HotspotLayer.module.css";

function matchPage(pattern: string, path: string) {
  if (pattern.includes(":")) {
    const re = new RegExp(
      `^${pattern.replace(/:[^/]+/g, "[^/]+")}$`,
    );
    return re.test(path);
  }
  return pattern === path || (pattern === "/product/:id" && path.startsWith("/product/"));
}

export function HotspotLayer() {
  const { showAnnotations } = useCompare();
  const variant = useVariant();
  const location = useLocation();
  const [openId, setOpenId] = useState<string | null>(null);

  if (!showAnnotations || variant !== "improved") return null;

  const visible = annotations.filter((a) => matchPage(a.page, location.pathname));
  if (visible.length === 0) return null;

  return (
    <div className={styles.layer} aria-label="Improvement hotspots">
      {visible.map((a, idx) => (
        <div
          key={a.id}
          className={styles.hotspot}
          style={{ left: `${a.x}%`, top: `${a.y}%` }}
        >
          <button
            type="button"
            className={styles.dot}
            aria-expanded={openId === a.id}
            onClick={() => setOpenId(openId === a.id ? null : a.id)}
          >
            {idx + 1}
          </button>
          {openId === a.id ? (
            <div className={styles.callout} role="dialog">
              <strong>{a.title}</strong>
              <p>
                <span>Why</span> {a.why}
              </p>
              <p>
                <span>How</span> {a.how}
              </p>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
