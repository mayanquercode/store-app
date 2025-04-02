import Button from "@/components/Button/Button";
import IconButton from "@/components/IconButton/IconButton";
import LayoutScreen from "@/layouts/LayoutScreen";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation, useRouter } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const StackIndex = () => {

  const router = useRouter()

  const handleNavigationPage = () =>{
    router.push('/ceramic/new')
  }

  return (
    <LayoutScreen>
      <View style={styles.container}>
        <Text style={styles.title}>Drawer</Text>
        <View style={{
          position: 'absolute',
          bottom: 30,
          right: 20
        }}>
          <IconButton onPress={handleNavigationPage} iconName="plus"  variant="RAISED" shape="square" />
        </View>
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

export default StackIndex;
