import { useState } from "react";
import { View, TextInput, Button, StyleSheet, ActivityIndicator } from "react-native";
import { router } from "expo-router";
import { signIn, signUp } from "@/lib/api/auth";
import { Colors } from "@/constants/theme";


export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  if (loading) return <ActivityIndicator />;

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />

      <Button
        color={Colors.light.accent}
        title="Sign In"
        onPress={() => {
          try {
            setLoading(true);
            signIn(email, password);
          } catch (error) {
            alert(error);
          } finally {
            setLoading(false);
          }
        }}
      />
      <Button
        color={Colors.light.accent}
        title="Sign Up"
        onPress={() => {
          try {
            setLoading(true);
            signUp(email, password);
          } catch (error) {
            alert(error);
          } finally {
            setLoading(false);
          }
        }}
      />
      <Button
        title="Cancel"
        onPress={() => {
          router.replace("/(tabs)");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "#9BE7AE",
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
    textAlign: "center",
  },
});
