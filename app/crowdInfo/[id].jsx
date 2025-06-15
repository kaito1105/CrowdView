import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { FACILITIES } from "../../constants/Facilities";
import UseLocation from "../../hooks/useLocation";

export default function CrowdInfoScreen() {
  const {id} = useLocalSearchParams();
  const facility = FACILITIES.find(f => f.id === id);

  return (
    <View style={styles.container}>
      {facility ? (
        <View>
          <Text style={styles.title}>{facility.name}</Text>
          <Text style={styles.crowdInfo}>Crowd info: </Text>
          <Text style={styles.vote}>Vote:</Text>
          <Text style={styles.comment}>Comment:</Text>
          <UseLocation facilityLat={facility.latitude} facilityLong={facility.longitude}/>
        </View>
      ) : (
        <Text>Facility not found.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  crowdInfo: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  vote: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  comment: {
    fontWeight: "bold",
    marginBottom: 10,
  },
});
