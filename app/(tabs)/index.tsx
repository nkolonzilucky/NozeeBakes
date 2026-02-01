import PromoHearder from "@/components/PromoHearder";
import { Product } from "@/types/helper.types";
import { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const CATEGORIES = ["All", "Salads & Bowls", "Pasta & Gnocchi"];

const ITEMS: Product[] = [
  {
    id: "1",
    name: "Cheezy vegetables",
    kalories: 480,
    size: 350,
    price: 9.49,
    imageurl: "local",
    tag: "New",
    category: "Pizzas",
    created_at: new Date().toISOString(),
    local_image_name: "grated",
    portion: 1,
  },
  {
    id: "2",
    name: "Mushroom Pizza",
    kalories: 480,
    size: 350,
    price: 9.49,
    imageurl: "local",
    tag: "New",
    category: "Pizzas",
    created_at: new Date().toISOString(),
    local_image_name: "grated",
    portion: 1,
  },
  {
    id: "3",
    name: "On Wood Pizza",
    kalories: 480,
    size: 350,
    price: 9.49,
    imageurl: "local",
    tag: "New",
    category: "Pizzas",
    created_at: new Date().toISOString(),
    local_image_name: "on_wood",
    portion: 1,
  },
  {
    id: "4",
    name: "Pressami Pizza",
    kalories: 480,
    size: 350,
    price: 9.49,
    imageurl: "local",
    tag: "New",
    category: "Pizzas",
    created_at: new Date().toISOString(),
    local_image_name: "presami",
    portion: 1,
  },
  {
    id: "5",
    name: "Veggie Pizza",
    kalories: 480,
    size: 350,
    price: 9.49,
    imageurl: "local",
    tag: "New",
    category: "Pizzas",
    created_at: new Date().toISOString(),
    local_image_name: "veggie",
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

      {/* Food List */}
      {/* <FlatList
        data={ITEMS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          
        )}
      /> */}
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
