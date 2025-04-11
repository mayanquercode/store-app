import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
  Platform,
} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign'; // Librería por defecto

type ButtonVariant = 'SMOOTH' | 'GHOST' | 'RAISED';
type ButtonType = 'DEFAULT' | 'WARNING' | 'POSITIVE' | 'ATTENTION' | 'PREVIOUS';
type ButtonShape = 'circle' | 'square';
type IconSize = 'small' | 'medium' | 'large';

type IconButtonProps = {
  icon?: React.ReactElement;
  iconName?: keyof typeof AntDesign.glyphMap; // Icono como string de AntDesign
  variant?: ButtonVariant;
  type?: ButtonType;
  size?: IconSize;
  shape?: ButtonShape;
  borderRadius?: number;
  style?: ViewStyle;
} & TouchableOpacityProps;

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  iconName,
  variant = 'SMOOTH',
  type = 'DEFAULT',
  size = 'medium',
  shape = 'circle',
  borderRadius = 8,
  style,
  ...props
}) => {
  const iconSize = size === 'small' ? 16 : size === 'large' ? 24 : 20;
  const buttonSize = size === 'small' ? 36 : size === 'large' ? 48 : 40;

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

  const getBorderRadius = () => {
    return shape === 'circle' ? buttonSize / 2 : borderRadius;
  };

  const baseStyles: ViewStyle = {
    width: buttonSize,
    height: buttonSize,
    borderRadius: getBorderRadius(),
    alignItems: 'center',
    justifyContent: 'center',
  };

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

  // Determina qué ícono usar: personalizado o por nombre
  const renderIcon = () => {
    if (icon) {
      return React.cloneElement(icon, {
        size: icon.props.size || iconSize,
        color: icon.props.color || (variant === 'GHOST' ? colors.border : colors.icon),
      });
    }

    if (iconName) {
      return (
        <AntDesign
          name={iconName}
          size={iconSize}
          color={variant === 'GHOST' ? colors.border : colors.icon}
        />
      );
    }

    return null;
  };

  return (
    <TouchableOpacity
      style={[baseStyles, variantStyles[variant], style]}
      activeOpacity={0.7}
      {...props}
    >
      {renderIcon()}
    </TouchableOpacity>
  );
};

export default IconButton;
