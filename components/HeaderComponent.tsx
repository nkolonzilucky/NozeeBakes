import { View, Text, StyleSheet } from "react-native";
import React from 'react'

const HeaderComponent = () => {
  return (

          <View style={styles.header}>
            <View style={{ flexDirection: "row", gap: 12 }}>
              <Text style={styles.title}>📍 25min·Home</Text>
              <Text style={styles.subtitle1}>Liberty ave, 47</Text>
            </View>
            <Text style={styles.subtitle2}>
              Kitchen opens 11:00 - 14:00 and 16:30 - 20:30
            </Text>
          </View>
  )
}

export default HeaderComponent

const styles = StyleSheet.create({
  header: {
    gap: 2,
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
  subtitle1: {
    fontWeight: "400",
    fontSize: 18,
    color: "black",
  },
  subtitle2: {
    color: "#2F6F3E",
  },
});