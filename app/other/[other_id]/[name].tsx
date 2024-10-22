import { Text, View, Pressable } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";

export default function Index() {
  const router = useRouter();
  const { other_id, name } = useLocalSearchParams();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          width: 400,
          height: 250,
          borderRadius: 20,
          padding: 20,
        }}
      >
        <Text>
          This is other modal for id: {other_id} and name: {name}
        </Text>
        <Pressable onPress={() => router.back()}>
          <Text>back</Text>
        </Pressable>
      </View>
    </View>
  );
}
