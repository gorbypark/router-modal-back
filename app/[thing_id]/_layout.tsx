import { Stack } from "expo-router";
import { ModalWrapper } from "@/components/ModalWrapper";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function RootLayout() {
  return (
    <ModalWrapper>
      <Stack screenOptions={{ headerShown: false }} />
    </ModalWrapper>
  );
}
