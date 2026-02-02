import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Product } from "@/types/helper.types";
import ProductImage from "./ProductImage";
import { Colors } from "@/constants/theme";
import { addItemToCart } from "@/lib/api/cart";
import { TabIcon } from "./TabIcon";

const ProductCard = ({ product }: { product: Product }) => {
  const { name, price, portion, tag } = product;
  const local_image_name = "on_wood";
  if (!local_image_name) return;
  return (
    <Pressable onPress={() => addItemToCart(product.id)}>
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
      <View
        style={{
          position: "absolute",
          zIndex: 1000,
          bottom: 58,
          right: 0,
          backgroundColor: "white",
          borderRadius: 200,
          padding: 4,
        }}
      >
        <TabIcon focused={false} tabIcon="shopping_bag" />
      </View>
    </Pressable>
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
