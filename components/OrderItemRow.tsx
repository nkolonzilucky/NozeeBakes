import { Order_Item_With_Product } from "@/types/helper.types";
import { View, Text } from "react-native";

export function OrderItemRow({ item }:{item: Order_Item_With_Product}) {
  return (
    <View style={{ marginBottom: 12 }}>
      <Text style={{ fontWeight: "500" }}>{item.product.name}</Text>

      <Text>
        Qty: {item.quantity} × R {item.price}
      </Text>

      <Text>Subtotal: R {item.quantity * item.price}</Text>
    </View>
  );
}
