import { Heading, HeadingProps } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

export const SmallTitle = ({
  children,
  ...props
}: { children: ReactNode } & HeadingProps) => {
  return (
    <Heading
      as="h2"
      marginBottom="20px"
      fontSize="1rem"
      fontWeight="bold"
      color="#333333"
      {...props}
    >
      {children}
    </Heading>
  );
};
