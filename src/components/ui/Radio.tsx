import type { InputHTMLAttributes, ReactNode } from "react";
import styles from "./Radio.module.css";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: ReactNode;
  description?: ReactNode;
};

export function Radio({ label, description, className = "", ...rest }: Props) {
  return (
    <label className={[styles.radio, rest.checked ? styles.checked : "", className].filter(Boolean).join(" ")}>
      <input type="radio" className={styles.input} {...rest} />
      <span className={styles.mark} aria-hidden />
      <span className={styles.body}>
        <span className={styles.label}>{label}</span>
        {description ? <span className={styles.desc}>{description}</span> : null}
      </span>
    </label>
  );
}
