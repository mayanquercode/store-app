import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, StyleSheet, ViewStyle, Platform } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

type ButtonVariant = 'SMOOTH' | 'GHOST' | 'RAISED';
type ButtonType = 'DEFAULT' | 'WARNING' | 'POSITIVE' | 'ATTENTION' | 'PREVIOUS';
type ButtonShape = 'circle' | 'square'; // Nueva prop para la forma

type IconButtonProps = {
  iconName: keyof typeof AntDesign.glyphMap;
  variant?: ButtonVariant;
  type?: ButtonType;
  size?: 'small' | 'medium' | 'large';
  shape?: ButtonShape; // Prop para elegir la forma
  borderRadius?: number; // Opcional para personalizar el border radius en forma cuadrada
  style?: ViewStyle;
} & TouchableOpacityProps;

const IconButton: React.FC<IconButtonProps> = ({
  iconName,
  variant = 'SMOOTH',
  type = 'DEFAULT',
  size = 'medium',
  shape = 'circle', // Valor por defecto: circular
  borderRadius = 8, // Valor por defecto para forma cuadrada
  style,
  ...props
}) => {
  // Tamaños base
  const iconSize = size === 'small' ? 16 : size === 'large' ? 24 : 20;
  const buttonSize = size === 'small' ? 36 : size === 'large' ? 48 : 40;

  // Colores según el tipo
  const getColors = () => {
    switch (type) {
      case 'WARNING':
        return { bg: '#FFC107', border: '#FFA000', icon: '#FFFFFF' };
      case 'POSITIVE':
        return { bg: '#4CAF50', border: '#388E3C', icon: '#FFFFFF' };
      case 'ATTENTION':
        return { bg: '#F44336', border: '#D32F2F', icon: '#FFFFFF' };
      case 'PREVIOUS':
        return { bg: '#9E9E9E', border: '#757575', icon: '#FFFFFF' };
      default:
        return { bg: '#2196F3', border: '#1976D2', icon: '#FFFFFF' };
    }
  };

  const colors = getColors();

  // Determinar el borderRadius según la forma
  const getBorderRadius = () => {
    return shape === 'circle' ? buttonSize / 2 : borderRadius;
  };

  // Estilos base
  const baseStyles = {
    width: buttonSize,
    height: buttonSize,
    borderRadius: getBorderRadius(),
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle;

  // Estilos para cada variante
  const variantStyles = {
    SMOOTH: {
      backgroundColor: colors.bg,
    },
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
        android: {
          elevation: 4,
        },
      }),
    },
  };

  return (
    <TouchableOpacity
      style={[baseStyles, variantStyles[variant], style]}
      activeOpacity={0.7}
      {...props}
    >
      <AntDesign 
        name={iconName} 
        size={iconSize} 
        color={variant === 'GHOST' ? colors.border : colors.icon} 
      />
    </TouchableOpacity>
  );
};

export default IconButton;