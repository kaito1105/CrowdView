import FacilityMarker from "@/components/FacilityMarker";
import { FACILITIES, Facility } from "@/constants/Facilities";
import { INITIAL_REGION } from "@/constants/Region";
import useLocation from "@/hooks/useLocation";
import { useRouter } from 'expo-router';
import { useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Region } from 'react-native-maps';

export default function MapScreen() {
  const { location, time } = useLocation();
  const mapRef = useRef<MapView>(null);
  const router = useRouter();
  
  const handleRecenter = () => {
    if (mapRef.current) {
      mapRef.current.animateToRegion(INITIAL_REGION as Region, 500);
    }
  };

  const handleDetailPress = (id: string) => router.push(`/crowdInfo/${id}`);

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={INITIAL_REGION}
      >
        {location && FACILITIES.map((facility: Facility) => (
          <FacilityMarker 
            key={facility.id} 
            facility={facility} 
            onPress={handleDetailPress} 
          />
        ))}
      </MapView>
      <TouchableOpacity 
        style={styles.recenterButton} 
        onPress={handleRecenter}
      >
        <Text style={styles.recenterText}>Recenter</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  recenterButton: {
    position: "absolute",
    top: 30,
    right: 20,
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
  },
  recenterText: {
    fontWeight: "bold",
    color: "#fff",
  },
});