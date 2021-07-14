import { ListItem, UnorderedList, Image, Box } from '@chakra-ui/react';
import React from 'react';
import { Link } from '../../lib/alurakut-common/custom-link';
import { SmallTitle } from '../small-title';
import { WhiteBox } from '../white-box';

type ProfileRelationsProps = {
  favorites: string[];
};

export const ProfileRelations = ({ favorites }: ProfileRelationsProps) => {
  return (
    <WhiteBox>
      <SmallTitle>Pessoas da Comunidade ({favorites.length})</SmallTitle>

      <UnorderedList
        listStyleType="none"
        display="grid"
        gridGap="0.5rem"
        gridTemplateColumns="1fr 1fr 1fr"
        maxHeight="220px"
        margin="0"
      >
        {favorites.map((favorited) => (
          <ListItem key={favorited}>
            <Link
              href={`/users/${favorited}`}
              display="inline-block"
              height="102px"
              position="relative"
              overflow="hidden"
              borderRadius="0.5rem"
              _after={{
                content: '" "',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
                zIndex: 1,
                backgroundImage: 'linear-gradient(0deg,#00000073,transparent)',
              }}
            >
              <Image
                src={`https://github.com/${favorited}.png`}
                objectFit="cover"
                backgroundPosition="center center"
                width="100%"
                height="100%"
                position="relative"
              />

              <Box
                as="span"
                color="white"
                fontSize="xs"
                position="absolute"
                left="0"
                bottom="10px"
                zIndex="2"
                padding="0 4px"
                overflow="hidden"
                textOverflow="ellipsis"
                width="100%"
                display="-webkit-box"
                __css={{
                  WebkitLineClamp: '3',
                  WebkitBoxOrient: 'vertical',
                }}
              >
                {favorited}
              </Box>
            </Link>
          </ListItem>
        ))}
      </UnorderedList>
    </WhiteBox>
  );
};
