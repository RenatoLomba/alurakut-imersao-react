import React, { ReactNode } from 'react';
import { ListItem, UnorderedList, Image, Box } from '@chakra-ui/react';
import { Link } from '../../lib/alurakut-common/custom-link';
import { SmallTitle } from '../small-title';
import { WhiteBox } from '../white-box';
import { ProfileRelation } from '../../models/profile-relation';
import { HrComponent } from '../hr-component';
import { BoxLink } from '../box-link';

const ProfileRelationsList = ({ children }: { children: ReactNode }) => {
  return (
    <UnorderedList
      listStyleType="none"
      display="grid"
      gridGap="0.5rem"
      gridTemplateColumns="1fr 1fr 1fr"
      maxHeight="220px"
      margin="0"
    >
      {children}
    </UnorderedList>
  );
};

const ProfileRelationsLink = ({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) => {
  return (
    <Link
      href={href}
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
      {children}
    </Link>
  );
};

const ProfileRelationsImage = ({ src }: { src: string }) => {
  return (
    <Image
      src={src}
      objectFit="cover"
      backgroundPosition="center center"
      width="100%"
      height="100%"
      position="relative"
    />
  );
};

const ProfileRelationsSpan = ({ children }: { children: ReactNode }) => {
  return (
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
      {children}
    </Box>
  );
};

export const ProfileRelations = ({
  relations,
  title,
}: {
  relations: ProfileRelation[];
  title: string;
}) => {
  return (
    <WhiteBox>
      <SmallTitle>
        {title} ({relations.length})
      </SmallTitle>

      <ProfileRelationsList>
        {relations.slice(0, 6).map((item) => {
          return (
            <ListItem key={item.id.toString()}>
              <ProfileRelationsLink href={`/users/${item.title}`}>
                <ProfileRelationsImage src={item.imgUrl} />

                <ProfileRelationsSpan>{item.title}</ProfileRelationsSpan>
              </ProfileRelationsLink>
            </ListItem>
          );
        })}
      </ProfileRelationsList>

      {relations.length > 6 && (
        <>
          <HrComponent marginY="4" />
          <BoxLink>Ver todos</BoxLink>
        </>
      )}
    </WhiteBox>
  );
};
