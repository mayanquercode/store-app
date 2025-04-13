import { StyleSheet, View } from "react-native";
import React from "react";
import CeramicInfoItem from "./CeramicInfoItem";
import { Ceramic } from "@/core/ceramic/domain/entities";

interface Props {
  ceramic: Ceramic;
}

const ContainerCeramicInfo = ({ ceramic }: Props) => {
  return (
    <View style={styles.boxInfo}>
      <View style={styles.boxInfoLeft}>
        <CeramicInfoItem
          iconName={{ fontAwesome5: "box" }}
          text={`${ceramic.box.meterBox}m²`}
        />

        <CeramicInfoItem
          iconName={{ materialCommunity: "grid" }}
          text={`${ceramic.box.meterPiece}m²`}
        />

        <CeramicInfoItem
          iconName={{ material: "numbers" }}
          text={`${ceramic.box.numPieces} Piezas`}
        />

        <CeramicInfoItem
          iconName={{ materialCommunity: "grid" }}
          text={ceramic.box.format}
        />
      </View>

      <View style={styles.boxInfoRight}>
        <CeramicInfoItem
          iconName={{ materialCommunity: "store" }}
          iconSize={17}
          text={`${ceramic.stock.warehouse}m² en bodega`}
        />

        <CeramicInfoItem
          iconName={{ materialCommunity: "store-clock" }}
          iconSize={17}
          text={`${ceramic.stock.pending}m² por entregar`}
        />

        <CeramicInfoItem
          iconName={{ materialCommunity: "store-alert" }}
          iconSize={17}
          text={`${ceramic.stock.pending}m² recuperable`}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boxInfo: {
    flexDirection: "row",
    marginBottom: 15,
  },
  boxInfoLeft: {
    flex: 1,
  },
  boxInfoRight: {
    flex: 1,
  },
  boxInfoTextContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginBottom: 10,
  },
  boxInfoText: {
    fontSize: 13,
  },
});

export default ContainerCeramicInfo;
