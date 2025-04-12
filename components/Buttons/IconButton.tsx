import React from 'react';
import { TouchableOpacity } from 'react-native';
import { IconButtonProps } from './types';
import { 
  getButtonSize, 
  getIconSize, 
  getColors, 
  getBorderRadius, 
  getBaseStyles, 
  getVariantStyles 
} from './styles';
import { renderIcon } from './utils';

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
  const buttonSize = getButtonSize(size);
  const iconSize = getIconSize(size);
  const colors = getColors(type);
  const borderRadiusValue = getBorderRadius(shape, buttonSize);
  
  return (
    <TouchableOpacity
      style={[
        getBaseStyles(buttonSize, borderRadiusValue),
        getVariantStyles(variant, colors),
        style,
      ]}
      activeOpacity={0.7}
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

export default IconButton;