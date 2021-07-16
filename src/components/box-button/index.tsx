import { Button, ButtonProps } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

export const BoxButton = ({
  children,
  ...rest
}: { children: ReactNode } & ButtonProps) => {
  return (
    <Button
      border="0"
      padding="0.5rem 12px"
      color="white"
      borderRadius="10000px"
      backgroundColor="#6f92bb"
      {...rest}
    >
      {children}
    </Button>
  );
};
