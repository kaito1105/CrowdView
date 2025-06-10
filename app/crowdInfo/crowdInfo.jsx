import { Text, View } from "react-native";
import { FACILITIES } from "../../constants/Facilities";

export default function crowdInfoScreen() {
  return (
    <View>
      {FACILITIES.map(facility => (
        <Text key={facility.id}>{facility.name}</Text>
      ))}
    </View>
  );
}
