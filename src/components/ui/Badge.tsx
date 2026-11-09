import type { ReactNode } from "react";
import styles from "./Badge.module.css";

type Props = {
  children: ReactNode;
  tone?: "default" | "sale" | "new";
};

export function Badge({ children, tone = "default" }: Props) {
  return <span className={[styles.badge, styles[tone]].join(" ")}>{children}</span>;
}
