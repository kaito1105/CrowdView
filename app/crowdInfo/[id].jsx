import { FACILITIES } from "@/constants/Facilities";
import UseLocation from "@/hooks/useLocation";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import Comments from "./sections/Comments";

export default function CrowdInfoScreen() {
  const {id} = useLocalSearchParams();
  const facility = FACILITIES.find(f => f.id === id);

  return (
    <View style={styles.background}>
      {facility ? (
        <View style={styles.container}>
          <Text style={styles.title}>{facility.name}</Text>
          <Text style={styles.crowdInfo}>Crowd level: </Text>
          <Text style={styles.vote}>Vote:</Text>
          <Comments />
          <UseLocation 
            centerCoords={facility.center} 
            edgeCoords={facility.edge}
          />
        </View>
      ) : (
        <Text>Facility not found.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
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
});
