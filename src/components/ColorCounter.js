import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View style={styles.counter}>
      <Text style={styles.text}>{color}</Text>
      <Button onPress={() => onIncrease()} title={`Increase ${color}`} />
      <Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
    </View>
  );
};

const styles = StyleSheet.create({
  counter: {
    flex: 1,
    justifyContent: "space-around",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ColorCounter;
