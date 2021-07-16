import { Input, InputProps } from '@chakra-ui/react';
import React from 'react';

export const FormInput = ({ ...props }: InputProps) => {
  return (
    <Input
      width="100%"
      bg="#f4f4f4"
      color="#333333"
      border="0"
      padding="14px 1rem"
      marginBottom="14px"
      borderRadius="10000px"
      _placeholder={{
        color: '#333333',
        opacity: '1',
      }}
      {...props}
    />
  );
};
