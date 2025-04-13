import Icon from "@/components/Icon/Icon";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

type CeramicInfoItemProps = {
  iconName: React.ComponentProps<typeof Icon>["name"];
  text: string;
  iconSize?: number;
  iconColor?: string;
  textStyle?: object;
  containerStyle?: object;
};

const CeramicInfoItem: React.FC<CeramicInfoItemProps> = ({
  iconName,
  text,
  iconSize = 14,
  iconColor = "#2d2d2d",
  textStyle = {},
  containerStyle = {},
}) => {
  return (
    <View style={[styles.boxInfoTextContent, containerStyle]}>
      <Icon name={iconName} size={iconSize} color={iconColor} />
      <Text style={[styles.boxInfoText, textStyle]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  boxInfoTextContent: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  boxInfoText: {
    marginLeft: 8,
    fontSize: 14,
    color: "#2d2d2d",
  },
});

export default CeramicInfoItem;
