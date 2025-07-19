import LogoImage from "@/assets/images/crowdView_logo.jpg";
import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();
  const handleStart = (): void => {
    router.push("/tabs/map");
  };

  return (
    <View style={styles.container}>
      <Image source={LogoImage} style={styles.logoImage} />
      <Text style={styles.title}>Welcome to CrowdView App!</Text>
      <Text style={styles.description}>
        Capture real-time crowd info at LFC
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleStart}>
        <Text style={styles.buttonText}>GET STARTED</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingBottom: 60,
  },
  logoImage: {
    width: 250,
    height: 250,
  },
  title: {
    fontSize: 20,
    color: "#292929",
    letterSpacing: 0.8,
    fontWeight: "bold",
    marginTop:20,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#292929",
    letterSpacing: 0.5,
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#33bff4",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 0.5,
  }
});