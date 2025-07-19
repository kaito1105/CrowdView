import {
  getBackgroundColorByCrowdLevel,
  getColorByCrowdLevel
} from "@/utils/colorUtils";
import { StyleSheet, Text, View } from "react-native";

export default function CrowdLevelCard({ level }: { level: string }) {
  const bgColor = getBackgroundColorByCrowdLevel(level.toLowerCase());
  const textColor = getColorByCrowdLevel(level.toLowerCase());

  return (
    <View>
      <Text style={styles.subtitle}>Crowd Level</Text>
      <View style={[styles.box, { backgroundColor: bgColor }]}>
        <Text 
          style={[styles.text, { color: textColor }]}
        >
          {level.toUpperCase()}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 14,
    color: "#707070",
    letterSpacing: 0.3,
    marginBottom: 5,
  },
  box: {
    borderRadius: 5,
    width: 150,
  },
  text: {
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 22,
    letterSpacing: 0.6,
  },
});
