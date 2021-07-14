import { Box, Image } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { BASE_URL } from '..';
import { CustomDivider } from '../custom-divider';
import { Link } from '../custom-link';

type MenuItemProps = {
  children: ReactNode;
  href: string;
  imageSrc: string;
};

const MenuItem = ({ children, href, imageSrc }: MenuItemProps) => {
  return (
    <Link
      href={href}
      fontSize="xs"
      color="primary.900"
      marginBottom="4"
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      textDecoration="none"
    >
      <Image src={imageSrc} width="1rem" height="1rem" marginRight="5px" />
      {children}
    </Link>
  );
};

export const AlurakutProfileSidebarMenuDefault = () => {
  return (
    <Box>
      <Box as="nav">
        <MenuItem href="/" imageSrc={`${BASE_URL}/icons/user.svg`}>
          Perfil
        </MenuItem>

        <MenuItem href="/" imageSrc={`${BASE_URL}/icons/book.svg`}>
          Recados
        </MenuItem>

        <MenuItem href="/" imageSrc={`${BASE_URL}/icons/camera.svg`}>
          Fotos
        </MenuItem>

        <MenuItem href="/" imageSrc={`${BASE_URL}/icons/sun.svg`}>
          Depoimentos
        </MenuItem>
      </Box>

      <CustomDivider />

      <Box as="nav">
        <MenuItem href="/" imageSrc={`${BASE_URL}/icons/plus.svg`}>
          Github Trends
        </MenuItem>

        <MenuItem href="/logout" imageSrc={`${BASE_URL}/icons/logout.svg`}>
          Sair
        </MenuItem>
      </Box>
    </Box>
  );
};
