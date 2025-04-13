import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text, StyleSheet, ViewStyle, TextStyle, Platform } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

// Tipos para los diferentes estilos de botón
type ButtonVariant = 'SMOOTH' | 'GHOST' | 'RAISED';
type ButtonType = 'DEFAULT' | 'WARNING' | 'POSITIVE' | 'ATTENTION' | 'PREVIOUS';

type IconButtonProps = {
  iconName?: keyof typeof AntDesign.glyphMap;
  text?: string;
  variant?: ButtonVariant;
  type?: ButtonType;
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
} & TouchableOpacityProps;

const Button: React.FC<IconButtonProps> = ({
  iconName,
  text,
  variant = 'SMOOTH',
  type = 'DEFAULT',
  size = 'medium',
  fullWidth = false,
  style,
  textStyle,
  ...props
}) => {
  // Estilos base
  const baseStyles = {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: size === 'small' ? 8 : size === 'large' ? 16 : 12,
    paddingHorizontal: size === 'small' ? 12 : size === 'large' ? 24 : 16,
    width: fullWidth ? '100%' : undefined,
  } as ViewStyle;

  // Estilos para cada variante
  const variantStyles = {
    SMOOTH: {
      backgroundColor: getBackgroundColor(type),
    },
    GHOST: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: getBorderColor(type),
    },
    RAISED: {
      backgroundColor: getBackgroundColor(type),
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

  // Colores según el tipo
  function getBackgroundColor(btnType: ButtonType): string {
    switch (btnType) {
      case 'WARNING': return '#FFC107';
      case 'POSITIVE': return '#4CAF50';
      case 'ATTENTION': return '#F44336';
      case 'PREVIOUS': return '#9E9E9E';
      default: return '#2196F3';
    }
  }

  function getBorderColor(btnType: ButtonType): string {
    switch (btnType) {
      case 'WARNING': return '#FFA000';
      case 'POSITIVE': return '#388E3C';
      case 'ATTENTION': return '#D32F2F';
      case 'PREVIOUS': return '#757575';
      default: return '#1976D2';
    }
  }

  function getTextColor(btnType: ButtonType, variant: ButtonVariant): string {
    if (variant === 'GHOST') {
      switch (btnType) {
        case 'WARNING': return '#FFA000';
        case 'POSITIVE': return '#388E3C';
        case 'ATTENTION': return '#D32F2F';
        case 'PREVIOUS': return '#757575';
        default: return '#1976D2';
      }
    }
    return '#FFFFFF';
  }

  const textStyles = {
    color: getTextColor(type, variant),
    fontSize: size === 'small' ? 14 : size === 'large' ? 18 : 16,
    fontWeight: '500',
    marginLeft: iconName ? 8 : 0,
  } as TextStyle;

  return (
    <TouchableOpacity
      style={[baseStyles, variantStyles[variant], style]}
      activeOpacity={0.7}
      {...props}
    >
      {iconName && <AntDesign name={iconName} size={textStyles.fontSize} color={textStyles.color} />}
      {text && <Text style={[textStyles, textStyle]}>{text}</Text>}
    </TouchableOpacity>
  );
};

export default Button;