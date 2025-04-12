import AntDesign from '@expo/vector-icons/AntDesign';
import { IconButtonBaseProps } from './types';
import { getColors } from './styles';
import React from 'react';

export const renderIcon = (
  { icon, iconName, variant = 'SMOOTH', size = 'medium', type = 'DEFAULT' }: IconButtonBaseProps,
  colors: ReturnType<typeof getColors>,
  iconSize: number
) => {
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