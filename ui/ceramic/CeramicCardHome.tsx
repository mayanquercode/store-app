import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ceramic } from "@/core/ceramic/domain/entities";
import {
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useRouter } from "expo-router";

interface Props {
  ceramic: Ceramic;
}

const CeramicCardHome = ({ ceramic }: Props) => {

  // Hooks
    const router = useRouter();
  
    const handleNavigationCeramic = () => {
      router.push({
        pathname: "/ceramic/show",
        params: { code: ceramic.code },
      });
    };
    

  const boxInfo =
    ceramic.box.format.trim() === ""
      ? `${ceramic.box.meterBox}m²`
      : `${ceramic.box.format} | ${ceramic.box.meterBox}m²`;

  return (
    <Pressable style={styles.card} onLongPress={handleNavigationCeramic}>
      <View style={[styles.cardSection, { justifyContent: "space-between" }]}>
        <Text style={styles.cardCode}>{ceramic.code}</Text>
        <Text>{ceramic.stock.warehouse}m²</Text>
      </View>
      <View style={styles.cardSection}>
        <Text>{ceramic.name}</Text>
      </View>
      <View style={styles.cardSectionIcons}>
        <View style={styles.cardSectionIcon}>
          <FontAwesome5 name="box" size={14} color={"#2d2d2d"} />
          <Text style={styles.cardTextIcon}>{boxInfo}</Text>
        </View>
        <View style={styles.cardSectionIcon}>
          <MaterialCommunityIcons name="grid" size={14} color={"#2d2d2d"} />
          <Text style={styles.cardTextIcon}>{ceramic.box.meterPiece}m²</Text>
        </View>
        <View style={styles.cardSectionIcon}>
          <MaterialIcons name="numbers" size={14} color={"#2d2d2d"} />
          <Text style={styles.cardTextIcon}>{ceramic.box.numPieces}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
  },
  cardSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  cardSectionIcons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardCode: {
    fontSize: 12,
    fontWeight: "bold",
  },
  cardSectionIcon: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 4,
  },
  cardTextIcon: {
    fontSize: 13,
  },
});

export default CeramicCardHome;
