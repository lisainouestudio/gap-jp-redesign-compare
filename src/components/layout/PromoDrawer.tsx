import { useState } from "react";
import { Link } from "react-router-dom";
import { asset } from "../../data/asset";
import { promoDrawerTiles } from "../../data/siteChrome";
import { useVariant } from "../../context/VariantContext";
import styles from "./PromoDrawer.module.css";

export function PromoDrawer() {
  const variant = useVariant();
  const [open, setOpen] = useState(false);

  if (variant === "improved") return null;

  return (
    <div className={styles.wrap} data-open={open ? "true" : "false"}>
      <button
        type="button"
        className={styles.lid}
        aria-expanded={open}
        aria-controls="promoDrawerContent"
        onClick={() => setOpen((v) => !v)}
      >
        <div className={styles.copy}>
          <p className={styles.heading}>
            【新着コラボ】Gap×ヴィクトリア・ベッカム第二章
          </p>
          <p className={styles.subheading}>
            着るだけでHAPPY! 人気キャラクターアイテムに新作登場
          </p>
        </div>
        <span className={styles.chevron} aria-hidden>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path
              d={open ? "M6 9l6 6 6-6" : "M6 15l6-6 6 6"}
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      <div
        id="promoDrawerContent"
        className={styles.panel}
        hidden={!open}
      >
        <div className={styles.tiles}>
          {promoDrawerTiles.map((tile) =>
            tile.href.startsWith("http") ? (
              <a
                key={tile.id}
                href={tile.href}
                className={styles.tile}
                target="_blank"
                rel="noreferrer"
                data-tone={tile.tone}
              >
                {tile.image ? (
                  <img src={tile.image} alt={tile.title} />
                ) : (
                  <MusicTileFallback />
                )}
              </a>
            ) : (
              <Link
                key={tile.id}
                to={tile.href}
                className={styles.tile}
                data-tone={tile.tone}
              >
                {tile.image ? (
                  <img src={tile.image} alt={tile.title} />
                ) : (
                  <MusicTileFallback />
                )}
              </Link>
            ),
          )}
        </div>
      </div>
    </div>
  );
}

function MusicTileFallback() {
  return (
    <div className={styles.musicTile}>
      <p className={styles.musicEyebrow}>GAP MUSIC PRESENTS:</p>
      <p className={styles.musicTitle}>Give your gift.</p>
      <img
        src={asset("images/live/music-text.svg")}
        alt=""
        className={styles.musicText}
      />
    </div>
  );
}
