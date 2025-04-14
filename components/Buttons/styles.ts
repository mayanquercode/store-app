// styles.ts
import { ViewStyle, Platform } from "react-native";
import { ButtonVariant, ButtonType, IconSize, ButtonShape } from "./types";
import useThemeColors from "@/hooks/useThemeColors";

export const getButtonSize = (size: IconSize) =>
  size === "small" ? 36 : size === "large" ? 48 : 40;

export const getIconSize = (size: IconSize) =>
  size === "small" ? 16 : size === "large" ? 24 : 20;

export const getColors = (type: ButtonType) => {
  const theme = useThemeColors();

  switch (type) {
    case "WARNING":
      return theme.buttons.warning;
    case "POSITIVE":
      return theme.buttons.positive;
    case "ATTENTION":
      return theme.buttons.attention;
    case "PREVIOUS":
      return theme.buttons.previous;
    default:
      return theme.buttons.default;
  }
};

export const getBorderRadius = (shape: ButtonShape, size: number) =>
  shape === "circle" ? size / 2 : 8;

export const getBaseStyles = (
  size: number,
  borderRadius: number
): ViewStyle => ({
  width: size,
  height: size,
  borderRadius,
  alignItems: "center",
  justifyContent: "center",
});

export const getVariantStyles = (
  variant: ButtonVariant,
  colors: ReturnType<typeof getColors>
) => {
  const theme = useThemeColors();

  const base = {
    SMOOTH: { backgroundColor: colors.bg },
    GHOST: {
      backgroundColor: "transparent",
      borderWidth: 1,
      borderColor: colors.border,
    },
    RAISED: {
      backgroundColor: colors.bg,
      ...Platform.select({
        ios: {
          shadowColor: theme.shadows.ios.color,
          shadowOffset: theme.shadows.ios.offset,
          shadowOpacity: theme.shadows.ios.opacity,
          shadowRadius: theme.shadows.ios.radius,
        },
        android: { elevation: 4 },
      }),
    },
  };

  return base[variant];
};
