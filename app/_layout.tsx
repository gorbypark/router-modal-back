import { Stack } from "expo-router";

// This will cause index to load under [jornadas_id]/index if it is directly linked to
// aka this will make sure there's always a "back" to go to even when technically there's
// not anything to go back to.  It does weird things with the url but works...could also
// use a "back href" prop to manually set the "close" behaviour.
export const unstable_settings = {
  initialRouteName: "index",
};

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="thing/[thing_id]/index"
        options={{
          presentation: "transparentModal",
          animation: "fade",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="other/[other_id]/[name]"
        options={{
          presentation: "transparentModal",
          animation: "fade",
          headerShown: false,
        }}
      />
    </Stack>
  );
}
