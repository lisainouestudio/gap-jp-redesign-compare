import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkoutCustomer } from "../../data/fixtures";
import { CheckoutLayout } from "../../components/layout/CheckoutLayout";
import { CheckoutStep } from "../../components/layout/CheckoutStep";
import { Button } from "../../components/ui/Button";
import { Radio } from "../../components/ui/Radio";
import styles from "./Checkout.module.css";

export function CheckoutPaymentPage() {
  const navigate = useNavigate();
  const [method, setMethod] = useState<"paypay" | "card">("paypay");

  return (
    <CheckoutLayout>
      <CheckoutStep
        number="done"
        title="お届け先住所"
        collapsed
        onEdit={() => navigate("/checkout/shipping")}
        summary={
          <>
            {checkoutCustomer.nameEn}
            <br />
            〒{checkoutCustomer.postal}
            <br />
            {checkoutCustomer.address}
            <br />
            {checkoutCustomer.phone}
          </>
        }
      />

      <CheckoutStep number={3} title="お支払い方法" active>
        <p className={styles.required}>*必須項目</p>
        <div className={styles.stack}>
          <Radio
            name="pay"
            checked={method === "paypay"}
            onChange={() => setMethod("paypay")}
            label={
              <span className={styles.paypayLabel}>
                <PayPayMark /> PayPay
              </span>
            }
            description="PayPayアプリまたはサイトでお支払いを完了してください。プライベートブラウズ／シークレットモードではエラーになる場合があります。"
          />
          <Radio
            name="pay"
            checked={method === "card"}
            onChange={() => setMethod("card")}
            label="クレジットカード"
          />
          <button type="button" className={styles.addGift}>
            ＋ ギフトカードを追加
          </button>
        </div>
        <div className={styles.mt}>
          <Button fullWidth size="lg" onClick={() => navigate("/checkout/confirm")}>
            注文内容の確認へ進む
          </Button>
        </div>
      </CheckoutStep>

      <CheckoutStep number={4} title="注文内容の確認" collapsed />
    </CheckoutLayout>
  );
}

function PayPayMark() {
  return (
    <span className={styles.paypayBadge} aria-hidden>
      PayPay
    </span>
  );
}
