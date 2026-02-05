import { View, Text, StyleSheet } from "react-native";
import ProductImage from "./ProductImage";
import { local_image_name } from "@/constants/default_image";
import ControlsComponent from "./ControlsComponent";
import { CartItemWithProduct } from "@/types/cart";

type Props = {
  item: CartItemWithProduct;
};

export function CartItemRow({ item }: Props) {
  const {
    product: { name, portion, weight, price },
    id,
  } = item;

  return (
    <View style={styles.card}>
      <View
        style={{ backgroundColor: "#1fc04d", padding: 4, borderRadius: 16 }}
      >
        <ProductImage
          local_image_name={local_image_name}
          tag_text={"None"}
          width={100}
          height={100}
        />
      </View>
      <View style={styles.cardContent}>
        <View style={{ gap: 4 }}>
          <Text style={styles.cardTitle}>{name}</Text>
          <View style={styles.meta}>
            <Text style={styles.metaText}>{portion} portion/</Text>
            <Text style={styles.metaText}>{weight}g</Text>
          </View>
        </View>
        <View style={styles.row}>
          <ControlsComponent cart_item_id={id} />
          <Text style={styles.price}>${price}</Text>
        </View>
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

  card: {
    borderRadius: 28,
    padding: 4,
    flexDirection: "row",
    marginBottom: 0,
    paddingHorizontal: 6,
  },
  cardContent: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "space-between",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  meta: {
    flexDirection: "row",
    gap: 14,
    marginVertical: 4,
  },
  metaText: {
    fontSize: 16,
    opacity: 0.7,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontSize: 20,
    fontWeight: "600",
  },
});
