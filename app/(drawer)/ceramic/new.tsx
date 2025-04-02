import Button from "@/components/Button/Button";
import IconButton from "@/components/IconButton/IconButton";
import StackBar from "@/components/StackBar/StackBar";
import LayoutScreen from "@/layouts/LayoutScreen";
import { AntDesign } from "@expo/vector-icons";
import Drawer from "expo-router/drawer";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const StackNew = () => {
  return (
    <LayoutScreen>
      <StackBar title="Nueva Ceramica" /> 
      <View style={styles.container}>
        <Text style={styles.title}>Drawer</Text>
      </View>
    </LayoutScreen>
  );
};

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
  row: {
    flexDirection: "row",
    marginBottom: 20,
  },
  spacing: {
    marginLeft: 10,
  },
});

export default StackNew;
