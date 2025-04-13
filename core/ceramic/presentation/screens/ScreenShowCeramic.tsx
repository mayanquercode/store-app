import IconButton from "@/components/Buttons/IconButton";
import IconButtonRouter from "@/components/Buttons/IconButtonRouter";
import useGetCeramic from "@/core/ceramic/infrastructure/hooks/useGetCeramic";
import CeramicInfoItem from "@/core/ceramic/presentation/components/CeramicInfoItem";
import ContainerCeramicInfo from "@/core/ceramic/presentation/components/ContainerCeramicInfo";
import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

const ScreenShowCeramic = () => {
  const { code } = useLocalSearchParams<{ code: string }>();
  const { ceramic } = useGetCeramic(code);

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text style={[styles.name, {fontFamily: 'poppins700'}]}>{ceramic.name}</Text>
        <Text style={styles.code}>{ceramic.code}</Text>

        <ContainerCeramicInfo ceramic={ceramic} />

        <CeramicInfoItem
          iconName={{ materialCommunity: "note-text" }}
          iconSize={17}
          text={`${parseInt(`${ceramic.stock.warehouse * ceramic.box.meterBox}`,10)} cajas`}
        />
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 30,
          right: 20,
          flexDirection: "row",
          gap: 10,
        }}
      >
        <IconButton
          iconName="delete"
          variant="RAISED"
          shape="square"
          type="ATTENTION"
        />
        <IconButtonRouter
          iconName="edit"
          variant="RAISED"
          shape="square"
          pathname="/ceramic/update"
          params={{ ceramic: JSON.stringify(ceramic) }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  name: {
    fontSize: 20,
    fontWeight: "light",
    marginBottom: 5,
  },
  code: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#44475a75",
    marginBottom: 15,
  },
});

export default ScreenShowCeramic;
