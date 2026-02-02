import { useEffect, useState } from "react";
import { FlatList, Pressable, Text, View, StyleSheet } from "react-native";
import { CartItemRow } from "@/components/CartItemRow";
import { fetchCartItems, updateCartItemQuantity } from "@/lib/api/cart";
import { checkoutCart } from "@/lib/api/orders";
import { RelativePathString, router } from "expo-router";

export default function CartScreen() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );

  useEffect(() => {
    fetchCartItemsOrRefresh();
  }, []);

  function fetchCartItemsOrRefresh() {
    fetchCartItems()
      .then(setItems)
      .catch((error) => {
        if (String(error).includes("No authenticated user")) {
          alert("Please login");
          router.push("/login" as RelativePathString);
        } else {
          alert("Error fetching cart items");
          console.log(error);
        }
      })
      .finally(() => setLoading(false));
  }

  async function handleUpdateQuantity(itemId: string, newQuantity: number) {
    await updateCartItemQuantity(itemId, newQuantity);
    fetchCartItemsOrRefresh();
  }

  async function handleCheckout() {
    try {
      await checkoutCart();
      setItems([]);
      router.push("/orders" as RelativePathString);
    } catch (e) {
      alert(e);
    }
  }

  if (loading) {
    return <Text>Loading cart…</Text>;
  }

  if (items.length === 0) {
    return (
      <View style={styles.emptyState}>
        <Text style={styles.emptyText}>Your cart is empty</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CartItemRow item={item} onUpdate={handleUpdateQuantity} />
        )}
      />
      <View style={styles.footer}>
        <Text style={styles.total}>Total: R {total}</Text>

        <Pressable style={styles.checkout} onPress={handleCheckout}>
          <Text style={styles.checkoutText}>Checkout</Text>
        </Pressable>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  listContent: {
    padding: 16,
    paddingBottom: 120, // space for footer
  },

  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    borderTopWidth: 1,
    borderColor: "#E5E7EB",
    backgroundColor: "#FFFFFF",
  },

  total: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 12,
    textAlign: "center",
  },

  checkout: {
    backgroundColor: "#111827",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },

  checkoutText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },

  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  emptyText: {
    color: "#6B7280",
    fontSize: 14,
  },
});
