import useFacility from "@/hooks/useFacility";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View
} from "react-native";
import BusinessHours from "./sections/BusinessHours";
import Comments from "./sections/Comments";
import CrowdLevelCard from "./sections/CrowdLevelCard";
import FacilityImage from "./sections/FacilityImage";
import FacilityTitle from "./sections/FacilityTitle";
import Graph from "./sections/Graph";
import Vote from "./sections/Vote";

export default function CrowdInfoScreen() {
  const facility = useFacility();
  if (!facility) return <Text>Facility not found.</Text>;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    // keyboardVerticalOffset={Platform.OS === "ios" ? 20 : 0}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.background}>
          <ScrollView
            style={{ flex: 1 }}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            <FacilityImage imagePath={facility.imagePath} />
            <View style={styles.container}>
              <FacilityTitle id={facility.id} />
              <View style={styles.section}>
                <CrowdLevelCard level={facility.level} />
                <BusinessHours
                  hours={facility.hours}
                  dayIndex={new Date().getDay()}
                />
              </View>
              <Vote />
              <Graph />
              <Comments />
            </View>
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#fff",
    flex: 1,
  },
  container: {
    flex: 1,
    marginHorizontal: 30,
    marginVertical: 20,
  },
  section: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
});
