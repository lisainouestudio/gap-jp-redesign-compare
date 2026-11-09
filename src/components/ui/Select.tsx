import type { SelectHTMLAttributes, ReactNode } from "react";
import styles from "./Field.module.css";

type Props = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  error?: string;
  children: ReactNode;
};

export function Select({ label, error, id, className = "", children, ...rest }: Props) {
  const selectId = id ?? rest.name;
  return (
    <label className={styles.field}>
      {label ? <span className={styles.label}>{label}</span> : null}
      <select
        id={selectId}
        className={[styles.input, styles.select, error ? styles.invalid : "", className]
          .filter(Boolean)
          .join(" ")}
        aria-invalid={Boolean(error)}
        {...rest}
      >
        {children}
      </select>
      {error ? <span className={styles.error}>{error}</span> : null}
    </label>
  );
}
