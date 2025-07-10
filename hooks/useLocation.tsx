import { Coordinates } from "@/utils/geoUtils";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { Alert, Linking, Platform } from "react-native";

interface UseLocationResult {
  location: Coordinates | null;
  time: string | null;
}

export default function useLocation(): UseLocationResult {
  const [coords, setCoords] = useState<Coordinates | null>(null);
  const [status, requestPermission] = Location.useForegroundPermissions();
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const checkInterval = setInterval(async () => {
      const permissionGranted = await requestLocationPermission();
      if (!permissionGranted) return;

      try {
        const location = await Location.getCurrentPositionAsync({});
        setCoords(location.coords);
        setTime(new Date(location.timestamp).toLocaleString());
        // console.log(coords, time);
      } catch (error) {
        console.log("Location error", error);
      }
    }, 6000); // 1 min

    return () => clearInterval(checkInterval);
  }, []);

  const requestLocationPermission = async (): Promise<boolean> => {
    try {
      if (Platform.OS === "web") return false;

      if (status?.status !== "granted") {
        const permissionResponse = await requestPermission();
        if (permissionResponse.status !== "granted") {
          Alert.alert(
            "Permission not granted",
            "Please allow access to your location to use this app.",
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
          return false;
        }
      }
      return true;
    } catch (error) {
      console.log("Permission check failed:", error);
      return false;
    }
  };
  return { location: coords, time };
}