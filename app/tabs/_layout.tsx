import { IconSymbol } from '@/components/ui/IconSymbol';
import { Tabs } from 'expo-router';

export default function TabLayout() {

  return (
    <Tabs 
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#33bff4",
      }}>
      <Tabs.Screen
        name="map"
        options={{
          title: 'Map',
          tabBarIcon: ({ color }) => 
            <IconSymbol size={28} name="pin" color={color} />
        }}
      />
      <Tabs.Screen
        name="list"
        options={{
          title: 'List',
          tabBarIcon: ({ color }) => 
            <IconSymbol size={32} name="menucard" color={color} />
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => 
            <IconSymbol size={28} name="gear" color={color} />
        }}
      />
    </Tabs>
  );
}
