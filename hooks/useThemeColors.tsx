// useThemeColors.ts
import { Appearance, ColorSchemeName } from 'react-native';

type ButtonColors = {
  bg: string;
  border: string;
  icon: string;
};

type Theme = {
  isDark: boolean;
  buttons: {
    default: ButtonColors;
    warning: ButtonColors;
    positive: ButtonColors;
    attention: ButtonColors;
    previous: ButtonColors;
  };
  shadows: {
    ios: {
      color: string;
      offset: { width: number; height: number };
      opacity: number;
      radius: number;
    };
  };
};

const lightTheme: Theme = {
  isDark: false,
  buttons: {
    default: { bg: '#2196F3', border: '#1976D2', icon: '#FFFFFF' },
    warning: { bg: '#FFC107', border: '#FFA000', icon: '#FFFFFF' },
    positive: { bg: '#4CAF50', border: '#388E3C', icon: '#FFFFFF' },
    attention: { bg: '#c1121f', border: '#D32F2F', icon: '#FFFFFF' },
    previous: { bg: '#9E9E9E', border: '#757575', icon: '#FFFFFF' },
  },
  shadows: {
    ios: {
      color: '#000',
      offset: { width: 0, height: 2 },
      opacity: 0.2,
      radius: 4,
    },
  },
};

const darkTheme: Theme = {
  isDark: true,
  buttons: {
    default: { bg: '#1E88E5', border: '#1565C0', icon: '#FFFFFF' },
    warning: { bg: '#FFB300', border: '#FF8F00', icon: '#000000' },
    positive: { bg: '#43A047', border: '#2E7D32', icon: '#FFFFFF' },
    attention: { bg: '#D32F2F', border: '#B71C1C', icon: '#FFFFFF' },
    previous: { bg: '#616161', border: '#424242', icon: '#FFFFFF' },
  },
  shadows: {
    ios: {
      color: '#000',
      offset: { width: 0, height: 2 },
      opacity: 0.3,
      radius: 4,
    },
  },
};

export default function useThemeColors(): Theme {
  const colorScheme: ColorSchemeName = Appearance.getColorScheme();
  return colorScheme === 'dark' ? darkTheme : lightTheme;
}