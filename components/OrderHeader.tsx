import { Order } from "@/types/helper.types";
import { View, Text } from "react-native";

export function OrderHeader({ order }:{order:Order}) {
  return (
    <View style={{ marginBottom: 16 }}>
      <Text style={{ fontSize: 18, fontWeight: "600" }}>
        Order #{order.id.slice(0, 6)}
      </Text>

      <Text>Status: {order.status}</Text>
      <Text>Placed on: {new Date(order.created_at).toLocaleDateString()}</Text>

      <Text style={{ marginTop: 8, fontWeight: "600" }}>
        Total: R {order.total_amount}
      </Text>
    </View>
  );
}
