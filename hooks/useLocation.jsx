import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function UseLocation({facilityLat, facilityLong}) {
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    async function getCurrentLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
      setTime(new Date(location.timestamp).toLocaleString());
    }
    getCurrentLocation();
  }, []);

  return (
    <View>
      <Text style={styles.title}>Your Location:</Text>
      <Text style={styles.coords}>
        {errorMsg ? errorMsg : 
          location ? `Latitude: ${location.latitude}\nLongitude: ${location.longitude}\nTime: ${time}` : 
          "Getting location..."
        }
      </Text>
      <Text style={styles.info}>You are/aren't currently inside this facility.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
  },
  coords: {
    paddingLeft: 15,
  },
  info: {
    paddingLeft: 15,
  }
})