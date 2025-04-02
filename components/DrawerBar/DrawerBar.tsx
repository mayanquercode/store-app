import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Asegúrate de tener instalado @expo/vector-icons
import Constants from "expo-constants";
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";

interface Props {
  title?: string;
}

const DrawerBar = ({ title }: Props) => {
  const navigation = useNavigation();

  const onToggle = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View style={[styles.container, { top: Constants.statusBarHeight }]}>
      <TouchableOpacity style={styles.menuButton} onPress={onToggle}>
        <Ionicons name="menu" size={28} color="#333" />
      </TouchableOpacity>
      <Text style={styles.title}>{title ? title : "Mi Aplicación"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    backgroundColor: "#FFF",
    position: "absolute",
    left: 0,
    zIndex: 100,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Para Android
  },
  menuButton: {
    marginRight: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
});

export default DrawerBar;
