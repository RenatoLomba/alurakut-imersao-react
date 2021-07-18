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
import { GetServerSideProps } from 'next';
import nookies from 'nookies';
import jwt from 'jsonwebtoken';

type HomeProps = {
  githubUser: string;
};

export default function Home({ githubUser }: HomeProps) {
  const [communities, setCommunities] = useState<ProfileRelation[]>([]);
  const [communityName, setCommunityName] = useState('');
  const [communityImageUrl, setCommunityImageUrl] = useState('');
  const [followers, setFollowers] = useState<ProfileRelation[]>([]);
  const [favorites, setFavorites] = useState<ProfileRelation[]>([]);

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const api = new Api();

    const community = {
      title: communityName,
      imgUrl: communityImageUrl,
      creatorSlug: githubUser,
    };

    const createdCommunity = await api.createCommunity(community);

    setCommunities([createdCommunity, ...communities]);

    setCommunityName('');
    setCommunityImageUrl('');
  };

  useEffect(() => {
    const api = new Api();
    const fetchData = async () => {
      const responseFollowers = await api.getRelationsData(
        githubUser,
        'followers',
      );
      const responseFavorites = await api.getRelationsData(
        githubUser,
        'following',
      );
      const responseCommunities = await api.getCommunitiesGraphQL();
      setFollowers(responseFollowers);
      setFavorites(responseFavorites);
      setCommunities(responseCommunities);
    };
    fetchData();
  }, [githubUser]);

  return (
    <>
      <AlurakutMenu githubUser={githubUser} />
      <MainGrid>
        <Flex
          as="aside"
          display={{ base: 'none', lg: 'flex' }}
          flexDirection="column"
          gridArea={{ lg: 'leftArea' }}
        >
          <ProfileSidebar github={githubUser} />
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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { USER_TOKEN } = nookies.get(ctx);

  if (!USER_TOKEN)
    return { redirect: { destination: '/login', permanent: false } };

  const { githubUser } = jwt.decode(USER_TOKEN) as {
    githubUser: string;
    roles: string[];
  };

  const api = new Api();
  const isAuthenticated = await api.userExist(githubUser);

  if (!isAuthenticated) {
    nookies.destroy(ctx, 'USER_TOKEN');
    return {
      redirect: {
        destination: `/login?error=Usuário "${githubUser}" não existe`,
        permanent: false,
      },
    };
  }

  return {
    props: { githubUser },
  };
};
