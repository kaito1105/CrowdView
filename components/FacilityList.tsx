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
  const crowdLevel = facility.level.toLocaleLowerCase();
  const handleDetailPress = () => onPress(facility.id);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleDetailPress}>
        <Ionicons
          name="chevron-forward"
          size={24}
          color="#a4a4a4a4"
          style={styles.icon}
        />
        <Text style={styles.title}>{facility.id}</Text>
        <View style={styles.crowdLevel}>
          <Text style={styles.subtitle}>Crowd Level: </Text>
          <View style={[
            styles.statusBox,
            { backgroundColor: getBackgroundColorByCrowdLevel(crowdLevel) }
          ]}>
            <Text style={[
              styles.colorText,
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
  container: {
    padding: 30,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderColor: "#cccccc",
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
    color: "#292929",
    marginBottom: 4,
    letterSpacing: 0.8,
  },
  crowdLevel: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
  },
  subtitle: {
    fontSize: 16,
    color: "#707070",
    letterSpacing: 0.6,
  },
  statusBox: {
    borderRadius: 3,
    width: 110,
    marginHorizontal: 5,
  },
  colorText: {
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 3,
    fontSize: 16,
    letterSpacing: 0.6,
  },
});