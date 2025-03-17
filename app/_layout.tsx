import { Stack } from 'expo-router';
import 'react-native-reanimated';


function RootLayoutApp() {

  return (
    <Stack>
      <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
    </Stack>
  );
}

export default RootLayoutApp