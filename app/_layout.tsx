import { Stack } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { useState } from "react";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function RootLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View
        style={{
          width: isSidebarOpen ? 200 : undefined,
          backgroundColor: "red",
        }}
      >
        <Text>Sidebar</Text>
        <Pressable onPress={() => setIsSidebarOpen(!isSidebarOpen)}>
          <Text>Toggle</Text>
        </Pressable>
      </View>
      <View style={{ flex: 1 }}>
        <Stack screenOptions={{ headerShown: false }} />
      </View>
    </View>
  );
}
