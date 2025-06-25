import CameraImage from "@/assets/images/camera.jpg";
import ProfileImage from "@/assets/images/profile_temp.jpg";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Image source={ProfileImage} style={styles.profileImage}/>
      <TouchableOpacity>
        <Image source={CameraImage}  style={styles.cameraImage}/>
      </TouchableOpacity>
      <Text>Name</Text>
      <Text>email</Text>
      <Text>Change your password</Text>
      <Text>Light/Dark</Text>
      <Text>Terms of Use?</Text>
      <Text>Logout</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 100,
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
    // zIndex: 999,
  },
});