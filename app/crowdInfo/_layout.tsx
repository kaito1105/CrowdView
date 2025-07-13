import Header from "@/components/Header";
import useFacility from "@/hooks/useFacility";
import { Stack } from "expo-router";

export default function CrowdInfoLayout() {
  const facility = useFacility();

  return (
    <Stack>
      <Stack.Screen
        name="[id]"
        options={{
          header: () => 
            <Header hasBack={true} title={facility?.id ?? "Crowd Info"} />
        }}
      />
    </Stack>
  );
}