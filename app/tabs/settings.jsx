import PencilImage from "@/assets/images/pencil.png";
import ProfileImage from "@/assets/images/profile_temp.png";
import { Image, StyleSheet, Text, View } from "react-native";

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Image source={ProfileImage} style={styles.profileImage}/>
      <Image source={PencilImage}  style={styles.pencilImage}/>
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
    padding: 80,
    backgroundColor: "#fff",
  },
  profileImage: {
    height: 150,
    width: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  pencilImage: {
    height: 30,
    width: 30,
    top: -60,
    left: 55,
    zIndex: 999,
  }
});