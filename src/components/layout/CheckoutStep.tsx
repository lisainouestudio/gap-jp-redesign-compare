import type { ReactNode } from "react";
import styles from "./CheckoutStep.module.css";

type Props = {
  number: number | "done";
  title: string;
  active?: boolean;
  collapsed?: boolean;
  editHref?: string;
  onEdit?: () => void;
  children?: ReactNode;
  summary?: ReactNode;
};

export function CheckoutStep({
  number,
  title,
  active,
  collapsed,
  onEdit,
  children,
  summary,
}: Props) {
  return (
    <section
      className={[
        styles.step,
        active ? styles.active : "",
        collapsed ? styles.collapsed : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <header className={styles.header}>
        <div className={styles.left}>
          <span className={[styles.num, number === "done" ? styles.done : ""].join(" ")}>
            {number === "done" ? "✓" : number}
          </span>
          <h2>{title}</h2>
        </div>
        {(collapsed || number === "done") && onEdit ? (
          <button type="button" className={styles.edit} onClick={onEdit}>
            編集
          </button>
        ) : null}
      </header>
      {collapsed ? (
        summary ? <div className={styles.summary}>{summary}</div> : null
      ) : (
        <div className={styles.body}>{children}</div>
      )}
    </section>
  );
}
