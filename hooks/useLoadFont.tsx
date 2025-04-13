// hooks/useLoadFont.ts
import { useCallback, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import * as poppins from "@expo-google-fonts/poppins";

type FontConfig = {
  [key: string]: any;
};

const DEFAULT_FONTS: FontConfig = {
  poppins100: poppins.Poppins_100Thin,
  poppins200: poppins.Poppins_200ExtraLight,
  poppins300: poppins.Poppins_300Light,
  poppins400: poppins.Poppins_400Regular,
  poppins500: poppins.Poppins_500Medium,
  poppins600: poppins.Poppins_600SemiBold,
  poppins700: poppins.Poppins_700Bold,
  poppins800: poppins.Poppins_800ExtraBold,
  poppins900: poppins.Poppins_900Black,
};

export default function useLoadFont() {
  const [fonts] = useFonts(DEFAULT_FONTS);

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fonts) {
      await SplashScreen.hideAsync();
    }
  }, [fonts]);

  return { fonts, onLayoutRootView };
}
