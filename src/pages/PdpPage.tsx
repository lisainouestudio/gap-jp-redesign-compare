import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { Link, useParams } from "react-router-dom";
import {
  formatYen,
  heroProduct,
  recommendations,
} from "../data/fixtures";
import {
  pdpCareCopy,
  pdpColors,
  pdpCoordImages,
  pdpDescription,
  pdpFitCopy,
  pdpPerks,
  pdpPromoOffer,
  pdpRecent,
  pdpRecentImproved,
  pdpRecs,
  PDP_REVIEWS_PER_PAGE,
  pdpReviewSummary,
  pdpReviews,
  pdpShopCategories,
  pdpSizes,
  pdpVirtusize,
} from "../data/pdpContent";
import { sweaterProducts } from "../data/plpSweaters";
import { useCart } from "../context/CartContext";
import { useVariant } from "../context/VariantContext";
import { SizeGuideLightbox } from "../components/pdp/SizeGuideLightbox";
import { SiteShell } from "../components/layout/SiteShell";
import { Button } from "../components/ui/Button";
import { Modal } from "../components/ui/Modal";
import { Price } from "../components/ui/Price";
import styles from "./PdpPage.module.css";

type DetailTab = "desc" | "fit" | "care";

type ShipLocation = { postal: string; city: string };

const DEFAULT_SHIP_LOCATION: ShipLocation = {
  postal: "790-0007",
  city: "松山市",
};

const JP_WEEKDAYS = ["日", "月", "火", "水", "木", "金", "土"] as const;

/** 5 when roomy; drop to 4 once cards/CTAs start colliding; 2 on very narrow */
function railVisibleForWidth(width: number) {
  if (width >= 1020) return 5;
  if (width >= 620) return 4;
  return 2;
}

function formatPostal(raw: string) {
  const digits = raw.replace(/\D/g, "").slice(0, 7);
  if (digits.length <= 3) return digits;
  return `${digits.slice(0, 3)}-${digits.slice(3)}`;
}

function formatShipDay(date: Date) {
  return `${date.getMonth() + 1}/${date.getDate()}(${JP_WEEKDAYS[date.getDay()]})`;
}

function shipWindowLabel(from = new Date()) {
  const start = new Date(from);
  start.setHours(0, 0, 0, 0);
  start.setDate(start.getDate() + 3);
  const end = new Date(start);
  end.setDate(end.getDate() + 1);
  return `${formatShipDay(start)} 〜 ${formatShipDay(end)}到着予定`;
}

