import Header from "@/components/Header";
import { Stack } from "expo-router";

export default function MapLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          header: () => <Header hasBack={false} title="Map" />
        }}
      />
    </Stack>
  );
}