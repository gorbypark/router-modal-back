import { Pressable, Text, Platform, StyleSheet } from "react-native";
import { PropsWithChildren, useCallback } from "react";
import { useFocusEffect, useNavigation, useRouter, Href } from "expo-router";
import Animated, { FadeIn, SlideInDown } from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";

interface ModalWrapperProps extends PropsWithChildren {
  /**
   * Route to navigate to when the modal is closed.
   * If provided, clicking the close button will navigate to this route,
   * otherwise router.back() will be used.
   * @type {Href}
   */
  closeHref?: Href<"/" | { pathname: "/"; params?: object }>;
}

export const ModalWrapper = ({ closeHref, children }: ModalWrapperProps) => {
  const navigation = useNavigation();
  const router = useRouter();

  // This sets the screen to transparentModal on focus only on web.
  useFocusEffect(
    useCallback(() => {
      if (Platform.OS === "web") {
        navigation.setOptions({
          presentation: "transparentModal",
        });
      }
    }, [])
  );

  const handleClose = () => {
    if (closeHref) {
      router.push(closeHref);
    } else {
      router.back();
    }
  };

  // Early return children if we aren't on web so it's just a normal screen on native
  if (Platform.OS !== "web") {
    return children;
  }

  return (
    <Animated.View
      entering={FadeIn}
      style={[
        StyleSheet.absoluteFill,
        {
          backgroundColor: "#00000040",
        },
      ]}
    >
      <Pressable
        style={{ position: "absolute", right: 20, top: 20 }}
        onPress={handleClose}
      >
        <Ionicons name="close" color="white" size={50} />
      </Pressable>
      <Animated.ScrollView
        entering={SlideInDown}
        style={{
          flex: 1,
          margin: 80,
          backgroundColor: "white",
          borderRadius: 20,
          padding: 20,
        }}
      >
        {children}
      </Animated.ScrollView>
    </Animated.View>
  );
};
