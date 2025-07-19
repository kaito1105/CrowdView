import { Image, StyleSheet } from "react-native";

export default function FacilityImage({ imagePath }: { imagePath: any }) {
  return <Image source={imagePath} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 250,
  },
});