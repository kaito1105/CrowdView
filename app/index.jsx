import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* <Image source={IconImage} style={styles.image}/> */}
      <Text style={styles.title}>Welcome to CrowdView App!</Text>
      <Text style={styles.description}>Capture real-time crowd info at LFC</Text>
      <TouchableOpacity style={styles.button} onPress={() => router.push("/tabs")}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff"
  },
  image: {
    width: 180,
    height: 180,
    marginTop: 130,
    marginBottom: 50,
    borderRadius: 10
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10
  },
  description: {
    fontSize: 18,
    marginBottom: 40
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: "center"
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  }
})