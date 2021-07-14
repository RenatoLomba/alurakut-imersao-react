import React from 'react';
import type { AppProps } from 'next/app';
import { Flex } from '@chakra-ui/react';
import { ThemeProvider } from '../contexts/theme/ThemeProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Flex flexDirection="column" minHeight="100vh">
        <Component {...pageProps} />
      </Flex>
    </ThemeProvider>
  );
}
export default MyApp;
