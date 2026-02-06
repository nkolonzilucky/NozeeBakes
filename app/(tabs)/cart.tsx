import { useState } from "react";
import { FlatList, Pressable, Text, View, StyleSheet } from "react-native";
import { CartItemRow } from "@/components/CartItemRow";
import { checkoutCart } from "@/lib/api/orders";
import { RelativePathString, router } from "expo-router";
import { useCart } from "@/context/CartContext";

export default function CartScreen() {
  const { items, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );

  async function handleCheckout() {
    try {
      setLoading(true);
      await checkoutCart(items);
      clearCart();
      router.push("/orders" as RelativePathString);
    } catch (e) {
      if (String(e).includes("No authenticated user")) {
        router.push("/login");
        alert("Login Successful");
      }
      alert(e);
    } finally {
      setLoading(false);
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
        renderItem={({ item }) => <CartItemRow item={item} />}
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
    marginTop: 20,
    marginHorizontal: 16,
    marginBottom: 100,
    // backgroundColor: "#FFFFFF",
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
    // borderTopWidth: 1,
    // borderColor: "#E5E7EB",
    // backgroundColor: "#FFFFFF",
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
