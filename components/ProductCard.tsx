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
          borderRadius: 38,
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
        <View style={{ flexDirection: "row", gap: 4, alignItems: "center" }}>
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
  info: {
    marginTop: 2,
    gap: 4,
  },
  title: {
    fontSize: 14,
    fontWeight: "300",
    color: Colors.light.text,
  },
  portion: {
    fontSize: 12,
    color: Colors.light.textSecondary,
    alignSelf: "center",
  },
  price: {
    fontSize: 20,
    fontWeight: "500",
    color: Colors.light.accent,
    alignSelf: "center",
  },
});
