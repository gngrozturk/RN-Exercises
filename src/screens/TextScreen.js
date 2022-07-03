import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [password, setPassword] = useState(" ");
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter Password</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newValue) => setPassword(newValue)}
      />
      <Text style={styles.text}>Password: {password}</Text>
      {password.length > 4 ? null : (
        <Text style={styles.text}>
          Password must be more than five characters
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
  },
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
    height: 50,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 5,
  },
});

export default TextScreen;