async function reverseGeocode(lat: number, lon: number): Promise<ShipLocation | null> {
  try {
    const url = new URL("https://nominatim.openstreetmap.org/reverse");
    url.searchParams.set("format", "jsonv2");
    url.searchParams.set("lat", String(lat));
    url.searchParams.set("lon", String(lon));
    url.searchParams.set("accept-language", "ja");
    const res = await fetch(url.toString(), {
      headers: { Accept: "application/json" },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as {
      address?: Record<string, string>;
    };
    const a = data.address ?? {};
    const city =
      a.city || a.town || a.village || a.municipality || a.county || a.state || "";
    const postal = a.postcode ? formatPostal(a.postcode) : "";
    if (!city && !postal) return null;
    return {
      postal: postal || DEFAULT_SHIP_LOCATION.postal,
      city: city || DEFAULT_SHIP_LOCATION.city,
    };
  } catch {
    return null;
  }
}

export function PdpPage() {
  const variant = useVariant();
  const isImproved = variant === "improved";
  const { id } = useParams();
  const product = useMemo(
    () =>
      sweaterProducts.find((p) => p.id === id) ??
      (id === heroProduct.id ? heroProduct : undefined) ??
      heroProduct,
    [id],
  );
  const cart = useCart();
  const [size, setSize] = useState<string | null>(
    isImproved ? pdpVirtusize.recommendedSize : null,
  );
  const [colorId, setColorId] = useState<string>(pdpColors[0].id);
  const [qty, setQty] = useState(1);
  const [imageIdx, setImageIdx] = useState(0);
  const [atcOpen, setAtcOpen] = useState(false);
  const [sizeError, setSizeError] = useState(false);
  const [tab, setTab] = useState<DetailTab>("desc");
  const [perkOpen, setPerkOpen] = useState<number | null>(null);
  const [virtusizeOpen, setVirtusizeOpen] = useState(false);
  const [virtusizeSize, setVirtusizeSize] = useState(pdpVirtusize.recommendedSize);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [recIndex, setRecIndex] = useState(0);
  const [recentIndex, setRecentIndex] = useState(0);
  const [railVisible, setRailVisible] = useState(5);
  const [coordIdx, setCoordIdx] = useState(0);
  const [shipLocation, setShipLocation] = useState<ShipLocation>(DEFAULT_SHIP_LOCATION);
  const [locEditOpen, setLocEditOpen] = useState(false);
  const [locDraft, setLocDraft] = useState<ShipLocation>(DEFAULT_SHIP_LOCATION);
  const [reviewPage, setReviewPage] = useState(0);
  const railMeasureRef = useRef<HTMLDivElement>(null);
  const shipWindow = useMemo(() => shipWindowLabel(), []);
  const recentItems = isImproved ? pdpRecentImproved : pdpRecent;
  const recMaxIndex = Math.max(0, pdpRecs.length - railVisible);
  const recentMaxIndex = Math.max(0, recentItems.length - railVisible);
  const recDotCount = recMaxIndex + 1;
  const reviewPageCount = Math.ceil(pdpReviews.length / PDP_REVIEWS_PER_PAGE);
  const reviewPageItems = pdpReviews.slice(
    reviewPage * PDP_REVIEWS_PER_PAGE,
    reviewPage * PDP_REVIEWS_PER_PAGE + PDP_REVIEWS_PER_PAGE,
  );
  const railTrackStyle = {
    ["--rec-visible"]: railVisible,
  } as CSSProperties;

  useEffect(() => {
    const el = railMeasureRef.current;
    if (!el) return;
    const update = () => {
      const next = railVisibleForWidth(el.clientWidth);
      setRailVisible(next);
      setRecIndex((i) => Math.min(i, Math.max(0, pdpRecs.length - next)));
      setRecentIndex((i) => Math.min(i, Math.max(0, recentItems.length - next)));
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [recentItems.length]);

  useEffect(() => {
    if (!isImproved || !navigator.geolocation) return;
    let cancelled = false;
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const found = await reverseGeocode(pos.coords.latitude, pos.coords.longitude);
        if (!cancelled && found) setShipLocation(found);
      },
      () => {
        /* keep default approximate location */
      },
      { enableHighAccuracy: false, timeout: 8000, maximumAge: 600_000 },
    );
    return () => {
      cancelled = true;
    };
  }, [isImproved]);

  const color = pdpColors.find((c) => c.id === colorId) ?? pdpColors[0];
  const gallery = color.gallery;
  const active = gallery[imageIdx] ?? gallery[0];
  const detailSections = [
    { id: "desc" as const, label: "商品説明", copy: pdpDescription },
    { id: "fit" as const, label: "フィット＆サイズ", copy: pdpFitCopy },
    { id: "care" as const, label: "素材＆お手入れ", copy: pdpCareCopy },
  ];
  const tabCopy =
    tab === "desc" ? pdpDescription : tab === "fit" ? pdpFitCopy : pdpCareCopy;

  const onAdd = () => {
    if (!size) {
      setSizeError(true);
      return;
    }
    setSizeError(false);
    cart.addItem({ product, size, qty });
    setAtcOpen(true);
  };

  const selectColor = (id: string) => {
    setColorId(id);
    setImageIdx(0);
  };

  const nextImage = () => setImageIdx((i) => (i + 1) % gallery.length);
  const thumbSrc = (item: (typeof gallery)[number]) =>
    item.type === "video" ? item.poster : item.src;
  const virtusizePanel =
    pdpVirtusize.panels.find((p) => p.size === virtusizeSize) ??
    pdpVirtusize.panels.find((p) => p.size === pdpVirtusize.recommendedSize) ??
    pdpVirtusize.panels[0];
  return (
    <SiteShell>
      <div className={styles.page}>
        <nav className={styles.crumbs} aria-label="パンくず">
          <Link to="/">トップ</Link>
          <span>/</span>
          <Link to="/women">ウィメンズ</Link>
          <span>/</span>
          <Link to="/women/sweaters">セーター・カーディガン</Link>
        </nav>

        <div className={styles.layout}>
          <div className={styles.gallery}>
            <div className={styles.thumbs}>
              {gallery.map((item, i) => (
                <button
                  key={(item.type === "video" ? item.src : item.src) + i}
                  type="button"
                  className={i === imageIdx ? styles.thumbActive : undefined}
                  onClick={() => setImageIdx(i)}
                >
                  <img src={thumbSrc(item)} alt="" />
                  {item.type === "video" ? (
                    <span className={styles.play} aria-hidden />
                  ) : null}
                </button>
              ))}
            </div>
            <div className={styles.mainImage}>
              {active?.type === "video" ? (
                <video
                  key={active.src}
                  className={styles.galleryVideo}
                  src={active.src}
                  poster={active.poster}
                  controls
                  playsInline
                  autoPlay
                  muted
                  loop
                />
              ) : (
                <img src={active?.src ?? product.images[0]} alt="" />
              )}
              {isImproved ? (
                <p className={styles.modelFit}>
                  モデル: 172cm
                  <br />
                  着用サイズ: L
                </p>
              ) : null}
              <button
                type="button"
                className={styles.galleryNext}
                aria-label="次の画像"
                onClick={nextImage}
              >
                ›
              </button>
            </div>
          </div>

          <div className={styles.info}>
            <h1>{product.name}</h1>
            {isImproved ? (
              <div className={styles.priceRow}>
                <Price amount={product.price} size="lg" />
                <a href="#reviews" className={styles.rating}>
                  <span className={styles.stars} aria-hidden>
                    ★★★★☆
                  </span>
                  <span className={styles.ratingScore}>{pdpReviewSummary.average}</span>
                  <span className={styles.ratingCount}>({pdpReviewSummary.count})</span>
                </a>
              </div>
            ) : (
              <Price amount={product.price} size="lg" />
            )}

            <div className={styles.tags}>
              <span className={styles.tagPromo}>{pdpPromoOffer}</span>
              <span className={styles.tagMuted}>オンラインストア限定</span>
            </div>

            <div className={styles.block}>
              <p className={styles.label}>
                カラー{" "}
                <strong>
                  {color.label} ({color.code})
                </strong>
              </p>
              <div className={styles.swatches}>
                {pdpColors.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    aria-label={c.label}
                    className={colorId === c.id ? styles.swatchOn : styles.swatch}
                    onClick={() => selectColor(c.id)}
                  >
                    {c.swatch.startsWith("#") || c.swatch.startsWith("linear") ? (
                      <span style={{ background: c.swatch }} />
                    ) : (
                      <img src={c.swatch} alt="" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.block}>
              <div className={styles.sizeHead}>
                <p className={styles.label}>サイズ</p>
                <button
                  type="button"
                  className={styles.linkBtn}
                  onClick={() => setSizeGuideOpen(true)}
                >
                  サイズガイドを見る
                </button>
              </div>
              <div className={styles.sizes}>
                {pdpSizes.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    disabled={!s.available}
                    className={[
                      size === s.id ? styles.sizeOn : styles.size,
                      !s.available ? styles.sizeOos : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    onClick={() => {
                      if (!s.available) return;
                      setSize(s.id);
                      setSizeError(false);
                    }}
                  >
                    {s.id}
                  </button>
                ))}
              </div>
              {sizeError ? (
                <p className={styles.error}>サイズを選択してください</p>
              ) : null}
            </div>

            <div className={styles.virtusize}>
              <div className={styles.virtusizeRow}>
                <button
                  type="button"
                  className={styles.virtusizeLeft}
                  onClick={() => {
                    setVirtusizeSize(pdpVirtusize.recommendedSize);
                    setVirtusizeOpen(true);
                  }}
                >
                  <img
                    src={pdpVirtusize.icons}
                    alt=""
                    className={styles.virtusizeIcons}
                  />
                  <p className={styles.virtusizeCopy}>
                    あなたにフィットするサイズ{" "}
                    <strong>{pdpVirtusize.recommendedSize}</strong>
                  </p>
                </button>
                <button
                  type="button"
                  className={styles.tryPill}
                  onClick={() => {
                    setVirtusizeSize(pdpVirtusize.recommendedSize);
                    setVirtusizeOpen(true);
                  }}
                >
                  試着する <span aria-hidden>›</span>
                </button>
              </div>
              <div className={styles.virtuMeta}>
                <span className={styles.virtuLogo}>
                  <span className={styles.virtuMark} aria-hidden>
                    V
                  </span>
                  VIRTUSIZE
                </span>
                <button type="button" className={styles.privacyLink}>
                  プライバシーポリシー
                </button>
              </div>
            </div>

            <div className={styles.atcRow}>
              <label className={styles.qty}>
                <span className={styles.srOnly}>数量</span>
                <select
                  value={qty}
                  onChange={(e) => setQty(Number(e.target.value))}
                  aria-label="数量"
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </label>
              <Button fullWidth size="lg" className={styles.atcCta} onClick={onAdd}>
                {size ? "カートに追加" : "サイズを選択"}
              </Button>
            </div>

            {isImproved ? (
              <div className={styles.storeStatus}>
                <p className={styles.storeStatusTitle}>
                  <StoreIcon /> 店舗の在庫状況
                </p>
                <p className={styles.storeStatusNote}>店舗での取り扱いはありません。</p>
              </div>
            ) : (
              <Link to={`/product/${product.id}/store-stock`} className={styles.storeStock}>
                <StoreIcon /> 店舗の在庫検索
              </Link>
            )}

            {isImproved ? (
              <div className={styles.shipBlock}>
                <div className={styles.shipEstimate}>
                  <span className={styles.perkIcon} aria-hidden>
                    <PackageIcon />
                  </span>
                  <div className={styles.shipEstimateCopy}>
                    <p>配送: {shipWindow}</p>
                    <p>
                      <button
                        type="button"
                        className={styles.shipLocLink}
                        onClick={() => {
                          setLocDraft(shipLocation);
                          setLocEditOpen(true);
                        }}
                      >
                        〒{shipLocation.postal} {shipLocation.city}
                      </button>
                      へお届け
                    </p>
                  </div>
                  <div className={styles.perkInfo}>
                    <button
                      type="button"
                      className={styles.perkInfoBtn}
                      aria-label="配送・返品について"
                    >
                      <InfoIcon />
                    </button>
                    <div className={styles.perkInfoModal} role="tooltip">
                      {pdpPerks.map((perk) => (
                        <div key={perk.title} className={styles.perkInfoBlock}>
                          <strong>{perk.title}</strong>
                          <p>{perk.body}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  {locEditOpen ? (
                    <div className={styles.shipLocEdit} role="dialog" aria-label="お届け先を変更">
                      <label>
                        郵便番号
                        <input
                          value={locDraft.postal}
                          onChange={(e) =>
                            setLocDraft((d) => ({ ...d, postal: formatPostal(e.target.value) }))
                          }
                          inputMode="numeric"
                          placeholder="790-0007"
                        />
                      </label>
                      <label>
                        市区町村
                        <input
                          value={locDraft.city}
                          onChange={(e) => setLocDraft((d) => ({ ...d, city: e.target.value }))}
                          placeholder="松山市"
                        />
                      </label>
                      <div className={styles.shipLocActions}>
                        <button type="button" onClick={() => setLocEditOpen(false)}>
                          キャンセル
                        </button>
                        <button
                          type="button"
                          className={styles.shipLocSave}
                          onClick={() => {
                            setShipLocation({
                              postal: formatPostal(locDraft.postal) || DEFAULT_SHIP_LOCATION.postal,
                              city: locDraft.city.trim() || DEFAULT_SHIP_LOCATION.city,
                            });
                            setLocEditOpen(false);
                          }}
                        >
                          更新
                        </button>
                      </div>
                    </div>
                  ) : null}
                </div>
                <p className={styles.returnLine}>
                  <span className={styles.perkIcon} aria-hidden>
                    <ReturnIcon />
                  </span>
                  <span>フォームで簡単返品、店舗でも無料返品可能</span>
                </p>
              </div>
            ) : (
              <ul className={styles.perks}>
                {pdpPerks.map((perk, i) => (
                  <li key={perk.title}>
                    <button
                      type="button"
                      className={styles.perkBtn}
                      aria-expanded={perkOpen === i}
                      onClick={() => setPerkOpen(perkOpen === i ? null : i)}
                    >
                      <span className={styles.perkIcon} aria-hidden>
                        {i === 0 ? (
                          <PackageIcon />
                        ) : i === 1 ? (
                          <ReturnIcon />
                        ) : (
                          <BagReturnIcon />
                        )}
                      </span>
                      <span className={styles.perkText}>
                        <span className={styles.perkTitle}>
                          <strong>{perk.title}</strong>
                          <span className={styles.perkChevron} aria-hidden>
                            {perkOpen === i ? "▴" : "▾"}
                          </span>
                        </span>
                        {perkOpen === i ? (
                          <span className={styles.perkBody}>
                            {"linkLabel" in perk && perk.linkLabel
                              ? perk.body
                                  .split(perk.linkLabel)
                                  .flatMap((part, idx, arr) =>
                                    idx < arr.length - 1
                                      ? [
                                          part,
                                          <button
                                            key={`${perk.title}-link-${idx}`}
                                            type="button"
                                            className={styles.perkLink}
                                            onClick={(e) => e.stopPropagation()}
                                          >
                                            {perk.linkLabel}
                                          </button>,
                                        ]
                                      : [part],
                                  )
                              : perk.body}
                          </span>
                        ) : null}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {isImproved ? (
          <>
            <section className={styles.detailsAccordion} aria-label="商品詳細">
              {detailSections.map((section) => {
                const open = tab === section.id;
                return (
                  <div key={section.id} className={styles.accItem}>
                    <button
                      type="button"
                      className={styles.accHead}
                      aria-expanded={open}
                      onClick={() => setTab(section.id)}
                    >
                      <span>{section.label}</span>
                      <span className={styles.accChevron} aria-hidden>
                        {open ? "▴" : "▾"}
                      </span>
                    </button>
                    {open ? (
                      <div className={styles.accPanel}>
                        <ul>
                          {section.copy.map((line) => (
                            <li key={line}>{line}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </section>

            <section id="reviews" className={styles.reviews} aria-label="お客様のレビュー">
              <div className={styles.reviewsHead}>
                <h2>お客様のレビュー</h2>
                <button type="button" className={styles.writeReview}>
                  <PencilIcon /> レビューを書く
                </button>
              </div>

              <div className={styles.reviewsScore}>
                <span className={styles.reviewsStars} aria-hidden>
                  ★★★★☆
                </span>
                <strong>{pdpReviewSummary.average.toFixed(1)}</strong>
                <span>({pdpReviewSummary.count})</span>
              </div>

              <div className={styles.fitScale} aria-label="サイズ感">
                <div className={styles.fitTrack}>
                  {[0, 1, 2, 3, 4].map((i) => (
                    <span
                      key={i}
                      className={
                        i === pdpReviewSummary.fitIndex ? styles.fitDotOn : styles.fitDot
                      }
                    />
                  ))}
                  <span
                    className={styles.fitMarker}
                    style={{ left: `${(pdpReviewSummary.fitIndex / 4) * 100}%` }}
                  />
                </div>
                <div className={styles.fitLabels}>
                  <span>小さい</span>
                  <span>ちょうどよい</span>
                  <span>大きい</span>
                </div>
              </div>

              <div className={styles.aiSummary}>
                <p className={styles.aiSummaryTitle}>
                  <SparkleIcon /> AI レビュー要約
                </p>
                <p className={styles.aiSummaryBody}>{pdpReviewSummary.aiSummary}</p>
                <p className={styles.aiSummaryFoot}>
                  お客様の投稿をもとにAIが要約
                  <span className={styles.aiInfo} aria-hidden>
                    <InfoIcon />
                  </span>
                </p>
              </div>

              <div className={styles.reviewKeywords}>
                <p>レビューに含まれるキーワード</p>
                <div className={styles.keywordChips}>
                  {pdpReviewSummary.keywords.map((k) => (
                    <span key={k.label} className={styles.keywordChip}>
                      {k.label} ({k.count})
                    </span>
                  ))}
                </div>
              </div>

              <ul className={styles.reviewList}>
                {reviewPageItems.map((r) => (
                  <li key={r.id} className={styles.reviewCard}>
                    <div className={styles.reviewMeta}>
                      <span className={styles.reviewStars} aria-label={`${r.rating}つ星`}>
                        {"★".repeat(r.rating)}
                        {"☆".repeat(5 - r.rating)}
                      </span>
                      <span>
                        {r.author} ・ {r.date}
                      </span>
                    </div>
                    <p className={styles.reviewTitle}>{r.title}</p>
                    <p className={styles.reviewBody}>{r.body}</p>
                    <p className={styles.reviewAttrs}>
                      購入サイズ: {r.size} / 身長: {r.height}
                    </p>
                  </li>
                ))}
              </ul>

              <div className={styles.reviewPager} aria-label="レビューページ">
                <button
                  type="button"
                  disabled={reviewPage === 0}
                  onClick={() => setReviewPage((p) => Math.max(0, p - 1))}
                  aria-label="前のレビュー"
                >
                  ‹
                </button>
                {Array.from({ length: reviewPageCount }, (_, i) => (
                  <button
                    key={i}
                    type="button"
                    className={i === reviewPage ? styles.reviewPageOn : undefined}
                    onClick={() => setReviewPage(i)}
                    aria-label={`${i + 1}ページ目`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  type="button"
                  disabled={reviewPage >= reviewPageCount - 1}
                  onClick={() => setReviewPage((p) => Math.min(reviewPageCount - 1, p + 1))}
                  aria-label="次のレビュー"
                >
                  ›
                </button>
              </div>
            </section>
          </>
        ) : (
          <section className={styles.details} aria-label="商品詳細">
            <div className={styles.tabs} role="tablist">
              {detailSections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  role="tab"
                  aria-selected={tab === section.id}
                  className={tab === section.id ? styles.tabOn : styles.tab}
                  onClick={() => setTab(section.id)}
                >
                  {section.label}
                </button>
              ))}
            </div>
            <div className={styles.tabPanel} role="tabpanel">
              <ul>
                {tabCopy.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <div className={styles.share} aria-label="共有する">
          <span>共有する</span>
          <button type="button" aria-label="Facebook">
            f
          </button>
          <button type="button" aria-label="X">
            𝕏
          </button>
          <button type="button" aria-label="LINE">
            LINE
          </button>
          <button type="button" aria-label="リンクをコピー">
            🔗
          </button>
        </div>

        <section className={styles.coord} aria-label="おすすめコーディネート商品">
          <h2>おすすめコーディネート商品</h2>
          <div className={styles.coordFrame}>
            <button
              type="button"
              className={styles.coordNav}
              aria-label="前へ"
              onClick={() =>
                setCoordIdx((i) => (i - 1 + pdpCoordImages.length) % pdpCoordImages.length)
              }
            >
              ‹
            </button>
            <img src={pdpCoordImages[coordIdx]} alt={`おすすめコーディネート ${coordIdx + 1}`} />
            <button
              type="button"
              className={styles.coordNav}
              aria-label="次へ"
              onClick={() => setCoordIdx((i) => (i + 1) % pdpCoordImages.length)}
            >
              ›
            </button>
          </div>
        </section>

        <section className={styles.railSection} aria-label="おすすめ">
          <h2>こちらもおすすめ！</h2>
          <div className={styles.railWrap}>
            {recIndex > 0 ? (
              <button
                type="button"
                className={`${styles.railArrow} ${styles.railArrowPrev}`}
                aria-label="前へ"
                onClick={() => setRecIndex((i) => Math.max(0, i - 1))}
              >
                ‹
              </button>
            ) : null}
            <div className={styles.railViewport} ref={railMeasureRef}>
              <div
                className={styles.railTrack}
                style={
                  {
                    ...railTrackStyle,
                    ["--rec-index"]: recIndex,
                  } as CSSProperties
                }
              >
                {pdpRecs.map((item) => (
                  <Link
                    key={item.id + item.name}
                    to={`/product/${item.id}`}
                    className={styles.railCard}
                  >
                    <div className={styles.railMedia}>
                      <img src={item.image} alt="" />
                      <span className={styles.bagPlus} aria-hidden>
                        ＋
                      </span>
                    </div>
                    <p>{item.name}</p>
                    <strong>{formatYen(item.price)}</strong>
                    <div className={styles.recBadges}>
                      {item.badges.map((b) => (
                        <span
                          key={b}
                          className={b === pdpPromoOffer ? styles.badgePromo : styles.badgeMuted}
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            {recIndex < recMaxIndex ? (
              <button
                type="button"
                className={`${styles.railArrow} ${styles.railArrowNext}`}
                aria-label="次へ"
                onClick={() => setRecIndex((i) => Math.min(recMaxIndex, i + 1))}
              >
                ›
              </button>
            ) : null}
          </div>
          <div className={styles.dots} aria-hidden>
            {Array.from({ length: recDotCount }, (_, i) => (
              <button
                key={i}
                type="button"
                className={i === recIndex ? styles.dotOn : undefined}
                aria-label={`おすすめ ${i + 1}`}
                onClick={() => setRecIndex(i)}
              />
            ))}
          </div>
        </section>

        <section
          className={recentItems.length > 0 ? styles.railSection : styles.railSectionEmpty}
          aria-label="最近チェックした商品"
        >
          <h2>最近チェックした商品</h2>
          {recentItems.length > 0 ? (
            <div className={styles.railWrap}>
              {recentIndex > 0 ? (
                <button
                  type="button"
                  className={`${styles.railArrow} ${styles.railArrowPrev}`}
                  aria-label="前へ"
                  onClick={() => setRecentIndex((i) => Math.max(0, i - 1))}
                >
                  ‹
                </button>
              ) : null}
              <div className={styles.railViewport}>
                <div
                  className={styles.railTrack}
                  style={
                    {
                      ...railTrackStyle,
                      ["--rec-index"]: recentIndex,
                    } as CSSProperties
                  }
                >
                  {recentItems.map((item) => (
                    <Link key={item.id} to={`/product/${item.id}`} className={styles.railCard}>
                      <div className={styles.railMedia}>
                        <img src={item.image} alt="" />
                        <span className={styles.bagPlus} aria-hidden>
                          ＋
                        </span>
                      </div>
                      <p>{item.name}</p>
                      <strong>{formatYen(item.price)}</strong>
                      {"badges" in item && item.badges?.length ? (
                        <div className={styles.recBadges}>
                          {item.badges.map((b) => (
                            <span key={b} className={styles.badgeMuted}>
                              {b}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </Link>
                  ))}
                </div>
              </div>
              {recentIndex < recentMaxIndex ? (
                <button
                  type="button"
                  className={`${styles.railArrow} ${styles.railArrowNext}`}
                  aria-label="次へ"
                  onClick={() => setRecentIndex((i) => Math.min(recentMaxIndex, i + 1))}
                >
                  ›
                </button>
              ) : null}
            </div>
          ) : null}
        </section>

        <section className={styles.shopCats} aria-label="ショップカテゴリ">
          <h2>ショップカテゴリ</h2>
          <div className={styles.shopGrid}>
            {pdpShopCategories.map((col) => (
              <div key={col[0]} className={styles.shopCol}>
                {col.map((label) => (
                  <Link key={label} to="/women">
                    {label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </section>
      </div>

      {virtusizeOpen ? (
        <div className={styles.vsOverlay} role="presentation" onClick={() => setVirtusizeOpen(false)}>
          <aside
            className={styles.vsDrawer}
            role="dialog"
            aria-modal="true"
            aria-label="Virtusize 試着"
            onClick={(e) => e.stopPropagation()}
          >
            <header className={styles.vsChrome}>
              <button
                type="button"
                className={styles.vsIconBtn}
                aria-label="閉じる"
                onClick={() => setVirtusizeOpen(false)}
              >
                ×
              </button>
              <button type="button" className={styles.vsIconBtn} aria-label="メニュー">
                <span className={styles.vsMenu} aria-hidden>
                  <i />
                  <i />
                  <i />
                </span>
              </button>
            </header>

            <div className={styles.vsStage}>
              <img
                src={virtusizePanel.src}
                alt={`Virtusize ${virtusizePanel.size}`}
                className={styles.vsShot}
              />
            </div>

            <div className={styles.vsBottom}>
              <div className={styles.vsBottomTop}>
                <button type="button" className={styles.vsEdit}>
                  <span aria-hidden>◎</span> 編集する
                </button>
              </div>
              <div className={styles.vsSizes}>
                {pdpVirtusize.panels.map((p) => (
                  <button
                    key={p.size}
                    type="button"
                    className={p.size === virtusizeSize ? styles.vsSizeOn : styles.vsSize}
                    onClick={() => setVirtusizeSize(p.size)}
                  >
                    {p.size}
                    {p.note ? <span>{p.note}</span> : null}
                  </button>
                ))}
              </div>
              <button
                type="button"
                className={styles.vsAtc}
                onClick={() => {
                  setSize(virtusizeSize);
                  setSizeError(false);
                  setVirtusizeOpen(false);
                  cart.addItem({ product, size: virtusizeSize, qty });
                  setAtcOpen(true);
                }}
              >
                <BagMiniIcon /> サイズ{virtusizeSize}をカートに入れる
              </button>
            </div>
          </aside>
        </div>
      ) : null}

      <SizeGuideLightbox open={sizeGuideOpen} onClose={() => setSizeGuideOpen(false)} />

      <Modal open={atcOpen} onClose={() => setAtcOpen(false)} labelledBy="atc-title">
        <div className={styles.atc}>
          <header className={styles.atcHead}>
            <h2 id="atc-title">
              <span className={styles.check}>✓</span> カートに追加しました
            </h2>
            <button
              type="button"
              className={styles.close}
              aria-label="閉じる"
              onClick={() => setAtcOpen(false)}
            >
              ×
            </button>
          </header>

          <div className={styles.atcItem}>
            <img src={product.images[0] ?? thumbSrc(gallery[0])} alt="" />
            <div>
              <p className={styles.atcName}>{product.name}</p>
              <p className={styles.atcMeta}>
                カラー: {color.label}
                <br />
                サイズ: {size}
                <br />
                数量: {qty}
                <br />
                価格: {formatYen(product.price)}
              </p>
            </div>
          </div>

          <div className={styles.ship}>
            <p>配送料無料でお届けします</p>
            <div className={styles.shipBar} />
          </div>

          <div className={styles.recs}>
            <h3>こちらもおすすめ！</h3>
            <div className={styles.recTrack}>
              {recommendations.map((r) => (
                <Link
                  key={r.id}
                  to={`/product/${r.id}`}
                  className={styles.rec}
                  onClick={() => setAtcOpen(false)}
                >
                  <img src={r.images[0]} alt="" />
                  <span>{formatYen(r.price)}</span>
                </Link>
              ))}
            </div>
          </div>

          <footer className={styles.atcFoot}>
            <div>
              <span>支払総額:</span>
              <strong>
                合計 {cart.count || qty}点{" "}
                {formatYen(cart.subtotal || product.price * qty)}
              </strong>
            </div>
            <div className={styles.atcActions}>
              <Button variant="secondary" onClick={() => setAtcOpen(false)}>
                お買い物を続ける
              </Button>
              <Link to="/cart" className={styles.cartLink} onClick={() => setAtcOpen(false)}>
                <Button>カートに移動</Button>
              </Link>
            </div>
          </footer>
        </div>
      </Modal>
    </SiteShell>
  );
}

function StoreIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 10h16v10H4V10Z" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M3 7h18l-1.5 3H4.5L3 7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M9 20v-6h6v6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 10.5v6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="12" cy="7.2" r="1.1" fill="currentColor" />
    </svg>
  );
}

function PencilIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 20h4L19 9l-4-4L4 16v4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M13 7l4 4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3l1.2 5.2L18 9.5l-4.8 1.3L12 16l-1.2-5.2L6 9.5l4.8-1.3L12 3Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M18.5 14.5l.6 2.4 2.4.6-2.4.6-.6 2.4-.6-2.4-2.4-.6 2.4-.6.6-2.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

function PackageIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M3 8.5 12 4l9 4.5v9L12 22 3 17.5v-9Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M12 12v10M3 8.5 12 12l9-3.5" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M16 3.5c1.2.4 2.6 1.6 2.8 3.2"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ReturnIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M8 8H3.5V3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 8A9 9 0 1 1 6 17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BagReturnIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M7 9V7a5 5 0 0 1 10 0v2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M5 9h14l-1 12H6L5 9Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M10 13h4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BagMiniIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 8h12l-1 13H7L6 8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9 8V6a3 3 0 0 1 6 0v2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
