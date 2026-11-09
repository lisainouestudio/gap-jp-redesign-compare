import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkoutCustomer } from "../../data/fixtures";
import { CheckoutLayout } from "../../components/layout/CheckoutLayout";
import { CheckoutStep } from "../../components/layout/CheckoutStep";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Select } from "../../components/ui/Select";
import styles from "./Checkout.module.css";

export function CheckoutShippingPage() {
  const navigate = useNavigate();
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("リサ");
  const [postal, setPostal] = useState(checkoutCustomer.postal);
  const [prefecture, setPrefecture] = useState("東京都");
  const [city, setCity] = useState("武蔵野市");
  const [street, setStreet] = useState("吉祥寺北町1-2-3");
  const [building, setBuilding] = useState("");
  const [phone, setPhone] = useState(checkoutCustomer.phone);
  const [showError, setShowError] = useState(true);

  const onSubmit = () => {
    if (!lastName.trim()) {
      setShowError(true);
      return;
    }
    setShowError(false);
    navigate("/checkout/payment");
  };

  return (
    <CheckoutLayout>
      <CheckoutStep
        number="done"
        title="メールアドレス"
        collapsed
        onEdit={() => navigate("/checkout/email")}
        summary={checkoutCustomer.email}
      />

      <CheckoutStep number={2} title="受け取り方法" active>
        <div className={styles.grid2}>
          <Input
            label="姓"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
              if (e.target.value.trim()) setShowError(false);
            }}
            error={showError ? "姓を入力してください" : undefined}
          />
          <Input
            label="名"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className={styles.stack}>
          <Input
            label="郵便番号"
            value={postal}
            onChange={(e) => setPostal(e.target.value)}
          />
          <Select
            label="都道府県"
            value={prefecture}
            onChange={(e) => setPrefecture(e.target.value)}
          >
            <option>東京都</option>
            <option>神奈川県</option>
            <option>大阪府</option>
            <option>北海道</option>
          </Select>
          <Input
            label="市区町村"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <Input
            label="丁目、番地"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
          <Input
            label="マンション名や部屋番号など"
            value={building}
            onChange={(e) => setBuilding(e.target.value)}
          />
          <Input
            label="電話番号"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button type="button" className={styles.link}>
          店舗受け取りにする
        </button>
        <div className={styles.mt}>
          <Button fullWidth size="lg" onClick={onSubmit}>
            支払い手続きへ進む
          </Button>
        </div>
      </CheckoutStep>

      <CheckoutStep number={3} title="お支払い方法" collapsed />
      <CheckoutStep number={4} title="注文内容の確認" collapsed />
    </CheckoutLayout>
  );
}
