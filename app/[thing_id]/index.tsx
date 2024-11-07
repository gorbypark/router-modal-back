import { Text, ScrollView, View } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";

export default function Index() {
  const { thing_id } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, gap: 40 }}>
      <Text>This is index for id: {thing_id}</Text>
      <Link
        href={{
          pathname: "/[thing_id]/other",
          params: {
            thing_id: thing_id as string,
          },
        }}
      >
        Other
      </Link>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Link
        href={{
          pathname: "/[thing_id]/other",
          params: {
            thing_id: thing_id as string,
          },
        }}
      >
        Other
      </Link>
    </View>
  );
}
