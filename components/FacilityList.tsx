import { Facility } from "@/constants/Facilities";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
  facility: Facility;
  onPress: (id: string) => void;
};

const getColorByCrowdLevel = (level: string): string => {
  switch (level) {
    case "high":
      return "tomato";
    case "mid":
      return "orange";
    case "low":
      return "green";
    default:
      return "black";
  }
};

const getEmojiByCrowdLevel = (level: string): string => {
  switch (level) {
    case "high":
      return "😫";
    case "mid":
      return "😐";
    case "low":
      return "😊";
    default:
      return "";
  }
};

export default function FacilityList({ facility, onPress }: Props) {
  return (
    <View style={styles.box}>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => onPress(facility.id)}
      >
        <Text style={styles.buttonText}>Details</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{facility.name}</Text>
      <Text style={styles.description}>
        Crowd level:{" "}
        <Text 
          style={{
            fontWeight: "bold", 
            color: getColorByCrowdLevel(facility.description),
          }}
        >
          {`${facility.description} ${getEmojiByCrowdLevel(facility.description)}`}
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    padding: 20,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  button: {
    position: "absolute",
    top: 24,
    right: 20,
    zIndex: 999,
  },
  buttonText: {
    fontSize: 16,
    textDecorationLine: "underline",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
  },
});