import { View, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import IconButtonRouter from "@/components/Buttons/IconButtonRouter";
import RenderListCeramicHome from "@/core/ceramic/presentation/components/RenderListCeramicHome";

const ScreenHomeCeramic = () => {

  return (
    <View style={styles.screen}>
      <RenderListCeramicHome />

      {/* Floating buttons */}
      <View style={styles.bottomBarButton}>
        <IconButtonRouter
          pathname="/ceramic/cloudupload"
          iconName="cloudupload"
          variant="RAISED"
          shape="square"
        />
        <IconButtonRouter
          pathname="/ceramic/inventory"
          icon={<FontAwesome5 name="clipboard-list" />}
          variant="RAISED"
          shape="square"
        />
        <IconButtonRouter
          pathname="/ceramic/new"
          iconName="plus"
          variant="RAISED"
          shape="square"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  bottomBarButton: {
    position: "absolute",
    bottom: 30,
    right: 16,
    flexDirection: "row",
    gap: 5,
  },
});

export default ScreenHomeCeramic;
