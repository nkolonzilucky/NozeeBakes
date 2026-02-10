import { Order_Item_With_Product } from "@/types/helper.types";
import { View, Text, StyleSheet } from "react-native";

export function OrderItemRow({ item }: { item: Order_Item_With_Product }) {
  return (
    <View style={styles.row}>
      <View style={styles.icon}>
        {/* <Ionicons name="cube-outline" size={18} color="#374151" /> */}
      </View>

      <View style={styles.content}>
        <Text style={styles.name}>{item.product.name}</Text>
        <Text style={styles.meta}>
          Qty {item.quantity} · R {item.price}
        </Text>
      </View>

      <Text style={styles.total}>R {item.price * item.quantity}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "#E5E7EB",
  },

  icon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#F3F4F6",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  content: {
    flex: 1,
  },

  name: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111827",
  },

  meta: {
    fontSize: 13,
    color: "#6B7280",
    marginTop: 2,
  },

  total: {
    fontWeight: "600",
    color: "#111827",
  },
});
