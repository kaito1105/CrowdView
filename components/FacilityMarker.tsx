import { Facility } from '@/constants/Facilities';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Callout, Marker } from 'react-native-maps';

interface Props {
  facility: Facility;
  onPress: (id: string) => void;
};

export default function FacilityMarker({ facility, onPress}: Props) {

  return (
    <Marker
      key={facility.id}
      coordinate={{
        latitude: facility.center.latitude,
        longitude: facility.center.longitude
      }}
      pinColor={facility.color}
    >
      <Callout tooltip onPress={() => onPress(facility.id)} >
        <View style={styles.box}>
          <Text style={styles.title}>{facility.id}</Text>
          <Text style={styles.description}>
            {`Crowd level: ${facility.description}`}
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Details</Text>
          </TouchableOpacity>
        </View>
      </Callout>
    </Marker>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    minWidth: 150,
    // maxWidth: 200,
    elevation: 4, // shadow on Android
    shadowColor: "#000", // shadow on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    marginBottom: 10,
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
})