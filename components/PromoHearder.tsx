import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { Product } from "@/types/helper.types";
import ProductImage from "./ProductImage";

const PromoHearder = ({ product }: { product: Product }) => {
  const { name, weight, calories, price, tag } = product;
  const local_image_name = "on_wood";
  if (!local_image_name) return;
  return (
    <View style={styles.card}>
      <ProductImage
        local_image_name={local_image_name}
        tag_text={tag}
        width={150}
        height={150}
      />
      <View style={styles.cardContent}>
        <View style={{ gap: 4 }}>
          <Text style={styles.metaText}>Restorian</Text>
          <Text style={styles.cardTitle}>{name}</Text>
          <View style={styles.meta}>
            <Text style={styles.metaText}>{weight}g</Text>
            <Text style={styles.metaText}>{calories}kcal</Text>
          </View>
        </View>
        <View style={styles.row}>
          <Text style={styles.price}>${price}</Text>
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
    borderRadius: 28,
    padding: 12,
    flexDirection: "row",
    marginBottom: 16,
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
  addButton: {
    backgroundColor: "#111",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
  },
  addText: {
    color: "#fff",
    fontWeight: "400",
  },
});
