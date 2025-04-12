import React from 'react';
import {
  AntDesign,
  FontAwesome6,
  MaterialCommunityIcons,
  Ionicons,
  Feather,
  MaterialIcons,
  FontAwesome5,
} from '@expo/vector-icons';
import { StyleProp, ViewStyle } from 'react-native';

// Tipos para las librerías de iconos
type AntDesignIconName = keyof typeof AntDesign.glyphMap;
type FontAwesome6IconName = keyof typeof FontAwesome6.glyphMap;
type MaterialCommunityIconName = keyof typeof MaterialCommunityIcons.glyphMap;
type IoniconName = keyof typeof Ionicons.glyphMap;
type FeatherIconName = keyof typeof Feather.glyphMap;
type MaterialIconName = keyof typeof MaterialIcons.glyphMap;
type FontAwesome5IconName = keyof typeof FontAwesome5.glyphMap;

// Definición de íconos personalizados
export const customIcons = {
  invoice: 'file-invoice' as FontAwesome6IconName,
  calculator: 'calculator' as AntDesignIconName,
  settings: 'cogs' as MaterialCommunityIconName,
  box: 'codesandbox' as AntDesignIconName,
  // Agrega más íconos personalizados aquí
};

// Tipos para las props
export type CustomIconName = keyof typeof customIcons;
export type DirectIconName = 
  | { antDesign: AntDesignIconName }
  | { fontAwesome6: FontAwesome6IconName }
  | { materialCommunity: MaterialCommunityIconName }
  | { ionicons: IoniconName }
  | { feather: FeatherIconName }
  | { material: MaterialIconName }
  | { fontAwesome5: FontAwesome5IconName };

export type IconName = CustomIconName | DirectIconName;

interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
  testID?: string;
}

// Componente principal Icon
const Icon: React.FC<IconProps> = ({ 
  name, 
  size = 24, 
  color = 'black', 
  style, 
  testID 
}) => {
  // Renderizar ícono personalizado
  if (typeof name === 'string' && name in customIcons) {
    const iconName = customIcons[name as CustomIconName];
    
    // Determinar la librería basada en el tipo de ícono
    if (typeof iconName === 'string') {
      if (iconName in FontAwesome6.glyphMap) {
        return <FontAwesome6 name={iconName} size={size} color={color} style={style} testID={testID} />;
      }
      if (iconName in AntDesign.glyphMap) {
        return <AntDesign name={iconName as never} size={size} color={color} style={style as never} testID={testID} />;
      }
      if (iconName in MaterialCommunityIcons.glyphMap) {
        return <MaterialCommunityIcons name={iconName as never} size={size} color={color} style={style as never} testID={testID} />;
      }
    }
  }

  // Renderizar ícono directo de librería
  if (typeof name === 'object') {
    if ('antDesign' in name) {
      return <AntDesign name={name.antDesign} size={size} color={color} style={style as never} testID={testID} />;
    }
    if ('fontAwesome6' in name) {
      return <FontAwesome6 name={name.fontAwesome6} size={size} color={color} style={style} testID={testID} />;
    }
    if ('materialCommunity' in name) {
      return <MaterialCommunityIcons name={name.materialCommunity} size={size} color={color} style={style as never} testID={testID} />;
    }
    if ('ionicons' in name) {
      return <Ionicons name={name.ionicons} size={size} color={color} style={style as never} testID={testID} />;
    }
    if ('feather' in name) {
      return <Feather name={name.feather} size={size} color={color} style={style as never} testID={testID} />;
    }
    if ('material' in name) {
      return <MaterialIcons name={name.material} size={size} color={color} style={style as never} testID={testID} />;
    }
    if ('fontAwesome5' in name) {
      return <FontAwesome5 name={name.fontAwesome5} size={size} color={color} style={style} testID={testID} />;
    }
  }

  // Ícono no encontrado
  console.warn(`Icon "${JSON.stringify(name)}" not found.`);
  return <FontAwesome6 name="question" size={size} color={color} style={style} testID={testID} />;
};

export default Icon;