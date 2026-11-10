import { useEffect, useRef, useState } from "react";
import {
  sizeGuideAudiences,
  sizeGuideCategories,
  sizeGuideHowTo,
  womenTopsSizeChart,
} from "../../data/sizeGuide";
import styles from "./SizeGuideLightbox.module.css";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function SizeGuideLightbox({ open, onClose }: Props) {
  const [audience, setAudience] = useState<(typeof sizeGuideAudiences)[number]>(
    "ウィメンズ",
  );
  const [category, setCategory] = useState<(typeof sizeGuideCategories)[number]>(
    "トップス・アウター・ワンピース",
  );
  const [openMenu, setOpenMenu] = useState<"audience" | "category" | null>(null);
  const [unit, setUnit] = useState<"CM" | "IN">("CM");
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) setOpenMenu(null);
  }, [open]);

  if (!open) return null;

  const chart = womenTopsSizeChart;
  const colCount = chart.gapSizes.length;

  return (
    <div className={styles.overlay} role="presentation" onClick={onClose}>
      <div
        ref={rootRef}
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="sizeguide-title"
        onClick={(e) => e.stopPropagation()}
      >
        <header className={styles.head}>
          <h2 id="sizeguide-title">サイズガイド</h2>
          <button type="button" className={styles.close} aria-label="閉じる" onClick={onClose}>
            ×
          </button>
        </header>

        <div className={styles.body}>
          <div className={styles.filters}>
            <Dropdown
              label={audience}
              open={openMenu === "audience"}
              onToggle={() =>
                setOpenMenu((v) => (v === "audience" ? null : "audience"))
              }
              options={sizeGuideAudiences}
              value={audience}
              onSelect={(v) => {
                setAudience(v);
                setOpenMenu(null);
              }}
            />
            <Dropdown
              label={category}
              open={openMenu === "category"}
              onToggle={() =>
                setOpenMenu((v) => (v === "category" ? null : "category"))
              }
              options={sizeGuideCategories}
              value={category}
              onSelect={(v) => {
                setCategory(v);
                setOpenMenu(null);
              }}
            />
          </div>

          <div className={styles.unitRow}>
            <button
              type="button"
              className={unit === "CM" ? styles.unitOn : styles.unit}
              onClick={() => setUnit("CM")}
            >
              CM
            </button>
            <button
              type="button"
              className={unit === "IN" ? styles.unitOn : styles.unit}
              onClick={() => setUnit("IN")}
            >
              IN
            </button>
          </div>

          <h3 className={styles.chartTitle}>{chart.title}</h3>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th scope="col" className={styles.corner} />
                  {chart.headers.map((h, i) => (
                    <th key={h} colSpan={chart.headerSpans[i]} scope="col">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Gapサイズ</th>
                  {chart.gapSizes.map((v) => (
                    <td key={`g-${v}`}>{v}</td>
                  ))}
                </tr>
                <tr>
                  <th scope="row">日本サイズ</th>
                  {chart.japanSizes.map((v, i) => (
                    <td key={`j-${i}`}>{v}</td>
                  ))}
                </tr>
                <tr>
                  <th scope="row">バスト ({unit === "CM" ? "cm" : "in"})</th>
                  {chart.bust.map((v, i) => (
                    <td key={`b-${i}`}>{unit === "CM" ? v : cmToIn(v)}</td>
                  ))}
                </tr>
                <tr>
                  <th scope="row">ヒップ ({unit === "CM" ? "cm" : "in"})</th>
                  {chart.hip.map((v, i) => (
                    <td key={`h-${i}`}>{unit === "CM" ? v : cmToIn(v)}</td>
                  ))}
                </tr>
                <tr>
                  <th scope="row">ゆき丈 ({unit === "CM" ? "cm" : "in"})</th>
                  {chart.sleeve.map((v, i) => (
                    <td key={`s-${i}`}>{unit === "CM" ? v : cmToIn(v)}</td>
                  ))}
                </tr>
              </tbody>
            </table>
            {/* keep colCount referenced for lint-friendly future use */}
            <span className={styles.srOnly}>{colCount} columns</span>
          </div>

          <div className={styles.howto}>
            <p>{sizeGuideHowTo.intro}</p>
            <p>
              <strong>バスト：</strong>
              {sizeGuideHowTo.bust.replace("バスト：", "")}
            </p>
            <p>
              <strong>裄丈（ゆきたけ）：</strong>
              {sizeGuideHowTo.sleeve.replace("裄丈（ゆきたけ）：", "")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function cmToIn(cm: string) {
  const n = Number(cm);
  if (Number.isNaN(n)) return cm;
  return (n / 2.54).toFixed(1);
}

function Dropdown<T extends string>({
  label,
  open,
  onToggle,
  options,
  value,
  onSelect,
}: {
  label: string;
  open: boolean;
  onToggle: () => void;
  options: readonly T[];
  value: T;
  onSelect: (v: T) => void;
}) {
  return (
    <div className={styles.dropdown}>
      <button type="button" className={styles.dropdownBtn} onClick={onToggle}>
        <span>{label}</span>
        <span className={styles.chev} aria-hidden>
          ▾
        </span>
      </button>
      {open ? (
        <ul className={styles.menu} role="listbox">
          {options.map((opt) => (
            <li key={opt}>
              <button
                type="button"
                role="option"
                aria-selected={opt === value}
                className={opt === value ? styles.optionOn : styles.option}
                onClick={() => onSelect(opt)}
              >
                {opt}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
