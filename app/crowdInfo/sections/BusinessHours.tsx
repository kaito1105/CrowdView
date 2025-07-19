import ExclamationIcon from "@/components/ui/ExclamationIcon";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function BusinessHours({ hours, dayIndex }: {
  hours: string[][];
  dayIndex: number;
}) {
  const handleHoursPress = () => {
    Alert.alert("Business hours may differ from the usual schedule.");
  };

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.subtitle}>Today's Hours</Text>
        <TouchableOpacity onPress={handleHoursPress}>
          <ExclamationIcon />
        </TouchableOpacity>
      </View>
      {hours[dayIndex].map((item, index) => (
        <Text key={index} style={styles.text}>{item}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignContent: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#707070",
    letterSpacing: 0.3,
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    color: "#292929",
    paddingRight: 20,
    letterSpacing: 0.3,
  },
});
