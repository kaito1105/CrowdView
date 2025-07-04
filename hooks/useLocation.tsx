import checkLocation, { Coordinates } from "@/utils/geoUtils";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  centerCoords: Coordinates;
  edgeCoords: Coordinates;
};

export default function UseLocation({ centerCoords, edgeCoords }: Props) {
  const [location, setLocation] = useState<Coordinates | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    let intervalId;

    async function getCurrentLocation() {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
      setTime(new Date(location.timestamp).toLocaleString());
    }
    getCurrentLocation();

    intervalId = setInterval(getCurrentLocation, 60000); // 1 min
    return () => clearInterval(intervalId);
  }, []);

  return (
    <View>
      <Text style={styles.title}>Your Location:</Text>
      <Text style={styles.coords}>
        {errorMsg ? errorMsg :
          location ? 
            `Latitude: ${location.latitude}\nLongitude: ${location.longitude}\nTime: ${time}` :
            "Getting location..."
        }
      </Text>
      {checkLocation(centerCoords, edgeCoords, location) ? (
        <Text style={styles.info}>
          You are currently inside this facility.
        </Text>
      ) : (
        <Text style={styles.info}>
          You aren't currently inside this facility.
        </Text>
      )}
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