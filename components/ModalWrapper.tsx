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
  closeHref?: Href;

  /**
   * Determines if the white background content box should be shown.
   * Good for showing a spinner on top of backdrop but without any content box.
   * @type {boolean}
   * @default true
   */
  shouldShowContentBackground?: boolean;
}

export const ModalWrapper = ({
  closeHref,
  children,
  shouldShowContentBackground = true,
}: ModalWrapperProps) => {
  const navigation = useNavigation();
  const router = useRouter();

  useFocusEffect(
    useCallback(() => {
      navigation.setOptions({
        presentation: "transparentModal",
        animation: "fade",
        headerShown: false,
      });
    }, [])
  );

  const handleClose = () => {
    if (closeHref) {
      router.push(closeHref);
    } else {
      router.back();
    }
  };

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
      {shouldShowContentBackground ? (
        <Animated.View
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
        </Animated.View>
      ) : (
        children
      )}
    </Animated.View>
  );
};
