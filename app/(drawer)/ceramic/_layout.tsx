import { Stack } from "expo-router";

export default function CeramicStackLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="new" />
      <Stack.Screen name="cloudupload" />
      <Stack.Screen name="show" />
      <Stack.Screen name="update" />
    </Stack>
  );
}