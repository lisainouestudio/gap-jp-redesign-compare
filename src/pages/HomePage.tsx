import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  footerNews,
  homeCategoryTiles,
  homeCrossPromos,
  homeFeatureSlider,
  homeHero,
  homeMusicHero,
  homeSweatSplit,
  kidsBabySnaps,
  staffSnaps,
  type SnapCard,
} from "../data/siteChrome";
import { asset } from "../data/asset";
import { formatYen, heroProduct } from "../data/fixtures";
import { SiteShell } from "../components/layout/SiteShell";
import { useVariant } from "../context/VariantContext";
import styles from "./HomePage.module.css";

/** Mock lightbox content — first staff snap only for this phase */
const snapLightboxMock = {
  snap: staffSnaps[0],
  body: "ゆったりとしたシルエットのThe Haileyに、定番ロゴとニットを合わせて大人カジュアルに。足元は白スニーカーで軽やかに仕上げました。",
  sizes: [
    "セーター：XS",
    "長袖Tシャツ：XS",
    "デニム：23 / Short",
    "シューズ：23.0cm",
  ],
  gallery: [
    asset("images/live/staff-1.webp"),
    asset("images/live/staff-2.webp"),
    asset("images/live/staff-3.webp"),
    asset("images/live/staff-4.webp"),
  ],
  products: [
    {
      name: "Gap1969ロゴ チュニックTシャツ",
      price: 4990,
      image: asset("images/live/plp/1184759076.jpg"),
      href: `/product/${heroProduct.id}`,
    },
    {
      name: heroProduct.name,
      price: heroProduct.price,
      image: heroProduct.images[0],
      href: `/product/${heroProduct.id}`,
    },
  ],
};

