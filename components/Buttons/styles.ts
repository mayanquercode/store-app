import { ViewStyle, Platform } from 'react-native';
import { ButtonVariant, ButtonType, IconSize, ButtonShape } from './types';

export const getButtonSize = (size: IconSize) => 
  size === 'small' ? 36 : size === 'large' ? 48 : 40;

export const getIconSize = (size: IconSize) => 
  size === 'small' ? 16 : size === 'large' ? 24 : 20;

export const getColors = (type: ButtonType) => {
  switch (type) {
    case 'WARNING': return { bg: '#FFC107', border: '#FFA000', icon: '#FFFFFF' };
    case 'POSITIVE': return { bg: '#4CAF50', border: '#388E3C', icon: '#FFFFFF' };
    case 'ATTENTION': return { bg: '#F44336', border: '#D32F2F', icon: '#FFFFFF' };
    case 'PREVIOUS': return { bg: '#9E9E9E', border: '#757575', icon: '#FFFFFF' };
    default: return { bg: '#2196F3', border: '#1976D2', icon: '#FFFFFF' };
  }
};

export const getBorderRadius = (shape: ButtonShape, size: number) => 
  shape === 'circle' ? size / 2 : 8;

export const getBaseStyles = (size: number, borderRadius: number): ViewStyle => ({
  width: size,
  height: size,
  borderRadius,
  alignItems: 'center',
  justifyContent: 'center',
});

export const getVariantStyles = (variant: ButtonVariant, colors: ReturnType<typeof getColors>) => {
  const base = {
    SMOOTH: { backgroundColor: colors.bg },
    GHOST: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: colors.border,
    },
    RAISED: {
      backgroundColor: colors.bg,
      ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
        },
        android: { elevation: 4 },
      }),
    },
  };
  
  return base[variant];
};