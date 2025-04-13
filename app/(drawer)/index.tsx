import DrawerBar from "@/components/DrawerBar/DrawerBar";
import Text from "@/components/Text/Text";
import LayoutScreen from "@/layouts/LayoutScreen";
import { View } from "react-native";
import { StyleSheet } from "react-native";

export default function TabHomeScreen() {
  return (
    <LayoutScreen>
      <DrawerBar title="Inicio" />
      <View style={styles.container}>
        <Text size="2xl" weight="600">
          Drawer Home Screen
        </Text>
      </View>
    </LayoutScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
