import React from 'react';
import { Link, LinkProps } from '../custom-link';

export const AlurakutMenuLink = ({ children, href, ...rest }: LinkProps) => {
  return (
    <Link
      href={href}
      fontSize="xs"
      color="white"
      padding="0.625rem 1rem"
      position="relative"
      textDecoration="none"
      _after={{
        content: '" "',
        backgroundColor: 'primary.500',
        display: 'block',
        position: 'absolute',
        width: '1px',
        height: '0.75rem',
        margin: 'auto',
        left: '0',
        top: '0',
        bottom: '0',
      }}
      {...rest}
    >
      {children}
    </Link>
  );
};