export function HomePage() {
  const variant = useVariant();
  const isImproved = variant === "improved";

  return (
    <SiteShell>
      {!isImproved ? (
        <section className={styles.saleStrip} aria-label="セール案内">
          <div className={styles.saleStripInner}>
            <div className={styles.saleCopy}>
              <p className={styles.saleEyebrow}>表示価格より</p>
              <p className={styles.saleTitle}>
                2点で30%off 3点以上で40%off
              </p>
              <Link to="/women" className={styles.saleLink}>
                アイテムを見る
              </Link>
            </div>
            <p className={styles.saleNote}>期間限定 セール・一部商品を除く</p>
          </div>
        </section>
      ) : null}

      <HeroVideo
        src={homeHero.video}
        poster={homeHero.image}
        className={styles.hero}
      >
        <div className={styles.heroOverlay}>
          {isImproved ? (
            <div className={styles.heroCopy}>
              <p className={styles.heroEyebrow}>{homeHero.eyebrow}</p>
              <h1 className={styles.heroTitle}>{homeHero.title}</h1>
              <p className={styles.heroSubtitle}>{homeHero.subtitle}</p>
              <p className={styles.heroBody}>{homeHero.body}</p>
            </div>
          ) : (
            <img
              src={homeHero.textOverlay}
              alt=""
              className={styles.heroTextSvg}
            />
          )}
          <div className={styles.heroCtas}>
            {homeHero.ctas.map((cta) => (
              <Link key={cta.label} to={cta.href} className={styles.heroCta}>
                {cta.label}
              </Link>
            ))}
          </div>
        </div>
      </HeroVideo>

      {isImproved ? (
        <section className={styles.postHeroSplit} aria-label="プロモーション">
          <div className={styles.postHeroPromo}>
            <p className={styles.postHeroEyebrow}>表示価格より</p>
            <h2 className={styles.postHeroSaleTitle}>
              2点で30%off
              <br />
              3点以上で40%off
            </h2>
            <Link to="/women" className={styles.postHeroSaleLink}>
              アイテムを見る
            </Link>
            <p className={styles.postHeroNote}>期間限定　セール・一部商品を除く</p>
          </div>

          <a
            href={homeMusicHero.ctas[0].href}
            className={styles.postHeroMusic}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={homeMusicHero.tileImage}
              alt=""
              className={styles.postHeroCardMedia}
            />
            <div className={styles.postHeroCardOverlay}>
              <p className={styles.postHeroCardEyebrow}>{homeMusicHero.eyebrow}</p>
              <h2 className={styles.postHeroCardTitle}>{homeMusicHero.headline}</h2>
              <p className={styles.postHeroCardBody}>{homeMusicHero.body}</p>
              <span className={styles.postHeroCardCta}>{homeMusicHero.ctas[0].label}</span>
            </div>
          </a>

          <Link to={homeSweatSplit.href} className={styles.postHeroSweat}>
            <img
              src={homeSweatSplit.tileImage}
              alt=""
              className={styles.postHeroCardMedia}
            />
            <div className={styles.postHeroCardOverlay}>
              <h2 className={styles.postHeroCardTitle}>{homeSweatSplit.title}</h2>
              <p className={styles.postHeroCardBody}>{homeSweatSplit.body}</p>
              <span className={styles.postHeroCardCta}>{homeSweatSplit.cta}</span>
            </div>
          </Link>
        </section>
      ) : (
        <>
          <HeroVideo
            src={homeMusicHero.video}
            poster={homeMusicHero.poster}
            className={[styles.hero, styles.heroMusic].join(" ")}
          >
            <div className={styles.heroOverlay}>
              <img
                src={homeMusicHero.textOverlay}
                alt={homeMusicHero.title}
                className={styles.heroTextSvg}
              />
              <div className={styles.heroCtas}>
                {homeMusicHero.ctas.map((cta) =>
                  cta.href.startsWith("http") ? (
                    <a
                      key={cta.label}
                      href={cta.href}
                      className={styles.heroCta}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {cta.label}
                    </a>
                  ) : (
                    <Link key={cta.label} to={cta.href} className={styles.heroCta}>
                      {cta.label}
                    </Link>
                  ),
                )}
              </div>
            </div>
          </HeroVideo>

          <section className={styles.sweatSplit}>
            <Link to={homeSweatSplit.href} className={styles.sweatLeft}>
              <img src={homeSweatSplit.leftImage} alt="" />
            </Link>
            <Link to={homeSweatSplit.href} className={styles.sweatRight}>
              <img src={homeSweatSplit.rightImage} alt="" />
            </Link>
          </section>
        </>
      )}

      {isImproved ? (
        <FeatureSlider />
      ) : (
        <section className={styles.backInStock}>
          <img
            src={asset("images/live/back-in-stock.webp")}
            alt=""
            className={styles.backInStockImg}
          />
          <div className={styles.backInStockOverlay}>
            <p className={styles.bisEyebrow}>Back in stock.</p>
            <h2 className={styles.bisTitle}>The Hailey Jean.</h2>
            <p className={styles.bisBody}>
              ルーズでバギーなシルエット。1996年インスパイアのデニムが再入荷。
            </p>
            <div className={styles.backInStockCtas}>
              <Link to="/women">デニムをチェック</Link>
              <Link to="/women">特集をチェック</Link>
            </div>
          </div>
        </section>
      )}

      <section className={styles.section}>
        <div className={styles.catGrid}>
          {homeCategoryTiles.map((tile) => (
            <Link key={tile.label} to={tile.href} className={styles.catTile}>
              <img src={tile.image} alt="" />
              <span>{tile.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {isImproved ? (
        <TabbedSnapRail
          adultCards={staffSnaps}
          babyCards={kidsBabySnaps}
        />
      ) : (
        <>
          <SnapRail title="スタッフスナップ" cards={staffSnaps} />
          <SnapRail title="キッズ＆ベビースナップ" cards={kidsBabySnaps} />
        </>
      )}

      {!isImproved ? (
        <section className={styles.newsSection}>
          <div className={styles.staffHead}>
            <h2>ニュース</h2>
            <Link to="/">ニュース一覧へ &gt;</Link>
          </div>
          <ul className={styles.newsCards}>
            {footerNews.map((n) => (
              <li key={n.title} className={styles.newsCard}>
                <img src={n.image} alt="" className={styles.newsCardMedia} />
                <p className={styles.newsCardTitle}>{n.title}</p>
                <time>{n.date}</time>
                <span className={styles.newsTag}>{n.tag}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {isImproved ? (
        <section className={styles.brandGridSection} aria-label="ブランドからのお知らせ">
          <div className={styles.brandGridInner}>
            {[
              ...homeCrossPromos.filter((i) => i.id === "music" || i.id === "styling"),
              ...homeCrossPromos.filter((i) => i.id !== "music" && i.id !== "styling"),
            ].map((item) => (
              <Link key={item.id} to={item.href} className={styles.brandGridCard}>
                <div
                  className={[
                    styles.brandGridMedia,
                    item.id === "styling" ? styles.brandGridMediaStyling : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  style={{ backgroundColor: item.tone }}
                >
                  <img src={item.image} alt="" />
                </div>
                <h3 className={styles.brandGridTitle}>{item.title}</h3>
                <p className={styles.brandGridBody}>{item.body}</p>
              </Link>
            ))}
          </div>
        </section>
      ) : (
        <section className={styles.crossPromo} aria-label="ブランドからのお知らせ">
          <div className={styles.crossPromoGrid}>
            {homeCrossPromos.map((item) => (
              <Link key={item.id} to={item.href} className={styles.crossPromoCard}>
                <div
                  className={styles.crossPromoThumb}
                  style={{ backgroundColor: item.tone }}
                >
                  <img src={item.image} alt="" />
                </div>
                <div className={styles.crossPromoText}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <span>{item.cta}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </SiteShell>
  );
}

function HeroVideo({
  src,
  poster,
  className,
  children,
}: {
  src: string;
  poster?: string;
  className: string;
  children: ReactNode;
}) {
  const variant = useVariant();
  const playOnce = variant === "improved";
  const videoRef = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);
  const [muted, setMuted] = useState(true);
  const [ended, setEnded] = useState(false);

  function togglePlay() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      if (playOnce && video.ended) {
        video.currentTime = 0;
        setEnded(false);
      }
      void video.play();
      setPaused(false);
    } else {
      video.pause();
      setPaused(true);
    }
  }

  function toggleMute() {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  }

  function handleEnded() {
    if (!playOnce) return;
    setEnded(true);
    setPaused(true);
    // Hold the final frame as a static image
    const video = videoRef.current;
    if (video && video.duration) {
      video.currentTime = video.duration;
    }
  }

  return (
    <section className={className}>
      <video
        ref={videoRef}
        className={styles.heroVideo}
        src={src}
        poster={poster}
        autoPlay
        muted
        loop={!playOnce}
        playsInline
        aria-hidden
        onEnded={handleEnded}
      />
      {children}
      <div className={styles.heroControls}>
        <button
          type="button"
          className={styles.ctrlBtn}
          aria-label={muted ? "ミュート解除" : "ミュート"}
          onClick={toggleMute}
        >
          {muted ? <MuteIcon /> : <UnmuteIcon />}
        </button>
        <button
          type="button"
          className={styles.ctrlBtn}
          aria-label={ended || paused ? "再生" : "一時停止"}
          onClick={togglePlay}
        >
          {ended || paused ? <PlayIcon /> : <PauseIcon />}
        </button>
      </div>
    </section>
  );
}

function PauseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <rect x="6" y="5" width="4" height="14" rx="1" />
      <rect x="14" y="5" width="4" height="14" rx="1" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function MuteIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 10v4h3l4 3V7L7 10H4z"
        fill="currentColor"
      />
      <path d="M16 9l5 5M21 9l-5 5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function UnmuteIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 10v4h3l4 3V7L7 10H4z" fill="currentColor" />
      <path
        d="M15 9.5a4 4 0 010 5M17.5 7a7 7 0 010 10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FeatureSlider() {
  const railRef = useRef<HTMLDivElement>(null);

  function scrollBy(dir: -1 | 1) {
    const rail = railRef.current;
    if (!rail) return;
    const amount = Math.round(rail.clientWidth * 0.8) * dir;
    rail.scrollBy({ left: amount, behavior: "smooth" });
  }

  return (
    <section className={styles.featureSlider} aria-label="注目コレクション">
      <div className={styles.featureInner}>
        <div className={styles.featureHead}>
          <div>
            <h2 className={styles.featureHeading}>注目のコレクション</h2>
            <p className={styles.featureSubhead}>
              今チェックしたいストーリーとショップをひとつに。
            </p>
          </div>
          <div className={styles.featureNav}>
            <button
              type="button"
              className={styles.featureArrow}
              aria-label="前へ"
              onClick={() => scrollBy(-1)}
            >
              ‹
            </button>
            <button
              type="button"
              className={styles.featureArrow}
              aria-label="次へ"
              onClick={() => scrollBy(1)}
            >
              ›
            </button>
          </div>
        </div>

        <div className={styles.featureRail} ref={railRef}>
          {homeFeatureSlider.map((tile) => (
            <Link key={tile.id} to={tile.href} className={styles.featureCard}>
              <div className={styles.featureMedia}>
                <img src={tile.image} alt="" />
              </div>
              <h3 className={styles.featureTitle}>{tile.title}</h3>
              <p className={styles.featureBody}>{tile.body}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function SnapRail({ title, cards }: { title: string; cards: SnapCard[] }) {
  return (
    <section className={styles.snapSection}>
      <div className={styles.staffHead}>
        <h2>{title}</h2>
        <Link to="/">もっと見る &gt;</Link>
      </div>
      <SnapCarousel title={title} cards={cards} />
    </section>
  );
}

function TabbedSnapRail({
  adultCards,
  babyCards,
}: {
  adultCards: SnapCard[];
  babyCards: SnapCard[];
}) {
  const [tab, setTab] = useState<"adult" | "baby">("adult");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const cards = tab === "adult" ? adultCards : babyCards;

  return (
    <section className={styles.snapSection} aria-label="スタッフスナップ">
      <div className={styles.staffHead}>
        <h2>スタッフスナップ</h2>
        <Link to="/">もっと見る &gt;</Link>
      </div>
      <div className={styles.snapTabs} role="tablist" aria-label="スナップカテゴリー">
        <button
          type="button"
          role="tab"
          aria-selected={tab === "adult"}
          className={tab === "adult" ? styles.snapTabActive : styles.snapTab}
          onClick={() => setTab("adult")}
        >
          WOMENS &amp; MEN
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === "baby"}
          className={tab === "baby" ? styles.snapTabActive : styles.snapTab}
          onClick={() => setTab("baby")}
        >
          KIDS &amp; BABY
        </button>
      </div>
      <div role="tabpanel">
        <SnapCarousel
          title={tab === "adult" ? "WOMENS & MEN" : "KIDS & BABY"}
          cards={cards}
          compact
          onOpenSnap={() => setLightboxOpen(true)}
        />
      </div>
      <SnapLightbox open={lightboxOpen} onClose={() => setLightboxOpen(false)} />
    </section>
  );
}

function SnapCarousel({
  title,
  cards,
  compact = false,
  onOpenSnap,
}: {
  title: string;
  cards: SnapCard[];
  compact?: boolean;
  onOpenSnap?: () => void;
}) {
  return (
    <>
      <div className={styles.snapRailWrap}>
        <button type="button" className={styles.snapArrow} aria-label="前へ">
          ‹
        </button>
        <div className={compact ? styles.snapRailCompact : styles.snapRail}>
          {cards.map((s) =>
            compact ? (
              <button
                key={`${title}-${s.name}-${s.title}`}
                type="button"
                className={styles.snapCardCompact}
                onClick={onOpenSnap}
              >
                <div className={styles.snapMedia}>
                  {s.image ? (
                    <img src={s.image} alt="" />
                  ) : (
                    <div className={styles.snapMediaFallback} />
                  )}
                </div>
                <div className={styles.snapCaption}>
                  <p className={styles.snapCaptionName}>{s.name}</p>
                  <p className={styles.snapCaptionMeta}>
                    {[s.height, s.date].filter(Boolean).join(" · ")}
                  </p>
                </div>
              </button>
            ) : (
              <article key={`${title}-${s.name}-${s.title}`} className={styles.snapCard}>
                {s.image ? (
                  <img src={s.image} alt="" className={styles.staffPhoto} />
                ) : (
                  <div className={styles.staffPhoto} />
                )}
                <p className={styles.snapTitle}>{s.title}</p>
                <div className={styles.snapMeta}>
                  <span className={styles.snapAvatar} aria-hidden />
                  <p className={styles.staffName}>
                    {s.name}
                    {s.height ? <span>{s.height}</span> : null}
                  </p>
                </div>
                <p className={styles.staffStore}>{s.store}</p>
                <time className={styles.snapDate}>{s.date}</time>
              </article>
            ),
          )}
        </div>
        <button type="button" className={styles.snapArrow} aria-label="次へ">
          ›
        </button>
      </div>
      <div className={styles.snapDots} aria-hidden>
        <span className={styles.dotActive} />
        <span />
        <span />
        <span />
      </div>
    </>
  );
}

function SnapLightbox({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const { snap, body, sizes, gallery, products } = snapLightboxMock;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (open) setActiveIndex(0);
  }, [open]);

  if (!open) return null;

  return (
    <div className={styles.snapLbOverlay} role="presentation" onClick={onClose}>
      <button type="button" className={styles.snapLbClose} onClick={onClose}>
        × 閉じる
      </button>
      <div
        className={styles.snapLbDialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="snap-lightbox-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.snapLbMedia}>
          <div className={styles.snapLbStage}>
            <button
              type="button"
              className={styles.snapLbNav}
              aria-label="前の画像"
              onClick={() =>
                setActiveIndex((i) => (i - 1 + gallery.length) % gallery.length)
              }
            >
              ‹
            </button>
            <img src={gallery[activeIndex]} alt="" className={styles.snapLbMain} />
            <button
              type="button"
              className={[styles.snapLbNav, styles.snapLbNavNext].join(" ")}
              aria-label="次の画像"
              onClick={() => setActiveIndex((i) => (i + 1) % gallery.length)}
            >
              ›
            </button>
          </div>
          <div className={styles.snapLbThumbs}>
            {gallery.map((src, i) => (
              <button
                key={src}
                type="button"
                className={i === activeIndex ? styles.snapLbThumbActive : styles.snapLbThumb}
                onClick={() => setActiveIndex(i)}
              >
                <img src={src} alt="" />
              </button>
            ))}
          </div>
        </div>

        <div className={styles.snapLbInfo}>
          <div className={styles.snapLbStaff}>
            <img src={snap.image} alt="" className={styles.snapLbAvatar} />
            <div>
              <p className={styles.snapLbStaffName}>{snap.name}</p>
              <p className={styles.snapLbStaffMeta}>
                {snap.height}
                <br />
                {snap.store}
              </p>
            </div>
          </div>

          <div className={styles.snapLbTitleRow}>
            <h3 id="snap-lightbox-title">{snap.title}</h3>
            <time>{snap.date}更新</time>
          </div>
          <p className={styles.snapLbBody}>{body}</p>

          <div className={styles.snapLbSizes}>
            <p>【着用サイズ】</p>
            <ul>
              {sizes.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>

          <div className={styles.snapLbProducts}>
            <h4>使用アイテム</h4>
            <ul>
              {products.map((p) => (
                <li key={p.name}>
                  <img src={p.image} alt="" />
                  <div>
                    <p>{p.name}</p>
                    <span>{formatYen(p.price)} (税込)</span>
                  </div>
                  <Link to={p.href} className={styles.snapLbProductCta}>
                    商品を見る
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
