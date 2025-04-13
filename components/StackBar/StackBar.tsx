import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import { useNavigation } from "expo-router";
import IconButton from "../Buttons/IconButton";
import Text from "../Text/Text";

interface Props {
  title?: string;
}

const StackBar = ({ title }: Props) => {
  const navigation = useNavigation();

  const onGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={[styles.container, { top: Constants.statusBarHeight }]}>
      <IconButton  iconName="arrowleft" type="PREVIOUS" onPress={onGoBack} />
      <Text style={styles.title} size="2xl" weight="700" color="#3d3d3d">{title ? title : "Mi Aplicación"}</Text>
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
    elevation: 5,
  },
  title: {
    marginLeft: 10,
  },
});

export default StackBar;
