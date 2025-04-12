import React from 'react';
import { TouchableOpacity } from 'react-native';
import useCustomNavigation from '@/hooks/useCustomNavigation';
import { IconButtonRouterProps } from './types';
import { 
  getButtonSize, 
  getIconSize, 
  getColors, 
  getBorderRadius, 
  getBaseStyles, 
  getVariantStyles 
} from './styles';
import { renderIcon } from './utils';

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
  const navigateTo = useCustomNavigation();
  const buttonSize = getButtonSize(size);
  const iconSize = getIconSize(size);
  const colors = getColors(type);
  const borderRadiusValue = getBorderRadius(shape, buttonSize);

  const handlePress = () => {
    onPress?.();
    if (pathname) navigateTo({ pathname, params });
  };

  return (
    <TouchableOpacity
      style={[
        getBaseStyles(buttonSize, borderRadiusValue),
        getVariantStyles(variant, colors),
        style,
      ]}
      activeOpacity={0.7}
      onPress={handlePress}
      {...props}
    >
      {renderIcon(
        { icon, iconName, variant, size, type },
        colors,
        iconSize
      )}
    </TouchableOpacity>
  );
};

export default IconButtonRouter;