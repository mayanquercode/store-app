import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
  Platform,
} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import useCustomNavigation from '@/hooks/useCustomNavigation'; // Importamos el hook
import { ValidRoutes } from '@/types';

// Tipos existentes
type ButtonVariant = 'SMOOTH' | 'GHOST' | 'RAISED';
type ButtonType = 'DEFAULT' | 'WARNING' | 'POSITIVE' | 'ATTENTION' | 'PREVIOUS';
type ButtonShape = 'circle' | 'square';
type IconSize = 'small' | 'medium' | 'large';

// Props extendidas para navegación
type IconButtonRouterProps = {
  icon?: React.ReactElement;
  iconName?: keyof typeof AntDesign.glyphMap;
  variant?: ButtonVariant;
  type?: ButtonType;
  size?: IconSize;
  shape?: ButtonShape;
  borderRadius?: number;
  style?: ViewStyle;
  pathname?: ValidRoutes; // Usamos el tipo ValidRoutes
  params?: Record<string, string>;
  onPress?: () => void; // Permitimos onPress opcional
} & Omit<TouchableOpacityProps, 'onPress'>;

const IconButtonRouter: React.FC<IconButtonRouterProps> = ({
  icon,
  iconName,
  variant = 'SMOOTH',
  type = 'DEFAULT',
  size = 'medium',
  shape = 'circle',
  borderRadius = 8,
  style,
  pathname,
  params,
  onPress,
  ...props
}) => {
  const navigateTo = useCustomNavigation(); // Usamos el hook

  const handlePress = () => {
    // Ejecutamos la acción onPress si existe
    onPress?.();
    
    // Navegamos si hay pathname
    if (pathname) {
      navigateTo({ pathname, params });
    }
  };

  // Lógica de estilos e íconos (igual que antes)
  const iconSize = size === 'small' ? 16 : size === 'large' ? 24 : 20;
  const buttonSize = size === 'small' ? 36 : size === 'large' ? 48 : 40;

  const getColors = () => {
    switch (type) {
      case 'WARNING': return { bg: '#FFC107', border: '#FFA000', icon: '#FFFFFF' };
      case 'POSITIVE': return { bg: '#4CAF50', border: '#388E3C', icon: '#FFFFFF' };
      case 'ATTENTION': return { bg: '#F44336', border: '#D32F2F', icon: '#FFFFFF' };
      case 'PREVIOUS': return { bg: '#9E9E9E', border: '#757575', icon: '#FFFFFF' };
      default: return { bg: '#2196F3', border: '#1976D2', icon: '#FFFFFF' };
    }
  };

  const colors = getColors();

  const getBorderRadius = () => shape === 'circle' ? buttonSize / 2 : borderRadius;

  const baseStyles: ViewStyle = {
    width: buttonSize,
    height: buttonSize,
    borderRadius: getBorderRadius(),
    alignItems: 'center',
    justifyContent: 'center',
  };

  const variantStyles = {
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
      onPress={handlePress}
      {...props}
    >
      {renderIcon()}
    </TouchableOpacity>
  );
};

export default IconButtonRouter;