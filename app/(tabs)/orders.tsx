import { fetchOrders } from "@/lib/api/orders";
import { Order } from "@/types/helper.types";
import { RelativePathString, router } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, View, Text, Pressable, StyleSheet, ActivityIndicator } from "react-native";

export default function OrdersScreen() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetchOrders().then(setOrders).catch((error:string) => {
      if (error.includes('No authenticated user')) {
        alert('Please login.')
      } else {
        console.log(error)
      }
    }).finally(() => setLoading(false))
    
  }, []);

  if(loading) return <ActivityIndicator />

  return (
    <FlatList
      data={orders}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Pressable onPress={() => router.push(`/orders/${item.id}` as RelativePathString)}>
          <View style={styles.orderCard}>
            <Text style={styles.orderId}>Order #{item.id.slice(0, 6)}</Text>

            <Text style={styles.status}>Status: {item.status}</Text>

            <Text style={styles.total}>Total: R {item.total_amount}</Text>

            <Text style={styles.date}>
              {new Date(item.created_at).toLocaleDateString()}
            </Text>
          </View>
        </Pressable>
      )}
    />
  );
}




export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#FFFFFF",
  },

  orderCard: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: "#F9FAFB",
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  orderId: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 4,
  },

  status: {
    fontSize: 13,
    fontWeight: "500",
    marginBottom: 6,
  },

  total: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111827",
  },

  date: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 4,
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
