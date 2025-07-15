import { Facility } from "@/constants/Facilities";
import {
  getBackgroundColorByCrowdLevel,
  getColorByCrowdLevel
} from "@/utils/colorUtils";
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
  facility: Facility;
  onPress: (id: string) => void;
};

export default function FacilityList({ facility, onPress }: Props) {
  const crowdLevel = facility.description.toLocaleLowerCase();

  return (
    <View style={styles.box}>
      <TouchableOpacity onPress={() => onPress(facility.id)}>
        <Ionicons
          name="chevron-forward"
          size={24}
          color="#a4a4a4a4"
          style={styles.icon}
        />
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
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    padding: 30,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    width: "90%",
    alignSelf: "center",
  },
  icon: {
    position: "absolute",
    top: "30%",
    right: -10,
    zIndex: 999,
  },
  title: {
    fontSize: 22,
    marginBottom: 4,
    letterSpacing: 0.8,
  },
  crowdLevel: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
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
});