import {
  Box,
  Button,
  ButtonProps,
  Flex,
  FlexProps,
  Grid,
  Image,
  Input,
  InputProps,
  Text,
} from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { Link } from '../../lib/alurakut-common/custom-link';

export const LoginScreen = ({ children }: { children: ReactNode }) => {
  return (
    <Grid
      padding="4"
      maxWidth="1110px"
      gap="3"
      gridTemplateAreas={{
        base: `
      "logo"
      "formArea"
      "footer"
      `,
        lg: `
      "logo formArea"
      "logo formArea"
      "footer footer"
      `,
      }}
      gridTemplateColumns={{ lg: '2fr 1fr' }}
    >
      {children}
    </Grid>
  );
};

export const LogoArea = ({ children }: { children: ReactNode }) => {
  return (
    <Flex
      as="section"
      gridArea="logo"
      backgroundColor="background.tertiary"
      borderRadius="lg"
      padding="4"
      textAlign="center"
      flexDirection="column"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      minHeight={{ base: '263px', lg: '368px' }}
    >
      {children}
    </Flex>
  );
};

export const LogoAreaText = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontSize="xs" lineHeight="shorter" _notLast={{ marginBottom: '3' }}>
      {children}
    </Text>
  );
};

export const LogoAreaTextBold = ({ children }: { children: ReactNode }) => {
  return (
    <Text as="strong" color="customColor.quarternary">
      {children}
    </Text>
  );
};

export const LogoImage = () => {
  return (
    <Image
      src="https://alurakut.vercel.app/logo.svg"
      maxHeight="45px"
      marginBottom="9"
    />
  );
};

export const FormArea = ({
  children,
  ...props
}: { children: ReactNode } & FlexProps) => {
  return (
    <Flex
      as="section"
      gridArea="formArea"
      flexWrap="wrap"
      flexDirection="column"
      {...props}
    >
      {children}
    </Flex>
  );
};

export const ClassBox = ({
  children,
  ...props
}: { children: ReactNode } & FlexProps) => {
  return (
    <Flex
      {...props}
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      padding="4"
      paddingLeft="50px"
      paddingRight="50px"
      backgroundColor="background.secondary"
      borderRadius="lg"
      flex="1"
    >
      {children}
    </Flex>
  );
};

export const ClassBoxText = ({ children }: { children: ReactNode }) => {
  return <Text fontSize="sm">{children}</Text>;
};

export const FormInput = ({ ...props }: InputProps) => {
  return (
    <Input
      width="100%"
      display="block"
      border="1px solid"
      borderColor="text.quarternary"
      padding="3"
      backgroundColor="background.tertiary"
      borderRadius="lg"
      marginTop="6"
      marginBottom="4"
      {...props}
    />
  );
};

export const FormButton = ({
  children,
  ...props
}: { children: ReactNode } & ButtonProps) => {
  return (
    <Button
      width="100%"
      display="block"
      border="0"
      padding="3"
      borderRadius="lg"
      backgroundColor="customColor.primary"
      color="text.secondary"
      {...props}
    >
      {children}
    </Button>
  );
};

export const FooterArea = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      as="footer"
      gridArea="footer"
      backgroundColor="background.quarternary"
      borderRadius="lg"
      padding="2"
    >
      {children}
    </Box>
  );
};

export const FooterLink = ({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) => {
  return (
    <Link href={href} textDecoration="none" color="customColor.primary">
      {children}
    </Link>
  );
};
