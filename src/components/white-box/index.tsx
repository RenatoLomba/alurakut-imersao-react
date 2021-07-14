import React, { ReactNode } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

type WhiteBoxProps = BoxProps & {
  children: ReactNode;
};

export const WhiteBox = ({ children, ...props }: WhiteBoxProps) => {
  return (
    <Box
      as="section"
      backgroundColor="white"
      borderRadius="lg"
      padding="4"
      marginBottom="2.5"
      {...props}
    >
      {children}
    </Box>
  );
};
