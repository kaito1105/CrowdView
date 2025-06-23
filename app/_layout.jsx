import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#007bff",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: "bold"
        },
      }}>
      <Stack.Screen name="index" options={{title: ""}} />
      <Stack.Screen name="tabs" options={{headerShown: false, title: ""}} />
      <Stack.Screen name="crowdInfo/[id]" options={{title: ""}} />
    </Stack>
  );
}
