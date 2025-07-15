import CameraImage from "@/assets/images/camera.jpg";
import ProfileImage from "@/assets/images/profile_temp.jpg";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import {
  Alert,
  Image,
  Linking,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

export default function SettingsScreen() {
  const [image, setImage] = useState<string | null>(null);
  const [
    mediaLibraryPermission, requestMediaLibraryPermission
  ] = ImagePicker.useMediaLibraryPermissions();
  const [
    cameraPermission, requestCameraPermission
  ] = ImagePicker.useCameraPermissions();

  // const requestPermissions = async () => {
  //   const libraryGranted = mediaLibraryPermission?.granted
  //     ? true
  //     : (await requestMediaLibraryPermission()).granted;
  //   const cameraGranted = cameraPermission?.granted
  //     ? true
  //     : (await requestCameraPermission()).granted;
  //   return libraryGranted && cameraGranted;
  // };

  const pickImage = async () => {
    try {
      if (Platform.OS !== "web") {
        if (mediaLibraryPermission?.status !== "granted") {
          const permissionResponse = await requestMediaLibraryPermission();
          if (permissionResponse.status !== "granted") {
            Alert.alert(
              "Permission not granted",
              "Please allow access to your photo library to select an image.",
              [
                { text: "Cancel" },
                {
                  text: "Open Settings",
                  onPress: () =>
                    Platform.OS === "ios"
                      ? Linking.openURL("app-settings:")
                      : Linking.openSettings(),
                },
              ]
            );
            return;
          }
        }
      }

      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: "images",
        allowsEditing: true,
        aspect: [4, 4],
        quality: 1,
        base64: true,
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={image ? { uri: image } : ProfileImage}
        style={styles.profileImage}
      />
      <TouchableOpacity onPress={pickImage}>
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