import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Product } from "@/types/helper.types";
import ProductImage from "./ProductImage";
import { Colors } from "@/constants/theme";

const ProductCard = ({ product }: { product: Product }) => {
  const { name, price, portion, local_image_name, tag } = product;
  if (!local_image_name) return;
  return (
    <View>
      <View
        style={{
          backgroundColor: Colors.light.tint,
          padding: 8,
         borderRadius:38
        }}
      >
        <ProductImage
          local_image_name={local_image_name}
          tag_text={tag}
          width={150}
          height={150}
        />
      </View>
      <View style={styles.info}>
        <View style={{ flexDirection: "row", gap: 6, alignItems: "center" }}>
          <Text style={styles.price}>${price.toFixed(2)}</Text>
          <Text style={styles.portion}>{portion}/ portion</Text>
        </View>
        <Text numberOfLines={2} style={styles.title}>
          {name}
        </Text>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: Colors.light.background,
    borderRadius: 20,
    padding: 12,
    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: 120,
    borderRadius: 16,
  },
  badge: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: Colors.light.accent,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "600",
    color: Colors.light.badgeText,
  },
  info: {
    marginTop: 10,
    gap: 4,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.light.text,
  },
  portion: {
    fontSize: 12,
    color: Colors.light.textSecondary,
  },
  price: {
    fontSize: 16,
    fontWeight: "700",
    color: Colors.light.accent,
    marginTop: 4,
  },
});
