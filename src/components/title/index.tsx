import { Heading } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

export const Title = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as="h1" fontSize="3xl" fontWeight="normal" marginBottom="20px">
      {children}
    </Heading>
  );
};
