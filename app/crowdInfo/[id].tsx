import VoteButtons from "@/components/VoteButtons";
import useFacility from "@/hooks/useFacility";
import {
  getBackgroundColorByCrowdLevel,
  getColorByCrowdLevel
} from "@/utils/colorUtils";
import { FontAwesome } from '@expo/vector-icons';
import {
  Alert,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Comments from "./sections/Comments";

export default function CrowdInfoScreen() {
  const facility = useFacility();

  if (!facility) return <Text>Facility not found.</Text>;

  const today = new Date();
  const dayIndex = today.getDay();

  const handlePress = () => {
    Alert.alert("Business hours may differ from the usual schedule.");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
      // keyboardVerticalOffset={Platform.OS === "ios" ? 20 : 100}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.background}>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
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
                  <View style={styles.header}>
                    <Text style={styles.subtitle}>Today's Hours</Text>
                    <TouchableOpacity onPress={handlePress}>
                      <FontAwesome
                        name="exclamation-circle"
                        size={18} color="#aaa"
                        style={styles.icon}
                      />
                    </TouchableOpacity>
                  </View>
                  {facility.hours[dayIndex].map((
                    item: string, index: number) => (
                    <Text key={index} style={styles.hours}>{item}</Text>
                  ))}
                </View>
              </View>

              <View style={styles.header}>
                <Text style={styles.subtitle}>Crowd Level Vote</Text>
                <TouchableOpacity onPress={handlePress}>
                  <FontAwesome
                    name="exclamation-circle"
                    size={18}
                    color="#aaa" style={styles.icon}
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.question}>HOW CROWDED IS IT NOW?</Text>
              <VoteButtons />

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
  },
  image: {
    width: "100%",
    height: 200,
  },
  context: {
    flex: 1,
    marginHorizontal: 30,
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    color: "#292929",
    letterSpacing: 0.5,
    marginBottom: 20,
  },
  section: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  header: {
    flexDirection: "row",
    alignContent: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#707070",
    letterSpacing: 0.3,
    marginBottom: 5,
  },
  icon: {
    paddingHorizontal: 5,
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
