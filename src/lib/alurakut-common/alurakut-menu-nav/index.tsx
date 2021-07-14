import { Flex, FlexProps } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

type AlurakutMenuNavProps = FlexProps & {
  children: ReactNode;
};

export const AlurakutMenuNav = ({
  children,
  ...props
}: AlurakutMenuNavProps) => {
  return (
    <Flex as="nav" display={{ base: 'none', lg: 'flex' }} {...props}>
      {children}
    </Flex>
  );
};
