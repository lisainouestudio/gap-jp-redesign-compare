import { useEffect, useRef } from "react";
import { MemoryRouter, useLocation, useNavigate } from "react-router-dom";
import { useCompare, type VariantId } from "../../context/CompareContext";
import { VariantProvider } from "../../context/VariantContext";
import { SiteRoutes } from "../../routes/SiteRoutes";
import { HotspotLayer } from "./HotspotLayer";
import styles from "./MockFrame.module.css";

function PathSync({ variant }: { variant: VariantId }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { syncedPath, setSyncedPath } = useCompare();
  const lastLocal = useRef(location.pathname + location.search);
  const applying = useRef(false);

  useEffect(() => {
    const full = location.pathname + location.search;
    if (applying.current) {
      applying.current = false;
      lastLocal.current = full;
      return;
    }
    if (full !== lastLocal.current) {
      lastLocal.current = full;
      setSyncedPath(full);
    }
  }, [location.pathname, location.search, setSyncedPath, variant]);

  useEffect(() => {
    const full = location.pathname + location.search;
    if (syncedPath !== full) {
      applying.current = true;
      navigate(syncedPath, { replace: true });
    }
  }, [syncedPath, location.pathname, location.search, navigate]);

  return null;
}

export function MockFrame({
  variant,
  label,
}: {
  variant: VariantId;
  label: string;
}) {
  const { viewport, syncedPath, layout } = useCompare();
  const onlyImproved = layout === "improvedOnly";

  return (
    <section
      className={[
        styles.frameWrap,
        viewport === "mobile" ? styles.mobile : styles.desktop,
        onlyImproved ? styles.solo : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className={styles.label}>
        <span className={variant === "improved" ? styles.improved : styles.current}>
          {label}
        </span>
        <span className={styles.path}>{syncedPath}</span>
      </div>
      <div className={styles.bezel}>
        <div className={styles.viewport} data-viewport={viewport}>
          <VariantProvider variant={variant}>
            <MemoryRouter initialEntries={[syncedPath]}>
              <PathSync variant={variant} />
              <div className={styles.site}>
                <SiteRoutes />
                <HotspotLayer />
              </div>
            </MemoryRouter>
          </VariantProvider>
        </div>
      </div>
    </section>
  );
}
