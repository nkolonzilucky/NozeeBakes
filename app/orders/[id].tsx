import { OrderHeader } from "@/components/OrderHeader";
import { OrderItemRow } from "@/components/OrderItemRow";
import { fetchOrderDetails } from "@/lib/api/orders";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";


export default function OrderDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [order, setOrder] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrderDetails(id)
      .then(setOrder)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Text>Loading order…</Text>;
  if (!order) return <Text>Order not found</Text>;

  return (
    <View style={{ padding: 16 }}>
      <OrderHeader order={order} />

      <FlatList
        data={order.order_item}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <OrderItemRow item={item} />}
      />
    </View>
  );
}
