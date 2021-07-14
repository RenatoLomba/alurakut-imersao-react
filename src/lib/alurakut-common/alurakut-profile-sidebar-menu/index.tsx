import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import { Link } from '../custom-link';
import { CustomDivider } from '../custom-divider';
import { AlurakutProfileSidebarMenuDefault } from '../alurakut-profile-sidebar-menu-default';

type AlurakutMenuProfileSidebarProps = {
  githubUser: string;
  isMenuOpen: boolean;
};

export const AlurakutMenuProfileSidebar = ({
  githubUser,
  isMenuOpen = false,
}: AlurakutMenuProfileSidebarProps) => {
  return (
    <Box
      backgroundColor="white"
      position="fixed"
      zIndex="100"
      padding="2.875rem"
      bottom="0"
      left="0"
      right="0"
      top="48px"
      transition=".3s"
      pointerEvents={isMenuOpen ? 'all' : 'none'}
      opacity={isMenuOpen ? '1' : '0'}
      transform={isMenuOpen ? 'translate(0)' : 'translateY(calc(-100% - 48px))'}
      display={{ base: 'block', lg: 'none' }}
    >
      <Box maxWidth="400px" margin="auto">
        <Image src={`https://github.com/${githubUser}.png`} borderRadius="lg" />

        <CustomDivider />

        <Text>
          <Link href={`/user/${githubUser}`}>@{githubUser}</Link>
        </Text>

        <CustomDivider />

        <AlurakutProfileSidebarMenuDefault />
      </Box>
    </Box>
  );
};
