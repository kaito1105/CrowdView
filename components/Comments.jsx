import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Comments() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comments</Text>
      <Text>No comments</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ddd",
    padding: 10,
    marginBottom: 10,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  button: {
    position: "absolute",
    top: 5,
    right: 20,
    width: 30,
    height: 30,
    backgroundColor: "#007bff",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontWeight: "bold",
    color: "#fff",
  },
});
