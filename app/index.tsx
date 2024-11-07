import { Text, View } from "react-native";
import { Link } from "expo-router";
import { useLocalSearchParams, useGlobalSearchParams } from "expo-router";
import { useNavigationState } from "@react-navigation/native";

export default function Index() {
  const localParams = useLocalSearchParams();
  const globalParams = useGlobalSearchParams();
  const navigationState = useNavigationState((state) => state);

  return (
    <View
      style={{
        flex: 1,
        gap: 10,
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "600" }}>This is index.</Text>
      <Link
        href={{
          pathname: "/[thing_id]",
          params: {
            thing_id: 331,
          },
        }}
      >
        Link with dynamic path
      </Link>
      <Link
        href={{
          pathname: "/[thing_id]",
          params: {
            thing_id: 332,
            testOtherParam: "fake",
          },
        }}
      >
        Link with dynamic path and param
      </Link>

      <Text>LOCAL PARAMS: {JSON.stringify(localParams)}</Text>
      <Text>GLOBAL PARAMS: {JSON.stringify(globalParams)}</Text>
      <Text>{JSON.stringify(navigationState, null, 2)}</Text>
    </View>
  );
}
