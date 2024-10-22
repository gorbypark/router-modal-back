import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "600" }}>This is index.</Text>
      <Link href="/thing/333">Thing modal route</Link>
      <Link href="/other/333/expo">
        Other modal route with two dynamic paths
      </Link>
    </View>
  );
}
