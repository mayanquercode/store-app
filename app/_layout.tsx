import { Stack } from "expo-router";
import "react-native-reanimated";
import { useFonts } from "expo-font";
import { Poppins_900Black } from "@expo-google-fonts/poppins";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import useLoadFont from "@/hooks/useLoadFont";

function RootLayoutApp() {
  const { fonts, onLayoutRootView } = useLoadFont();

  if (!fonts) return null;

  return (
    <GestureHandlerRootView onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
      </Stack>
    </GestureHandlerRootView>
  );
}

export default RootLayoutApp;
