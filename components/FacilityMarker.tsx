import { Facility } from '@/constants/Facilities';
import {
  getBackgroundColorByCrowdLevel,
  getColorByCrowdLevel
} from "@/utils/colorUtils";
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';

interface Props {
  facility: Facility;
  onPress: (id: string) => void;
  mapRef: React.RefObject<MapView | null>;
};

export default function FacilityMarker({ facility, onPress, mapRef }: Props) {
  const crowdLevel = facility.description.toLocaleLowerCase();

  const handleCenter = () => {
    mapRef.current?.animateToRegion(
      {
        latitude: facility.center.latitude,
        longitude: facility.center.longitude,
        latitudeDelta: 0.002,
        longitudeDelta: 0.002,
      },
      500
    );
  };
  const handlePress = () => onPress(facility.id);

  return (
    <Marker
      key={facility.id}
      coordinate={{
        latitude: facility.center.latitude,
        longitude: facility.center.longitude
      }}
      pinColor="#ed3030"
      onPress={handleCenter}
    >
      <Callout tooltip onPress={handlePress}>
        <View style={styles.box}>
          <Text style={styles.title}>{facility.id}</Text>
          <View style={styles.crowdLevel}>
            <Text style={styles.description}>Crowd Level: </Text>
            <View style={[
              styles.crowdLevelBox,
              { backgroundColor: getBackgroundColorByCrowdLevel(crowdLevel) }
            ]}>
              <Text style={[
                styles.crowdLevelText,
                { color: getColorByCrowdLevel(crowdLevel) }
              ]}>
                {crowdLevel.toUpperCase()}
              </Text>
            </View>
          </View>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>SEE DETAILS</Text>
              <Ionicons
                name="chevron-forward"
                size={20}
                color="#0a78f2"
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Callout>
    </Marker>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    paddingBottom: 15,
    borderRadius: 8,
    width: 250,
    elevation: 4, // shadow on Android
    shadowColor: "#000", // shadow on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  title: {
    fontSize: 22,
    color: "#292929",
    marginBottom: 5,
    letterSpacing: 0.8,
  },
  crowdLevel: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#707070",
    letterSpacing: 0.6,
  },
  crowdLevelBox: {
    borderRadius: 3,
    width: 110,
    marginHorizontal: 5,
  },
  crowdLevelText: {
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 3,
    fontSize: 16,
    letterSpacing: 0.6,
  },
  buttonWrapper: {
    alignSelf: "flex-end",
    marginRight: -10,
  },
  button: {
    alignItems: "center",
    flexDirection: "row",
  },
  buttonText: {
    fontWeight: "bold",
    color: "#0a78f2",
    fontSize: 13,
    letterSpacing: 0.6,
  },
  icon: {
    paddingLeft: 5,
  }
})