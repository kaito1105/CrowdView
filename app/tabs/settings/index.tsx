import CameraImage from "@/assets/images/camera.jpg";
import ProfileImage from "@/assets/images/profile_temp.jpg";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function SettingsScreen() {

  return (
    <View style={styles.container}>
      <Image source={ProfileImage} style={styles.profileImage} />
      <TouchableOpacity>
        <Image source={CameraImage} style={styles.cameraImage} />
      </TouchableOpacity>

      <View style={styles.profile}>
        <Text style={styles.name}>Name</Text>
        <View style={styles.email}>
          <Text style={styles.emailTitle}>Email address</Text>
          <Text style={styles.userEmail}>abcdefg@gmail.com</Text>
        </View>
        <Text>Change your password</Text>
        <Text>Light/Dark</Text>
        <Text>Terms of Use?</Text>
        <Text>Logout</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 50,
    backgroundColor: "#fff",
  },
  profileImage: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  cameraImage: {
    height: 40,
    width: 40,
    borderRadius: 20,
    position: "absolute",
    top: -55,
    left: 40,
  },
  profile: {
    marginTop: 10,
    // width: 300,
  },
  name: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  email: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    width: "100%",
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    marginBottom: 30,
  },
  emailTitle: {
    fontSize: 18,
  },
  userEmail: {
    fontSize: 16,
    color: "#aaa",
  },
});