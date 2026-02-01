import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { Product } from "@/types/helper.types";
import ProductImage from "./ProductImage";

const PromoHearder = ({ product }: { product: Product }) => {
  const { name, size, kalories, price, local_image_name, tag } = product;
  if (!local_image_name) return;
  return (
    <View style={styles.card}>
      <ProductImage local_image_name={local_image_name} tag_text={tag} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{name}</Text>
        <Text style={styles.meta}>
          {size} · {kalories}
        </Text>
        <View style={styles.row}>
          <Text style={styles.price}>{price}</Text>
          <Pressable style={styles.addButton}>
            <Text style={styles.addText}>Add to cart</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default PromoHearder;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1fc04d",
    borderRadius: 20,
    padding: 12,
    flexDirection: "row",
    marginBottom: 16,
  },
  cardContent: {
    flex: 1,
    marginLeft: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
  },
  meta: {
    fontSize: 12,
    opacity: 0.7,
    marginVertical: 4,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontSize: 16,
    fontWeight: "700",
  },
  addButton: {
    backgroundColor: "#111",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
  },
  addText: {
    color: "#fff",
    fontWeight: "600",
  },
});
