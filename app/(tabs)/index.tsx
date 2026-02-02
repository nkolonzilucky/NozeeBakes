import ProductCard from "@/components/ProductCard";
import PromoHearder from "@/components/PromoHearder";
import { Product } from "@/types/helper.types";
import { useState } from "react";
import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";

const CATEGORIES = ["All", "Salads & Bowls", "Pasta & Gnocchi"];

const ITEMS: Product[] = [
  {
    id: "1",
    name: "Cheezy vegetables",
    calories: 480,
    weight: 350,
    price: 9.49,
    image_url: "local",
    tag: "New",
    category: "Pizzas",
    created_at: new Date().toISOString(),
    in_stock: 3,
    portion: 1,
  },
  {
    id: "2",
    name: "Mushroom Pizza",
    calories: 480,
    weight: 350,
    price: 9.49,
    image_url: "local",
    tag: "New",
    category: "Pizzas",
    created_at: new Date().toISOString(),
    in_stock: 3,
    portion: 1,
  },
  {
    id: "3",
    name: "On Wood Pizza",
    calories: 480,
    weight: 350,
    price: 9.49,
    image_url: "local",
    tag: "New",
    category: "Pizzas",
    created_at: new Date().toISOString(),
    in_stock: 2,
    portion: 1,
  },
  {
    id: "4",
    name: "Pressami Pizza",
    calories: 480,
    weight: 350,
    price: 9.49,
    image_url: "local",
    tag: "New",
    category: "Pizzas",
    created_at: new Date().toISOString(),
    in_stock: 2,
    portion: 1,
  },
  {
    id: "5",
    name: "Veggie Pizza",
    calories: 480,
    weight: 350,
    price: 9.49,
    image_url: "local",
    tag: "New",
    category: "Pizzas",
    created_at: new Date().toISOString(),
    in_stock: 2,
    portion: 1,
  },
];

export default function MenuScreen() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  return (
    <View style={styles.container}>
      {/* Categories */}
      <View style={styles.categories}>
        {CATEGORIES.map((cat) => (
          <Pressable
            key={cat}
            style={[
              styles.category,
              {
                backgroundColor:
                  selectedCategory === cat
                    ? "black"
                    : styles.category.backgroundColor,
              },
            ]}
            onPress={() => setSelectedCategory(cat)}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: selectedCategory === cat ? "semibold" : "300",
                color: selectedCategory === cat ? "white" : "black",
              }}
            >
              {cat}
            </Text>
          </Pressable>
        ))}
      </View>
      <PromoHearder product={ITEMS[0]} />
      <Text style={{ fontSize: 30, fontWeight: "bold", padding: 8 }}>
        {selectedCategory}
      </Text>
      {/* Food List */}
      <FlatList
        data={ITEMS}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCard product={item} />}
        contentContainerStyle={{
          paddingBottom: 16,
          gap: 10,
        }}
        columnWrapperStyle={{
          gap: 16,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9BE7AE",
    padding: 16,
  },
  categories: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 16,
  },
  category: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    backgroundColor: "#7EDC91",
    borderRadius: 20,
  },
});
