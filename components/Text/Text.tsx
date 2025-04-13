import { StyleSheet, Text as RNText, TextStyle, TextProps as RNTextProps } from 'react-native'
import React from 'react'

// Tipos para las props
type FontWeight = '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
type TextSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl'
type TextAlign = 'auto' | 'left' | 'right' | 'center' | 'justify'

interface TextProps extends RNTextProps {
  size?: TextSize
  weight?: FontWeight
  color?: string
  align?: TextAlign
  italic?: boolean
  underline?: boolean
  children: React.ReactNode
}

// Mapeo de tamaños (similar a Tailwind)
const SIZE_MAP: Record<TextSize, number> = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 30,
  '4xl': 36,
  '5xl': 48
}

// Mapeo de pesos de fuente
const WEIGHT_MAP: Record<FontWeight, string> = {
  '100': 'poppins100',
  '200': 'poppins200',
  '300': 'poppins300',
  '400': 'poppins400',
  '500': 'poppins500',
  '600': 'poppins600',
  '700': 'poppins700',
  '800': 'poppins800',
  '900': 'poppins900'
}

const Text: React.FC<TextProps> = ({
  size = 'base',
  weight = '400',
  color = '#000000',
  align = 'left',
  italic = false,
  underline = false,
  children,
  style,
  ...rest
}) => {
  // Construir el estilo dinámicamente
  const textStyle: TextStyle = {
    fontSize: SIZE_MAP[size],
    fontFamily: WEIGHT_MAP[weight],
    color,
    textAlign: align,
    fontStyle: italic ? 'italic' : 'normal',
    textDecorationLine: underline ? 'underline' : 'none',
  }

  return (
    <RNText 
      style={[textStyle, style]}
      {...rest}
    >
      {children}
    </RNText>
  )
}

export default Text