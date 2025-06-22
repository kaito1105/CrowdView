import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FACILITIES } from "../../constants/Facilities";

export default function ListScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
    {FACILITIES.map(facility => (
      <View key={facility.id} style={styles.box}>
        <Text style={styles.title}>{facility.name}</Text>
        <Text style={[styles.description, { color: facility.color }]}>
          {`Crowd level: ${facility.description}`}
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => router.push(`/crowdInfo/${facility.id}`)}>
          <Text style={styles.buttonText}>Detail</Text>
        </TouchableOpacity>
      </View>
    ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
  },
  box: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 50,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 4,
  },
  buttonText: {
    fontWeight: "bold",
    color: "#fff",
  }
});