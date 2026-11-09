import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkoutCustomer } from "../../data/fixtures";
import { CheckoutLayout } from "../../components/layout/CheckoutLayout";
import { CheckoutStep } from "../../components/layout/CheckoutStep";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import styles from "./Checkout.module.css";

export function CheckoutEmailPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState(checkoutCustomer.email);

  return (
    <CheckoutLayout>
      <CheckoutStep number={1} title="メールアドレス" active>
        <div className={styles.block}>
          <h3 className={styles.sub}>ゲスト購入</h3>
          <Input
            label="メールアドレス"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
          <p className={styles.points}>
            会員になると {checkoutCustomer.points} ポイント獲得できます。{" "}
            <button type="button" className={styles.link}>
              ログイン
            </button>{" "}
            または{" "}
            <button type="button" className={styles.link}>
              会員登録
            </button>
          </p>
          <Button
            fullWidth
            size="lg"
            onClick={() => navigate("/checkout/shipping")}
          >
            お届け先情報の入力に進む
          </Button>
        </div>

        <div className={styles.accountBox}>
          <p>すでにアカウントをお持ちの方</p>
          <Button variant="secondary" fullWidth type="button">
            ログイン
          </Button>
        </div>
        <div className={styles.accountBox}>
          <p>オンラインアカウントを作成</p>
          <Button variant="ghost" fullWidth type="button">
            オンラインアカウントを作成
          </Button>
        </div>
      </CheckoutStep>

      <CheckoutStep number={2} title="お届け先住所" collapsed />
      <CheckoutStep number={3} title="お支払い方法" collapsed />
      <CheckoutStep number={4} title="注文内容の確認" collapsed />
    </CheckoutLayout>
  );
}
