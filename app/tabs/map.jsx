import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';

export default function MapScreen() {
  const facilities = [{
    id: 1,
    name: "LFC Cafeteria",
    description: "Crowd info: yellow",
    latitude: 42.248915,
    longitude: -87.828119
  }, {
    id: 2,
    name: "LFC Library",
    description: "Crowd info: green",
    latitude: 42.249493,
    longitude: -87.827533
  }, {
    id: 3,
    name: "LFC SRC",
    description: "Crowd info: red",
    latitude: 42.2442587706149,
    longitude: -87.82802199260125
  }];

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
          initialRegion={{ // LFC Cafeteria
          latitude: 42.248915,
          longitude: -87.828119,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        }}
      >
        {facilities.map(facility => (
          <Marker
            key={facility.id}
            coordinate={{
              latitude: facility.latitude,
              longitude: facility.longitude
            }}
          >
            <Callout tooltip>
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
    flex: 1,
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
    shadowOpacity: 0.3,
    shadowRadius: 4,
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
