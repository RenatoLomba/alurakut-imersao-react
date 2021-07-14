import React, { useState } from 'react';
import { Box, Button, Flex, Image, Input } from '@chakra-ui/react';
import { BASE_URL, v } from '..';
import { AlurakutMenuNav } from '../alurakut-menu-nav';
import { AlurakutMenuLink } from '../alurakut-menu-link';
import { AlurakutMenuProfileSidebar } from '../alurakut-profile-sidebar-menu';

type AlurakutMenuProps = {
  githubUser: string;
};

export const AlurakutMenu = ({ githubUser }: AlurakutMenuProps) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const linkList = [
    { name: 'Inicio', slug: '/' },
    { name: 'Amigos', slug: '/amigos' },
    { name: 'Comunidades', slug: '/comunidades' },
  ];

  return (
    <Box as="header" width="100%" backgroundColor="primary.800">
      <Flex
        backgroundColor="primary.800"
        padding="0.438rem 1rem"
        maxWidth="1110px"
        margin="auto"
        justifyContent={{ base: 'space-between', lg: 'flex-start' }}
        alignItems="center"
        position="relative"
        zIndex="101"
      >
        <Image
          src={`${BASE_URL}/logo.svg`}
          backgroundColor="white"
          padding="0.563rem 0.875rem"
          borderRadius="1000px"
          height="2.125rem"
        />

        <AlurakutMenuNav>
          {linkList.map((menuItem) => (
            <AlurakutMenuLink
              key={`key__${menuItem.name.toLocaleLowerCase()}`}
              href={`${menuItem.slug.toLocaleLowerCase()}`}
            >
              {menuItem.name}
            </AlurakutMenuLink>
          ))}
        </AlurakutMenuNav>

        <AlurakutMenuNav marginLeft="auto">
          <AlurakutMenuLink href="/logout">Sair</AlurakutMenuLink>
          <Box>
            <Input
              placeholder="Pesquisar no Orkut"
              color="white"
              backgroundColor="primary.600"
              padding="0.625rem 2.625rem"
              border="0"
              backgroundImage={`url(${BASE_URL}/icons/search.svg)`}
              backgroundPosition="0.938rem center"
              backgroundRepeat="no-repeat"
              borderRadius="1000px"
              fontSize="xs"
              _placeholder={{
                color: 'white',
                opacity: '1',
              }}
            />
          </Box>
        </AlurakutMenuNav>

        <Button
          onClick={() => setMenuOpen(!isMenuOpen)}
          border="0"
          background="transparent"
          alignSelf="center"
          display={{ base: 'inline-block', lg: 'none' }}
        >
          {isMenuOpen ? (
            <Image src={`${BASE_URL}/icons/menu-open.svg?v=${v}`} />
          ) : (
            <Image src={`${BASE_URL}/icons/menu-closed.svg?v=${v}`} />
          )}
        </Button>
      </Flex>

      <AlurakutMenuProfileSidebar
        githubUser={githubUser}
        isMenuOpen={isMenuOpen}
      />
    </Box>
  );
};
