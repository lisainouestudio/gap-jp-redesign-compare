import { useCart } from "../../context/CartContext";
import { formatYen, heroProduct } from "../../data/fixtures";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import styles from "./OrderSummary.module.css";

export function OrderSummary() {
  const cart = useCart();
  const items =
    cart.items.length > 0
      ? cart.items
      : [{ product: heroProduct, size: "M", qty: 1 }];
  const subtotal = items.reduce((n, i) => n + i.product.price * i.qty, 0);
  const qty = items.reduce((n, i) => n + i.qty, 0);

  return (
    <aside className={styles.summary}>
      <h2 className={styles.title}>
        <BagMini /> ご注文の商品
      </h2>
      <ul className={styles.items}>
        {items.map((item) => (
          <li key={`${item.product.id}-${item.size}`} className={styles.item}>
            <img src={item.product.images[0]} alt="" />
            <div>
              <p className={styles.name}>{item.product.name}</p>
              <p className={styles.meta}>
                カラー: {item.product.color}
                <br />
                サイズ: {item.size}
                <br />
                数量: {item.qty}
              </p>
              <p className={styles.price}>{formatYen(item.product.price)}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className={styles.coupon}>
        <p className={styles.couponLabel}>クーポンコードの適用</p>
        <div className={styles.couponRow}>
          <Input placeholder="クーポンコードを入力" aria-label="クーポンコード" />
          <Button variant="ghost" size="sm" type="button">
            適用する
          </Button>
        </div>
        <p className={styles.memberNote}>
          クーポン・会員特典は{" "}
          <button type="button" className={styles.linkish}>
            ログイン
          </button>{" "}
          または{" "}
          <button type="button" className={styles.linkish}>
            会員登録
          </button>
        </p>
      </div>

      <dl className={styles.totals}>
        <div>
          <dt>合計数量</dt>
          <dd>{qty}</dd>
        </div>
        <div>
          <dt>合計金額（税込）</dt>
          <dd>{formatYen(subtotal)}</dd>
        </div>
        <div>
          <dt>配送料</dt>
          <dd>無料</dd>
        </div>
        <div className={styles.grand}>
          <dt>支払総額</dt>
          <dd>{formatYen(subtotal)}</dd>
        </div>
      </dl>
    </aside>
  );
}

function BagMini() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 8h12l-1 12H7L6 8z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}
