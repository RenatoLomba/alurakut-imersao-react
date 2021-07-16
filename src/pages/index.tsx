import React, { FormEvent, useEffect, useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { WhiteBox } from '../components/white-box';
import { MainGrid } from '../components/main-grid';
import { ProfileSidebar } from '../components/profile-sidebar';
import { AlurakutMenu } from '../lib/alurakut-common/alurakut-menu';
import { ProfileRelations } from '../components/profile-relations';
import { Title } from '../components/title';
import { OrkutNostalgicIconset } from '../lib/alurakut-common/orkut-nostalgic-iconset';
import { FormInput } from '../components/form-input';
import { BoxButton } from '../components/box-button';
import { Subtitle } from '../components/subtitle';
import { ProfileRelation } from '../models/profile-relation';
import { Api } from '../data/api';

const github = 'RenatoLomba';

export default function Home() {
  const [communities, setCommunities] = useState<ProfileRelation[]>([]);
  const [communityName, setCommunityName] = useState('');
  const [communityImageUrl, setCommunityImageUrl] = useState('');
  const [followers, setFollowers] = useState<ProfileRelation[]>([]);
  const [favorites, setFavorites] = useState<ProfileRelation[]>([]);

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    setCommunities([
      ...communities,
      {
        title: communityName,
        imgUrl: communityImageUrl,
        id: communities.length + 1,
      },
    ]);

    setCommunityName('');
    setCommunityImageUrl('');
  };

  useEffect(() => {
    const fetchFollowersData = async () => {
      const api = new Api();
      const responseFollowers = await api.getRelationsData(github, 'followers');
      setFollowers(responseFollowers);
    };
    const fetchFavoritesData = async () => {
      const api = new Api();
      const responseFavorites = await api.getRelationsData(github, 'following');
      setFavorites(responseFavorites);
    };
    fetchFollowersData();
    fetchFavoritesData();
  }, []);

  return (
    <>
      <AlurakutMenu githubUser={github} />
      <MainGrid>
        <Flex
          as="aside"
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

          <WhiteBox>
            <Subtitle as="h2">O que você deseja fazer?</Subtitle>

            <form onSubmit={handleFormSubmit}>
              <Box>
                <FormInput
                  value={communityName}
                  onChange={(e) => setCommunityName(e.target.value)}
                  type="text"
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                />
              </Box>
              <Box>
                <FormInput
                  value={communityImageUrl}
                  onChange={(e) => setCommunityImageUrl(e.target.value)}
                  type="url"
                  placeholder="Coloque uma url para usarmos de capa"
                  name="image"
                  aria-label="Coloque uma url para usarmos de capa"
                />
              </Box>

              <BoxButton type="submit">Criar comunidade</BoxButton>
            </form>
          </WhiteBox>
        </Flex>
        <Flex flexDirection="column" gridArea={{ lg: 'rightArea' }}>
          <ProfileRelations title="Seguidores" relations={followers} />
          <ProfileRelations title="Comunidades" relations={communities} />
          <ProfileRelations
            title="Pessoas da comunidade"
            relations={favorites}
          />
        </Flex>
      </MainGrid>
    </>
  );
}
