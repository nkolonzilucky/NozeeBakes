import { OrderHeader } from "@/components/OrderHeader";
import { OrderItemRow } from "@/components/OrderItemRow";
import { Screen } from "@/components/Screen";
import { Colors } from "@/constants/theme";
import { fetchOrderDetails } from "@/lib/api/orders";
import { Stack, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";


export default function OrderDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [order, setOrder] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      fetchOrderDetails(id)
        .then(setOrder)
        .finally(() => setLoading(false));
    } catch (error) {
      alert(error);
    }
  }, [id]);

  if (loading) return <Text>Loading order…</Text>;
  if (!order)
    return (
      <Text style={{ justifyContent: "center", alignContent: "center" }}>
        Order not found
      </Text>
    );

  return (
    // <View
    //   style={{
    //     padding: 16,
    //     backgroundColor: Colors.light.surface,
    //     paddingBottom: 600,
    //   }}
    // >
    <Screen>
      <Stack.Screen options={{ headerShown: false }} />
      <OrderHeader order={order} />

      <FlatList
        data={order.order_item}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <OrderItemRow item={item} />}
      />
    </Screen>

    // </View>
  );
}
