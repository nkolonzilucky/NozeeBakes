import { CartItemWithProduct } from "@/types/cart";
import { createContext, useContext, useState, ReactNode } from "react";


type CartContextType = {
  items: CartItemWithProduct[];
  addItem: (item: Omit<CartItemWithProduct, "quantity">) => void;
  increment: (id: string) => void;
  decrement: (id: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItemWithProduct[]>([]);

  function addItem(item: Omit<CartItemWithProduct, "quantity">) {
    setItems((prev) => {
      const existing = prev.find(
        (i) => i.id === item.id || i.product_id === item.product_id,
      );

      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
        );
      }

      return [...prev, { ...item, quantity: 1 }];
    });
  }

  function increment(id: string) {
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity: i.quantity + 1 } : i)),
    );
  }

  function decrement(id: string) {
    setItems((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, quantity: i.quantity - 1 } : i))
        .filter((i) => i.quantity > 0),
    );
  }

  function clearCart() {
    setItems([]);
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        increment,
        decrement,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }

  return context;
}
