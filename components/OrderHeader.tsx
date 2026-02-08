import { Colors } from "@/constants/theme";
import { Order } from "@/types/helper.types";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export function OrderHeader({ order }: { order: Order }) {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        {/* <Ionicons name="receipt-outline" size={24} color="#111827" /> */}
        <Text style={styles.title}>Order Confirmed</Text>
      </View>

      <Text style={styles.meta}>Order #{order.id.slice(0, 8)}</Text>

      <Text style={styles.sub}>
        {new Date(order.created_at).toLocaleString()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.light.surfaceSoft,
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
  },

  meta: {
    marginTop: 8,
    fontSize: 14,
    color: "#6B7280",
  },

  sub: {
    fontSize: 13,
    color: "#9CA3AF",
  },
});
