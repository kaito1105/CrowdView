import FacilityMarker from "@/components/FacilityMarker";
import { FACILITIES } from "@/constants/Facilities";
import { useRouter } from 'expo-router';
import { useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default function MapScreen() {
  const mapRef = useRef(null);
  const router = useRouter();
  const INITIAL_REGION = { // LFC Cafeteria
    latitude: 42.248915,
    longitude: -87.828119,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01
  };

  const handleRecenter = () => {
    if (mapRef.current) {
      mapRef.current.animateToRegion(INITIAL_REGION, 500);
    }
  };

  const handleDetailPress = (id) => router.push(`/crowdInfo/${id}`);

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={INITIAL_REGION}
      >
        <TouchableOpacity 
          style={styles.recenterButton} 
          onPress={() => handleRecenter()}
        >
          <Text style={styles.recenterText}>Recenter</Text>
        </TouchableOpacity>
        {FACILITIES.map(facility => (
          <FacilityMarker 
            key={facility.id} 
            facility={facility} 
            onPress={handleDetailPress} 
          />
        ))}
      </MapView>
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