import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Header({hasBack, title=""}) {
  const router = useRouter();

  return (
    <View style={styles.header}>
      {hasBack && (
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => router.back()}
        >
          <Text style={styles.backText}>{"<  Back"}</Text>
        </TouchableOpacity>
      )}
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>{title}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  header: {
    height: 120,
    backgroundColor: "#fff",
    justifyContent: "flex-end",
    paddingBottom: 16,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  backButton: {
    position: "absolute",
    top: 75,
    left: 20,
    zIndex: 999,
  },
  backText: {
    fontSize: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  }
});