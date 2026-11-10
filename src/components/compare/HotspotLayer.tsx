import { useLayoutEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { annotations, type Annotation } from "../../data/annotations";
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

type Pos = { left: string; top: number };

function measureAnnotation(site: HTMLElement, a: Annotation): Pos {
  if (a.anchor) {
    const el = site.querySelector<HTMLElement>(a.anchor);
    if (el) {
      const siteRect = site.getBoundingClientRect();
      const r = el.getBoundingClientRect();
      const leftPct = a.anchorYOnly
        ? a.x
        : ((r.left + r.width / 2 - siteRect.left) / siteRect.width) * 100;
      const top = r.top - siteRect.top + site.scrollTop + r.height / 2;
      return { left: `${leftPct}%`, top };
    }
  }
  return { left: `${a.x}%`, top: a.y };
}

export function HotspotLayer() {
  const { showAnnotations } = useCompare();
  const variant = useVariant();
  const location = useLocation();
  const [openId, setOpenId] = useState<string | null>(null);
  const layerRef = useRef<HTMLDivElement>(null);
  const [positions, setPositions] = useState<Record<string, Pos>>({});

  const visible = annotations.filter((a) => matchPage(a.page, location.pathname));

  useLayoutEffect(() => {
    if (!showAnnotations || variant !== "improved" || visible.length === 0) return;

    const site = layerRef.current?.parentElement;
    if (!site) return;

    const update = () => {
      const next: Record<string, Pos> = {};
      for (const a of visible) {
        next[a.id] = measureAnnotation(site, a);
      }
      setPositions(next);
    };

    update();

    const ro = new ResizeObserver(update);
    ro.observe(site);
    const imgs = site.querySelectorAll("img");
    imgs.forEach((img) => {
      if (!img.complete) img.addEventListener("load", update);
    });

    return () => {
      ro.disconnect();
      imgs.forEach((img) => img.removeEventListener("load", update));
    };
  }, [showAnnotations, variant, location.pathname, visible.length]);

  if (!showAnnotations || variant !== "improved") return null;
  if (visible.length === 0) return null;

  return (
    <div ref={layerRef} className={styles.layer} aria-label="Improvement hotspots">
      {visible.map((a, idx) => {
        const isActive = openId === a.id;
        const pos = positions[a.id] ?? { left: `${a.x}%`, top: a.y };
        return (
          <div
            key={a.id}
            className={[styles.hotspot, isActive ? styles.hotspotActive : ""].filter(Boolean).join(" ")}
            style={{ left: pos.left, top: pos.top }}
          >
            <button
              type="button"
              className={[styles.dot, isActive ? styles.dotActive : ""].filter(Boolean).join(" ")}
              aria-expanded={isActive}
              onClick={() => setOpenId(isActive ? null : a.id)}
            >
              {idx + 1}
            </button>
            {isActive ? (
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
        );
      })}
    </div>
  );
}
