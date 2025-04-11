import DrawerBar from "@/components/DrawerBar/DrawerBar";
import IconButton from "@/components/IconButton/IconButton";
import useListCeramic from "@/core/ceramic/infrastructure/hooks/useListCeramic";
import LayoutScreen from "@/layouts/LayoutScreen";
import CeramicCardHome from "@/ui/ceramic/CeramicCardHome";
import { useRouter } from "expo-router";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const StackIndex = () => {
  // Hooks
  const router = useRouter();
  const { ceramics } = useListCeramic();

  const handleNavigationPage = () => {
    router.push("/ceramic/new");
  };

  const handleNavigationPageCloudupload = () => {
    router.push("/ceramic/cloudupload");
  }

  return (
    <LayoutScreen>
      <DrawerBar title="Ceramica" />
      <ScrollView style={styles.container}>
        {ceramics.map((item, index) => (
          <View
            key={item.code}
            style={{ backgroundColor: index % 2 === 0 ? "#ffffff" : "#f1f5f9" }}
          >
            <CeramicCardHome ceramic={item} />
          </View>
        ))}
      </ScrollView>
      <View
        style={{
          position: "absolute",
          bottom: 30,
          right: 20,
        }}
      >
        <IconButton
          onPress={handleNavigationPage}
          iconName="plus"
          variant="RAISED"
          shape="square"
        />
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 30,
          right: 70,
        }}
      >
        <IconButton
          onPress={handleNavigationPageCloudupload}
          iconName="cloudupload"
          variant="RAISED"
          shape="square"
        />
      </View>
    </LayoutScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
