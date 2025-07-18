import { Ionicons } from '@expo/vector-icons';
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface HeaderProps {
  hasBack: boolean;
  title?: string;
};

export default function Header({ hasBack, title = "" }: HeaderProps) {
  const router = useRouter();

  return (
    <View style={styles.header}>
      {hasBack && (
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons
            name="chevron-back"
            size={24}
            color="#a4a4a4a4"
          />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  header: {
    height: 120,
    backgroundColor: "#fff",
    justifyContent: "flex-end",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ccc",

    // iOS shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,

    // Android shadow
    elevation: 3,
  },
  backButton: {
    position: "absolute",
    paddingBottom: 16,
    left: 20,
  },
  title: {
    fontSize: 22,
    color: "#292929",
    letterSpacing: 0.5,
    fontWeight: "bold",
    paddingBottom: 16,
  }
});