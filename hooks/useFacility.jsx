import { FACILITIES } from "@/constants/Facilities";
import { useLocalSearchParams } from "expo-router";

export default function useFacility() {
  const { id } = useLocalSearchParams();
  const facility = FACILITIES.find(f => f.id === id);

  if (!facility) {
    return null;
  }
  return facility;
}
