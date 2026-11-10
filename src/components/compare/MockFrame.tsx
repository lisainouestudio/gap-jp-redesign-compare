import { useEffect, useRef } from "react";
import { MemoryRouter, useLocation, useNavigate } from "react-router-dom";
import { useCompare, type VariantId } from "../../context/CompareContext";
import { VariantProvider } from "../../context/VariantContext";
import { PromoDrawer } from "../layout/PromoDrawer";
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
  const { viewport, syncedPath, layout, showAnnotations, setShowAnnotations } =
    useCompare();
  const onlyImproved = layout === "improvedOnly";
  const isMobile = viewport === "mobile";
  const isImproved = variant === "improved";
  const viewportLabel = isMobile ? "Mobile" : "Desktop";
  const viewportSize = isMobile ? "390 × 844" : "1280 × scroll";

  return (
    <section
      className={[
        styles.frameWrap,
        isMobile ? styles.mobile : styles.desktop,
        onlyImproved ? styles.solo : "",
      ]
        .filter(Boolean)
        .join(" ")}
      aria-label={`${label} · ${viewportLabel}`}
    >
      <div className={styles.label}>
        <div className={styles.labelLeft}>
          <span className={isImproved ? styles.improved : styles.current}>
            {label}
          </span>
          <span
            className={[styles.viewportBadge, isMobile ? styles.viewportMobile : styles.viewportDesktop].join(" ")}
            title={`Viewport: ${viewportLabel}`}
          >
            <span className={styles.viewportIcon} aria-hidden>
              {isMobile ? <PhoneIcon /> : <MonitorIcon />}
            </span>
            {viewportLabel}
            <span className={styles.viewportSize}>{viewportSize}</span>
          </span>
        </div>
        {isImproved ? (
          <button
            type="button"
            className={[
              styles.annotToggle,
              showAnnotations ? styles.annotToggleOn : "",
            ]
              .filter(Boolean)
              .join(" ")}
            onClick={() => setShowAnnotations(!showAnnotations)}
            aria-pressed={showAnnotations}
          >
            {showAnnotations ? "Annotations on" : "Annotations off"}
          </button>
        ) : (
          <span className={styles.path}>{syncedPath}</span>
        )}
      </div>
      <div className={styles.bezel}>
        {isMobile ? <div className={styles.notch} aria-hidden /> : null}
        <div className={styles.viewport} data-viewport={viewport}>
          <VariantProvider variant={variant}>
            <MemoryRouter initialEntries={[syncedPath]}>
              <PathSync variant={variant} />
              <div className={styles.scrollArea}>
                <div
                  className={[
                    styles.site,
                    variant === "improved" ? styles.siteNoDrawer : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <SiteRoutes />
                  <HotspotLayer />
                </div>
              </div>
              <PromoDrawer />
            </MemoryRouter>
          </VariantProvider>
        </div>
      </div>
    </section>
  );
}

function MonitorIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 20h8M12 16v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
      <rect x="7" y="2.5" width="10" height="19" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M11 17.5h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
