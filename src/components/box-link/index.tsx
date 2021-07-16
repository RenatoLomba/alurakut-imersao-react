import { Link, LinkProps } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

export const BoxLink = ({
  children,
  ...rest
}: { children: ReactNode } & LinkProps) => {
  return (
    <Link
      fontSize="sm"
      color="primary.900"
      textDecoration="none"
      fontWeight="extrabold"
      text
      {...rest}
    >
      {children}
    </Link>
  );
};
