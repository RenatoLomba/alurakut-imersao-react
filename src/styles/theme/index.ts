import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { styles } from './styles';

export const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    background: {
      primary: '#d9e6f6',
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
  },
  styles,
});

export default theme;
