import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { styles } from './styles';

export const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    background: {
      primary: '#d9e6f6',
      secondary: '#F1F9FE',
      tertiary: '#fff',
      quarternary: '#BBCDE8',
    },
    primary: {
      900: '#2E7BB4',
      800: '#308BC5',
      600: '#5579A1',
      500: '#5292C1',
    },
    white: {
      custom: '#ECF2FA',
    },
    customColor: {
      primary: '#2E7BB4',
      secondary: '#388BB0',
      tertiary: '#2F4A71',
      quarternary: '#D81D99',
    },
    text: {
      primary: '#333333',
      secondary: '#FFFFFF',
      tertiary: '#5A5A5A',
      quarternary: '#C5C6CA',
    },
  },
  styles,
});

export default theme;
