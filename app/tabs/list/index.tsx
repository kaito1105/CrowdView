import FacilityList from "@/components/FacilityList";
import { FACILITIES, Facility } from "@/constants/Facilities";
import { useRouter } from "expo-router";
import { FlatList, ListRenderItem, StyleSheet } from "react-native";

export default function ListScreen() {
  const router = useRouter();
  const handleDetailPress = (id: string) => router.push(`/crowdInfo/${id}`);

  const renderItem: ListRenderItem<Facility> = ({ item }) => (
    <FacilityList facility={item} onPress={handleDetailPress} />
  );

  return (
    <FlatList
      style={styles.container}
      data={FACILITIES}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});