import { foodImages } from "@/assets/images/food/localImages";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Pressable,
} from "react-native";

const CART_ITEMS = [
  {
    id: "1",
    title: "Green bowl with chilli",
    price: "$12.29",
    qty: 1,
    image: foodImages['presami'],
  },
  {
    id: "2",
    title: "Pizza on wood",
    price: "$17.89",
    qty: 2,
    image: foodImages['on_wood'],
  },
];

export default function CartScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>My cart list</Text>

      <FlatList
        data={CART_ITEMS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={item.image} style={styles.image} />
            <View style={{ flex: 1 }}>
              <Text style={styles.title}>{item.title}</Text>
              <View style={styles.qtyRow}>
                <Pressable style={styles.qtyButton}>
                  <Text>-</Text>
                </Pressable>
                <Text>{item.qty}</Text>
                <Pressable style={styles.qtyButton}>
                  <Text>+</Text>
                </Pressable>
              </View>
            </View>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        )}
      />

      <View style={styles.footer}>
        <View style={styles.totalRow}>
          <Text>Total</Text>
          <Text style={styles.total}>$36.67</Text>
        </View>

        <Pressable style={styles.checkout}>
          <Text style={styles.checkoutText}>Checkout</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9BE7AE",
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 16,
  },
  item: {
    backgroundColor: "#7EDC91",
    borderRadius: 16,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  image: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginRight: 12,
  },
  title: {
    fontWeight: "600",
  },
  qtyRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 6,
  },
  qtyButton: {
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  price: {
    fontWeight: "700",
  },
  footer: {
    marginTop: "auto",
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  total: {
    fontSize: 18,
    fontWeight: "700",
  },
  checkout: {
    backgroundColor: "#111",
    paddingVertical: 14,
    borderRadius: 24,
    alignItems: "center",
  },
  checkoutText: {
    color: "#fff",
    fontWeight: "700",
  },
});
