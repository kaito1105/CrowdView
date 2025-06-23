import { StyleSheet, Text, View } from "react-native";

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
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
    justifyContent: "center",
    marginLeft: 50
  }
});