import { Link } from "react-router-dom";
import { useEffect } from "react";
import { formatYen, heroProduct } from "../data/fixtures";
import { useCart, useEnsureDemoCart } from "../context/CartContext";
import { SiteShell } from "../components/layout/SiteShell";
import { Button } from "../components/ui/Button";
import styles from "./CartPage.module.css";

export function CartPage() {
  const cart = useCart();
  const ensure = useEnsureDemoCart();

  useEffect(() => {
    ensure();
  }, [ensure]);

  const items =
    cart.items.length > 0
      ? cart.items
      : [{ product: heroProduct, size: "M", qty: 1 }];
  const subtotal = items.reduce((n, i) => n + i.product.price * i.qty, 0);

  return (
    <SiteShell>
      <div className={styles.page}>
        <h1>ショッピングバッグ ({items.reduce((n, i) => n + i.qty, 0)})</h1>
        <div className={styles.layout}>
          <ul className={styles.list}>
            {items.map((item) => (
              <li key={`${item.product.id}-${item.size}`} className={styles.row}>
                <img src={item.product.images[0]} alt="" />
                <div className={styles.details}>
                  <p className={styles.name}>{item.product.name}</p>
                  <p className={styles.meta}>
                    カラー: {item.product.color}
                    <br />
                    サイズ: {item.size}
                  </p>
                  <div className={styles.qty}>
                    <label>
                      数量
                      <select
                        value={item.qty}
                        onChange={(e) =>
                          cart.updateQty(
                            item.product.id,
                            item.size,
                            Number(e.target.value),
                          )
                        }
                      >
                        {[1, 2, 3, 4, 5].map((n) => (
                          <option key={n} value={n}>
                            {n}
                          </option>
                        ))}
                      </select>
                    </label>
                    <button
                      type="button"
                      className={styles.remove}
                      onClick={() => cart.removeItem(item.product.id, item.size)}
                    >
                      削除
                    </button>
                  </div>
                </div>
                <p className={styles.price}>{formatYen(item.product.price)}</p>
              </li>
            ))}
          </ul>

          <aside className={styles.summary}>
            <h2>注文概要</h2>
            <dl>
              <div>
                <dt>小計（税込）</dt>
                <dd>{formatYen(subtotal)}</dd>
              </div>
              <div>
                <dt>配送料</dt>
                <dd>無料</dd>
              </div>
              <div className={styles.total}>
                <dt>支払総額</dt>
                <dd>{formatYen(subtotal)}</dd>
              </div>
            </dl>
            <Link to="/checkout/email" className={styles.checkoutLink}>
              <Button fullWidth size="lg">
                レジに進む
              </Button>
            </Link>
            <Link to="/women/sweaters" className={styles.continue}>
              お買い物を続ける
            </Link>
          </aside>
        </div>
      </div>
    </SiteShell>
  );
}
