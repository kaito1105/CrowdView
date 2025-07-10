import useFacility from "@/hooks/useFacility";
import { StyleSheet, Text, View } from "react-native";
import Comments from "./sections/Comments";

export default function CrowdInfoScreen() {
  const facility = useFacility();

  return (
    <View style={styles.background}>
      {facility ? (
        <View style={styles.container}>
          <Text style={styles.crowdInfo}>Crowd level: </Text>
          <Text style={styles.vote}>Vote:</Text>
          <Comments />
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
  crowdInfo: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  vote: {
    fontWeight: "bold",
    marginBottom: 10,
  },
});
