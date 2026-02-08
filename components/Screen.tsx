import { Colors } from "@/constants/theme";
import { View, StyleSheet } from "react-native";

export function Screen({ children }: { children: React.ReactNode }) {
    return <View style={styles.container}>
 
        {children}
    </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
        backgroundColor: Colors.light.surface, // same as tabs
    padding: 16,
    justifyContent: 'center',
    paddingTop:'25%'
  },
});
