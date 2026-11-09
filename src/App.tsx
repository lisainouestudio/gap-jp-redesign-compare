import { CompareProvider } from "./context/CompareContext";
import { CartProvider } from "./context/CartContext";
import { CompareShell } from "./components/compare/CompareShell";

export default function App() {
  return (
    <CompareProvider>
      <CartProvider>
        <CompareShell />
      </CartProvider>
    </CompareProvider>
  );
}
