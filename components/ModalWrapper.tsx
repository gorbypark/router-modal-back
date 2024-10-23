import { Pressable, StyleSheet } from "react-native";
import { PropsWithChildren, useCallback } from "react";
import { useFocusEffect, useNavigation, useRouter, Href } from "expo-router";
import Animated, { FadeIn, SlideInDown } from "react-native-reanimated";

interface ModalWrapperProps extends PropsWithChildren {
  /**
   * Route to navigate to when the modal is closed. If provided, clicking outside the modal
   * will navigate to this route, otherwise router.back() will be used
   */
  backdropHref?: Href;
}

export const ModalWrapper = ({ backdropHref, children }: ModalWrapperProps) => {
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

  const handleBackdropPress = () => {
    if (backdropHref) {
      router.push(backdropHref);
    } else {
      router.back();
    }
  };

  return (
    <Animated.View
      entering={FadeIn}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#00000040",
      }}
    >
      <Pressable
        style={StyleSheet.absoluteFill}
        onPress={() => handleBackdropPress()}
      />
      <Animated.View
        entering={SlideInDown}
        style={{
          minHeight: 300,
          width: 500,
          backgroundColor: "white",
          borderRadius: 20,
          padding: 20,
        }}
      >
        {children}
      </Animated.View>
    </Animated.View>
  );
};
