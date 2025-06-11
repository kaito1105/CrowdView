import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { FACILITIES } from "../../constants/Facilities";

export default function CrowdInfoScreen() {
  const {id} = useLocalSearchParams();
  const facility = FACILITIES.find(f => f.id.toString() === id);

  return (
    <View style={styles.container}>
      {facility ? (
        <View>
          <Text style={styles.title}>{facility.name}</Text>
          <Text style={styles.crowdInfo}>Crowd info: </Text>
          <Text style={styles.vote}>Vote</Text>
          <Text style={styles.comment}>Comment</Text>
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
  }
});
