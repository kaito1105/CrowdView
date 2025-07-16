import VoteButtons from "@/components/VoteButtons";
import useFacility from "@/hooks/useFacility";
import {
  getBackgroundColorByCrowdLevel,
  getColorByCrowdLevel
} from "@/utils/colorUtils";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Comments from "./sections/Comments";

export default function CrowdInfoScreen() {
  const facility = useFacility();

  if (!facility) return <Text>Facility not found.</Text>;

  const today = new Date();
  const dayIndex = today.getDay();

  return (
    <View style={styles.background}>
      <ScrollView style={styles.container}>
        <Image source={facility.imagePath} style={styles.image} />
        <View style={styles.context}>
          <Text style={styles.title}>{facility.id}</Text>

          <View style={styles.section}>
            <View>
              <Text style={styles.subtitle}>Crowd Level</Text>
              <View style={[
                styles.crowdLevelBox,
                {
                  backgroundColor: getBackgroundColorByCrowdLevel(
                    facility.description.toLocaleLowerCase()
                  )
                }
              ]}>
                <Text style={[
                  styles.crowdLevelText,
                  {
                    color: getColorByCrowdLevel(
                      facility.description.toLocaleLowerCase()
                    )
                  }
                ]}>
                  {facility.description.toUpperCase()}
                </Text>
              </View>
            </View>
            <View>
              <Text style={styles.subtitle}>Today's Hours</Text>
              {facility.hours[dayIndex].map((item: string, index: number) => (
                <Text key={index} style={styles.hours}>{item}</Text>
              ))}
            </View>
          </View>

          <Text style={styles.subtitle}>Crowd Level Vote</Text>
          <Text style={styles.question}>HOW CROWDED IS IT NOW?</Text>
          <VoteButtons />

          <Comments />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#fff",
    flex: 1,
  },
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    // height: "30%",
    height: 200,
  },
  context: {
    marginHorizontal: 30,
    marginVertical: 20,
  },
  title: {
    fontSize: 22,
    color: "#292929",
    letterSpacing: 0.5,
    marginBottom: 20,
  },
  section: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 14,
    color: "#707070",
    letterSpacing: 0.3,
    marginBottom: 5,
  },
  crowdLevelBox: {
    borderRadius: 5,
    width: 150,
  },
  crowdLevelText: {
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 22,
    letterSpacing: 0.6,
  },
  hours: {
    fontSize: 14,
    color: "#292929",
    paddingRight: 20,
    letterSpacing: 0.3,
  },
  question: {
    fontSize: 14,
    color: "#292929",
    letterSpacing: 0.3,
    marginBottom: 5,
  },
});
