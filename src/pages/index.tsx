import React from 'react';
import { Flex /*, useColorMode*/ } from '@chakra-ui/react';
import { WhiteBox } from '../components/white-box';
import { MainGrid } from '../components/main-grid';
import { ProfileSidebar } from '../components/profile-sidebar';
import { AlurakutMenu } from '../lib/alurakut-common/alurakut-menu';
import { ProfileRelations } from '../components/profile-relations';
import { Title } from '../components/title';
import { OrkutNostalgicIconset } from '../lib/alurakut-common/orkut-nostalgic-iconset';

export default function Home() {
  // const { toggleColorMode } = useColorMode();

  const github = 'RenatoLomba';
  const favorites = [
    'renatolomba',
    'omariosouto',
    'gabrielrossi',
    'juunegreiros',
    'peas',
  ];

  return (
    <>
      <AlurakutMenu githubUser={github} />
      <MainGrid>
        <Flex
          display={{ base: 'none', lg: 'flex' }}
          flexDirection="column"
          gridArea={{ lg: 'leftArea' }}
        >
          <ProfileSidebar github={github} />
        </Flex>
        <Flex flexDirection="column" gridArea={{ lg: 'mainArea' }}>
          <WhiteBox>
            <Title>Bem vindo(a)</Title>

            <OrkutNostalgicIconset />
          </WhiteBox>
        </Flex>
        <Flex flexDirection="column" gridArea={{ lg: 'rightArea' }}>
          <ProfileRelations favorites={favorites} />
        </Flex>
        {/* <Button onClick={toggleColorMode}>Toggle</Button> */}
      </MainGrid>
    </>
  );
}
