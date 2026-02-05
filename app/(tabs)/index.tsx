import ProductCard from "@/components/ProductCard";
import PromoHearder from "@/components/PromoHearder";
import { addItemToCart } from "@/lib/api/cart";
import { fetchProducts } from "@/lib/api/product";
import { Product } from "@/types/helper.types";
import { router, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
  ActivityIndicator,
} from "react-native";

const CATEGORIES = ["All", "Salads & Bowls", "Pasta & Gnocchi"];

export default function MenuScreen() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [items, setItems] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useFocusEffect(
    useCallback(() => {
      refreshProducts();
    }, []),
  );

  async function refreshProducts() {
    try {
      setLoading(true);
      const data = await fetchProducts();
      setItems(data);
    } catch (error) {
      alert("Error while loading the menu");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }


  if (loading) return <ActivityIndicator />;

  if (items.length === 0) {
    return (
      <View style={styles.emptyState}>
        <Text style={styles.emptyText}>Your cart is empty</Text>
      </View>
    );
  }

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
      <PromoHearder product={items[0]} />
      <Text style={{ fontSize: 30, fontWeight: "bold", padding: 8 }}>
        {selectedCategory}
      </Text>
      {/* Food List */}
      <FlatList
        data={items}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCard product={item} />}
        contentContainerStyle={{
          paddingBottom: 16,
          gap: 10,
        }}
        columnWrapperStyle={{
          // margin: 10,
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
    marginBottom: 66,
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
  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    color: "#6B7280",
    fontSize: 14,
  },
});
