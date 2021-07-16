import { Divider, DividerProps } from '@chakra-ui/react';
import React from 'react';

export const HrComponent = ({ ...rest }: DividerProps) => {
  return (
    <Divider
      marginTop="3"
      marginBottom="2"
      borderColor="transparent"
      borderBottomColor="#ECF2FA"
      {...rest}
    />
  );
};
