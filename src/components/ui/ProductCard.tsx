import { Link } from "react-router-dom";
import type { Product } from "../../data/fixtures";
import { Badge } from "./Badge";
import { Price } from "./Price";
import styles from "./ProductCard.module.css";

type Props = {
  product: Product;
  to: string;
};

export function ProductCard({ product, to }: Props) {
  return (
    <Link to={to} className={styles.card}>
      <div className={styles.media}>
        <img src={product.images[0]} alt="" />
        {product.badge ? (
          <span className={styles.badge}>
            <Badge tone={product.badge === "Sale" ? "sale" : "new"}>{product.badge}</Badge>
          </span>
        ) : null}
      </div>
      <div className={styles.body}>
        <p className={styles.name}>{product.name}</p>
        <Price amount={product.price} />
      </div>
    </Link>
  );
}
