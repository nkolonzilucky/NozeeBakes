import { foodImages } from "@/assets/images/food/localImages";
import HeaderComponent from "@/components/HeaderComponent";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Pressable,
} from "react-native";

const CATEGORIES = ["All", "Salads & Bowls", "Pasta & Gnocchi"];

const ITEMS = [
  {
    id: "1",
    title: "Cheezy vegetables",
    kcal: "480 kcal",
    weight: "350g",
    price: "$9.49",
    image: foodImages["grated"],
    tag: "New",
  },
  {
    id: "2",
    title: "Salad with chicken",
    price: "$10.49",
    image: foodImages["mushrooms"],
  },
];

export default function MenuScreen() {
  return (
    <View style={styles.container}>
      <HeaderComponent />
      {/* Categories */}
      <View style={styles.categories}>
        {CATEGORIES.map((cat) => (
          <Pressable key={cat} style={styles.category}>
            <Text>{cat}</Text>
          </Pressable>
        ))}
      </View>

      {/* Food List */}
      <FlatList
        data={ITEMS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.meta}>
                {item.weight} · {item.kcal}
              </Text>
              <View style={styles.row}>
                <Text style={styles.price}>{item.price}</Text>
                <Pressable style={styles.addButton}>
                  <Text style={styles.addText}>Add to cart</Text>
                </Pressable>
              </View>
            </View>
          </View>
        )}
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
  card: {
    backgroundColor: "#4ECB71",
    borderRadius: 20,
    padding: 12,
    flexDirection: "row",
    marginBottom: 16,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
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
