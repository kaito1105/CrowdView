import CameraImage from "@/assets/images/camera.jpg";
import ProfileImage from "@/assets/images/profile_temp.jpg";
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import {
  Alert,
  Image,
  Linking,
  Platform,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function SettingsScreen() {
  const [image, setImage] = useState<string | null>(null);
  const [
    mediaLibraryPermission, requestMediaLibraryPermission
  ] = ImagePicker.useMediaLibraryPermissions();
  const [
    cameraPermission, requestCameraPermission
  ] = ImagePicker.useCameraPermissions();

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

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
        aspect: [1, 1],
        quality: 1,
        base64: true,
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri);
        console.log(image);
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
        <Text style={styles.name}>Kaito Miyamoto</Text>
        
        <View style={styles.section}>
          <View style={styles.email}>
            <Text style={styles.title}>Email address</Text>
            <Text style={styles.userEmail}>abcdefg@gmail.com</Text>
          </View>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>FORGOT PASSWORD?</Text>
              <Ionicons
                name="chevron-forward"
                size={15}
                color="#0a78f2"
                style={{ paddingLeft: 3 }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.displayMode}>
            <Text style={styles.title}>Display mode</Text>
            <View style={styles.switchWrapper}>
              <Text style={styles.switchText}>LIGHT</Text>
              <Switch
                trackColor={{ false: "#cccccc", true: "#33bff4" }}
                thumbColor={"#ffffff"}
                ios_backgroundColor="#cccccc"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
              <Text style={styles.switchText}>DARK</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <TouchableOpacity style={styles.termsOfUse}>
            <Text style={styles.title}>Terms of Use</Text>
            <Ionicons
              name="chevron-forward"
              size={24}
              color="#a4a4a4a4"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>LOG ME OUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 50,
    paddingHorizontal: 30,
    backgroundColor: "#fff",
  },
  profileImage: {
    height: 140,
    width: 140,
    borderRadius: 70,
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
    marginTop: 20,
  },
  name: {
    fontSize: 22,
    color: "#292929",
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 0.5,
  },
  section: {
    paddingVertical: 25,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
  },
  email: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingBottom: 8,
  },
  title: {
    fontSize: 16,
    color: "#292929",
    letterSpacing: 0.5,
  },
  userEmail: {
    fontSize: 16,
    color: "#707070",
  },
  buttonWrapper: {
    alignSelf: "flex-end",
  },
  button: {
    alignItems: "center",
    flexDirection: "row",
  },
  buttonText: {
    fontWeight: "bold",
    color: "#0a78f2",
    fontSize: 11,
  },
  displayMode: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  switchWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  switchText: {
    fontSize: 12,
    color: "#707070",
    paddingHorizontal: 10,
    letterSpacing: 0.4,
  },
  termsOfUse: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logoutButton: {
    width: "100%",
    marginTop: 30,
    paddingHorizontal: 16,
    paddingVertical: 4,
    alignSelf: "center",
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "red",
  },
  logoutText: {
    color: "red",
    fontSize: 14,
    fontWeight: "bold",
  },
});