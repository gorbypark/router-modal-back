import { Text, Pressable, View, ActivityIndicator } from "react-native";
import { useRouter, useLocalSearchParams, useNavigation } from "expo-router";
import { useNavigation as useRNNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";

import { ModalWrapper } from "@/components/ModalWrapper";

export default function Index() {
  const router = useRouter();
  const navigation = useNavigation();
  const rnNavigation = useRNNavigation();

  const { thing_id } = useLocalSearchParams();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <ModalWrapper shouldShowContentBackground={!isLoading}>
      {isLoading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <View style={{ gap: 10 }}>
          <Text>This is a modal for id: {thing_id}</Text>
          <Text>If you use the links below, they will work as intended.</Text>
          <Text>
            If you refresh the page while this modal is open, then use the
            links, you will see router.back() et al takes you back to the index
            page, but appends ?thing_id=xxx to the url
          </Text>
          <View style={{ gap: 10, marginTop: 10 }}>
            <Pressable onPress={() => router.back()}>
              <Text>Back (router.back() useRouter from expo-router)</Text>
            </Pressable>
            <Pressable onPress={() => navigation.goBack()}>
              <Text>
                Back (navigation.goBack() useNavigation from expo-router)
              </Text>
            </Pressable>
            <Pressable onPress={() => rnNavigation.goBack()}>
              <Text>
                Back (navigation.goBack() useNavigation from react-navigation)
              </Text>
            </Pressable>
          </View>
        </View>
      )}
    </ModalWrapper>
  );
}
