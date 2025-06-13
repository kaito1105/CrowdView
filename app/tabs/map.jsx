import { useRouter } from 'expo-router';
import { useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { FACILITIES } from '../../constants/Facilities';

export default function MapScreen() {
  const mapRef = useRef(null);
  const router = useRouter();
  const INITIAL_REGION = { // LFC Cafeteria
    latitude: 42.248915,
    longitude: -87.828119,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={INITIAL_REGION}
        // onRegionChangeComplete={() => {
        //   setTimeout(() => {
        //     mapRef.current?.animateToRegion(INITIAL_REGION, 500);
        //   }, 500)
        // }}
      >
        <TouchableOpacity style={styles.resetButton}>
          <Text>Reset</Text>
        </TouchableOpacity>
        {FACILITIES.map(facility => (
          <Marker
            key={facility.id}
            coordinate={{
              latitude: facility.latitude,
              longitude: facility.longitude
            }}
          >
            <Callout
              tooltip 
              onPress={() => {
                  router.push(`/crowdInfo/${facility.id}`);
              }}
            >
              <View style={styles.box}>
                <Text style={styles.title}>{facility.name}</Text>
                <Text style={styles.description}>{facility.description}</Text>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Detail</Text>
                </TouchableOpacity>
              </View>
            </Callout>
          </Marker>
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
  resetButton: {
    position: "absolute",
    top: 100,
    right: 50,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
  },
  box: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    minWidth: 130,
    maxWidth: 200,
    elevation: 4, // shadow on Android
    shadowColor: "#000", // shadow on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 4,
  },
  buttonText: {
    fontWeight: "bold",
    color: "#fff",
  }
});