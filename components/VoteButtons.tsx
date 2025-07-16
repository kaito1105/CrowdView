import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function VoteButtons() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePress = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <View style={styles.container}>
      {[0, 1, 2].map((index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.button,
            selectedIndex === index
              ? styles.selectedButton
              : selectedIndex === null
              ? styles.initialButton
              : styles.unselectedButton,
          ]}
          onPress={() => handlePress(index)}
        >
          <Text style={styles.buttonText}>Button {index + 1}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 30,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  initialButton: {
    backgroundColor: "black",
  },
  selectedButton: {
    backgroundColor: "green",
  },
  unselectedButton: {
    backgroundColor: "gray",
  },
});
