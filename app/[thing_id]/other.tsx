import { Text, View } from "react-native";
import { useGlobalSearchParams } from "expo-router";

export default function Index() {
  const { thing_id } = useGlobalSearchParams();

  return (
    <View style={{ gap: 10 }}>
      <Text>This is other for thing_id: {thing_id}</Text>
    </View>
  );
}
