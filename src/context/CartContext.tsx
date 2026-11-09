import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { heroProduct, type Product } from "../data/fixtures";

export type CartItem = {
  product: Product;
  size: string;
  qty: number;
};

type CartState = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  updateQty: (productId: string, size: string, qty: number) => void;
  removeItem: (productId: string, size: string) => void;
  clear: () => void;
  ensureDemoItem: () => void;
  count: number;
  subtotal: number;
};

const CartContext = createContext<CartState | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = useCallback((item: CartItem) => {
    setItems((prev) => {
      const idx = prev.findIndex(
        (i) => i.product.id === item.product.id && i.size === item.size,
      );
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = { ...next[idx], qty: next[idx].qty + item.qty };
        return next;
      }
      return [...prev, item];
    });
  }, []);

  const updateQty = useCallback((productId: string, size: string, qty: number) => {
    setItems((prev) =>
      prev
        .map((i) =>
          i.product.id === productId && i.size === size ? { ...i, qty } : i,
        )
        .filter((i) => i.qty > 0),
    );
  }, []);

  const removeItem = useCallback((productId: string, size: string) => {
    setItems((prev) =>
      prev.filter((i) => !(i.product.id === productId && i.size === size)),
    );
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const ensureDemoItem = useCallback(() => {
    setItems((prev) =>
      prev.length === 0 ? [{ product: heroProduct, size: "M", qty: 1 }] : prev,
    );
  }, []);

  const count = items.reduce((n, i) => n + i.qty, 0);
  const subtotal = items.reduce((n, i) => n + i.product.price * i.qty, 0);

  const value = useMemo(
    () => ({
      items,
      addItem,
      updateQty,
      removeItem,
      clear,
      ensureDemoItem,
      count,
      subtotal,
    }),
    [items, addItem, updateQty, removeItem, clear, ensureDemoItem, count, subtotal],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

export function useEnsureDemoCart() {
  const { ensureDemoItem } = useCart();
  return ensureDemoItem;
}
