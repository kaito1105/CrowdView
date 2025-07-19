import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

export default function ExclamationIcon() {
  return <FontAwesome
    name="exclamation-circle"
    size={18}
    color="#aaa"
    style={styles.icon}
  />
}

const styles = StyleSheet.create({
  icon: {
    paddingHorizontal: 5,
  },
});