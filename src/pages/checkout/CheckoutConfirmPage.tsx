import { useNavigate } from "react-router-dom";
import { checkoutCustomer, formatYen, heroProduct } from "../../data/fixtures";
import { useCart } from "../../context/CartContext";
import { CheckoutLayout } from "../../components/layout/CheckoutLayout";
import { CheckoutStep } from "../../components/layout/CheckoutStep";
import { Button } from "../../components/ui/Button";
import styles from "./Checkout.module.css";

export function CheckoutConfirmPage() {
  const navigate = useNavigate();
  const cart = useCart();
  const total = cart.subtotal || heroProduct.price;

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

      <CheckoutStep
        number="done"
        title="お支払い方法"
        collapsed
        onEdit={() => navigate("/checkout/payment")}
        summary={
          <span className={styles.paypayLabel}>
            <span className={styles.paypayBadge}>PayPay</span>
            <span className={styles.payNote}>
              注文後、PayPayアプリまたはサイトでお支払いを完了してください。プライベートブラウズ／シークレットモードではエラーになる場合があります。
            </span>
          </span>
        }
      />

      <CheckoutStep number={4} title="注文内容の確認" active>
        <div className={styles.confirmTotal}>
          <span>支払総額（税込）</span>
          <strong>{formatYen(total)}</strong>
        </div>
        <p className={styles.legal}>
          「PayPayで支払う」をタップすると、利用規約およびプライバシーポリシーに同意したものとみなされます。
        </p>
        <Button
          fullWidth
          size="lg"
          variant="paypay"
          onClick={() => navigate("/")}
        >
          <span className={styles.paypayBadgeLight}>PayPay</span>
          で支払う
        </Button>
      </CheckoutStep>
    </CheckoutLayout>
  );
}
