import { View, Text, Pressable, StyleSheet } from "react-native";

type Props = {
  item: {
    id: string;
    name: string;
    price: number;
    quantity: number;
  };
  onUpdate: (id: string, quantity: number) => void;
};

export function CartItemRow({ item, onUpdate }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>R {item.price}</Text>
      </View>

      <View style={styles.controls}>
        <Pressable
          style={styles.control}
          onPress={() => onUpdate(item.id, item.quantity - 1)}
        >
          <Text style={styles.controlText}>−</Text>
        </Pressable>

        <Text style={styles.quantity}>{item.quantity}</Text>

        <Pressable
          style={styles.control}
          onPress={() => onUpdate(item.id, item.quantity + 1)}
        >
          <Text style={styles.controlText}>+</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 12,
    // backgroundColor: "#FFFFFF",
    // borderWidth: 1,
    // borderColor: "#E5E7EB",
    marginBottom: 10,
  },

  info: {
    flex: 1,
    marginRight: 12,
  },

  name: {
    fontSize: 14,
    fontWeight: "500",
    color: "#111827",
    marginBottom: 4,
  },

  price: {
    fontSize: 13,
    color: "#6B7280",
  },

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
