import IconButton from "@/components/Buttons/IconButton";
import IconButtonRouter from "@/components/Buttons/IconButtonRouter";
import StackBar from "@/components/StackBar/StackBar";
import useGetCeramic from "@/core/ceramic/infrastructure/hooks/useGetCeramic";
import LayoutScreen from "@/layouts/LayoutScreen";
import CeramicInfoItem from "@/ui/ceramic/CeramicInfoItem";
import ContainerCeramicInfo from "@/ui/ceramic/ContainerCeramicInfo";
import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

const StackShow = () => {
  const { code } = useLocalSearchParams<{ code: string }>();
  const { ceramic } = useGetCeramic(code);

  return (
    <LayoutScreen>
      <StackBar title="Info Cerámica" />
      <View style={styles.container}>
        <Text style={styles.name}>{ceramic.name}</Text>
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
    </LayoutScreen>
  );
};

const styles = StyleSheet.create({
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

export default StackShow;
