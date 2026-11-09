import { formatYen } from "../../data/fixtures";
import styles from "./Price.module.css";

type Props = {
  amount: number;
  size?: "sm" | "md" | "lg";
  className?: string;
};

export function Price({ amount, size = "md", className = "" }: Props) {
  return (
    <span className={[styles.price, styles[size], className].filter(Boolean).join(" ")}>
      {formatYen(amount)}
    </span>
  );
}
