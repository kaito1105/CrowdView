import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

export default function VoteButtons() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const imageMap: { [key: string]: any[] } = {
    light_blue: [
      require("@/assets/images/light_blue.png"),
      require("@/assets/images/light_blue_gray.png"),
    ],
    light_yellow: [
      require("@/assets/images/light_yellow.png"),
      require("@/assets/images/light_yellow_gray.png"),
    ],
    light_red: [
      require("@/assets/images/light_red.png"),
      require("@/assets/images/light_red_gray.png"),
    ],
  };

  const handleVotePress = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <View style={styles.container}>
      {Object.entries(imageMap).map(([imageName, imageSource], index) => (
        <TouchableOpacity key={index} onPress={() => handleVotePress(index)}>
          <Image
            source={selectedIndex === null ?
              imageSource[0] : selectedIndex === index ?
                imageSource[0] : imageSource[1]}
            style={styles.image}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 35,
  },
  image: {
    width: 115,
    height: 90,
    borderRadius: 10,
  },
});
