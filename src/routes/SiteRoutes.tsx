import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { WomenClpPage } from "../pages/WomenClpPage";
import { SweatersPlpPage } from "../pages/SweatersPlpPage";
import { PdpPage } from "../pages/PdpPage";
import { CartPage } from "../pages/CartPage";
import { CheckoutEmailPage } from "../pages/checkout/CheckoutEmailPage";
import { CheckoutShippingPage } from "../pages/checkout/CheckoutShippingPage";
import { CheckoutPaymentPage } from "../pages/checkout/CheckoutPaymentPage";
import { CheckoutConfirmPage } from "../pages/checkout/CheckoutConfirmPage";

export function SiteRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/women" element={<WomenClpPage />} />
      <Route path="/women/sweaters" element={<SweatersPlpPage />} />
      <Route path="/product/:id" element={<PdpPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<Navigate to="/checkout/email" replace />} />
      <Route path="/checkout/email" element={<CheckoutEmailPage />} />
      <Route path="/checkout/shipping" element={<CheckoutShippingPage />} />
      <Route path="/checkout/payment" element={<CheckoutPaymentPage />} />
      <Route path="/checkout/confirm" element={<CheckoutConfirmPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
