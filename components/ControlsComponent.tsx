import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { useCart } from "@/context/CartContext";

const ControlsComponent = ({ cart_item_id }: { cart_item_id: string }) => {
  const { increment, decrement, items } = useCart();
  return (
    <View style={styles.controls}>
      <Pressable style={styles.control} onPress={() => decrement(cart_item_id)}>
        <Text style={styles.controlText}>−</Text>
      </Pressable>

      <Text style={styles.quantity}>
        {items.find((i) => i.id === cart_item_id)?.quantity}
      </Text>

      <Pressable
        style={styles.control}
        onPress={() => {
          increment(cart_item_id);
        }}
      >
        <Text style={styles.controlText}>+</Text>
      </Pressable>
    </View>
  );
};

export default ControlsComponent

const styles = StyleSheet.create({
  controls: {
    flexDirection: "row",
    alignItems: "center",
  },

  control: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: "#F3F4F6",
    alignItems: "center",
    justifyContent: "center",
  },

  controlText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111827",
  },

  quantity: {
    width: 32,
    textAlign: "center",
    fontSize: 14,
    fontWeight: "500",
    color: "#111827",
  },
});