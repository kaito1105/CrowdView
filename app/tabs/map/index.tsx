import CurrLocImage from "@/assets/images/current_location.jpg";
import RecenterImage from "@/assets/images/recenter.jpg";
import FacilityMarker from "@/components/FacilityMarker";
import { FACILITIES, Facility } from "@/constants/Facilities";
import { INITIAL_REGION } from "@/constants/Region";
import useLocation from "@/hooks/useLocation";
import { useRouter } from 'expo-router';
import { useRef } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Region } from 'react-native-maps';

export default function MapScreen() {
  const { location, time } = useLocation();
  const mapRef = useRef<MapView>(null);
  const router = useRouter();

  const getRegionFromCoords = (lat: number, lon: number): Region => ({
    latitude: lat,
    longitude: lon,
    latitudeDelta: 0.003,
    longitudeDelta: 0.003,
  });

  const handleCurrentLocation = () => {
    if (mapRef.current && location) {
      const region = getRegionFromCoords(
        location.latitude, location.longitude
      );
      mapRef.current.animateToRegion(region, 500);
    }
  };

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
        showsUserLocation={true}
      >
        {FACILITIES.map((facility: Facility) => (
          <FacilityMarker
            key={facility.id}
            facility={facility}
            onPress={handleDetailPress}
            mapRef={mapRef as React.RefObject<MapView>}
          />
        ))}
      </MapView>
      <View style={styles.imageButton}>
        <TouchableOpacity onPress={handleCurrentLocation} >
          <Image source={CurrLocImage} style={styles.image} />
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.recenterButton}
          onPress={handleRecenter}
        >
          <Image source={RecenterImage} style={styles.image} />
        </TouchableOpacity>
      </View>
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
  imageButton: {
    flexDirection: "column",
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  recenterButton: {
    marginTop: 10,
  },
});