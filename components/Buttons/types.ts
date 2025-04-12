import { TouchableOpacityProps, ViewStyle } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { ValidRoutes } from "@/types";

export type ButtonVariant = "SMOOTH" | "GHOST" | "RAISED";
export type ButtonType =
  | "DEFAULT"
  | "WARNING"
  | "POSITIVE"
  | "ATTENTION"
  | "PREVIOUS";
export type ButtonShape = "circle" | "square";
export type IconSize = "small" | "medium" | "large";

export type IconButtonBaseProps = {
  icon?: React.ReactElement;
  iconName?: keyof typeof AntDesign.glyphMap;
  variant?: ButtonVariant;
  type?: ButtonType;
  size?: IconSize;
  shape?: ButtonShape;
  borderRadius?: number;
  style?: ViewStyle;
};

export type IconButtonProps = IconButtonBaseProps & TouchableOpacityProps;

export type IconButtonRouterProps = IconButtonBaseProps & {
  pathname?: ValidRoutes;
  params?: Record<string, string>;
  onPress?: () => void;
} & Omit<TouchableOpacityProps, "onPress">;
