import type { Facility } from "@/constants/Facilities";
import { FACILITIES } from "@/constants/Facilities";
import { useLocalSearchParams } from "expo-router";

export default function useFacility(): Facility | null {
  const { id } = useLocalSearchParams<{ id: string }>();
  const facility = FACILITIES.find(f => f.id === id);

  return facility ?? null;
}
