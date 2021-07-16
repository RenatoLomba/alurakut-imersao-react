import { Heading, HeadingProps } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

export const Subtitle = ({
  children,
  ...rest
}: { children: ReactNode } & HeadingProps) => {
  return (
    <Heading
      as="h2"
      fontSize="18px"
      fontWeight="normal"
      marginBottom="20px"
      {...rest}
    >
      {children}
    </Heading>
  );
};
