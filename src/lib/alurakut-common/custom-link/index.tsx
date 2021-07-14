import React, { ReactNode } from 'react';
import NextLink from 'next/link';
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';

export type LinkProps = ChakraLinkProps & {
  href: string;
  children: ReactNode;
};

export const Link = ({ href, children, ...rest }: LinkProps) => {
  return (
    <NextLink href={href} passHref>
      <ChakraLink as="a" {...rest}>
        {children}
      </ChakraLink>
    </NextLink>
  );
};
