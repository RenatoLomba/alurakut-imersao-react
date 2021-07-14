import {
  Box,
  ListItem,
  UnorderedList,
  Image,
  BoxProps,
} from '@chakra-ui/react';
import React, { ReactNode } from 'react';

const OrkutNostalgicIconsetNumber = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      as="span"
      gridArea="number"
      minWidth="15px"
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
    >
      {children}
    </Box>
  );
};

const OrkutNostalgicIconsetTitle = ({
  name,
  ...props
}: { name: string } & BoxProps) => {
  return (
    <Box as="span" display="block" fontStyle="italic" {...props}>
      {name}
    </Box>
  );
};

const OrkutNostalgicIconsetListItem = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <ListItem
      fontSize="xs"
      color="#5A5A5A"
      display="grid"
      gridTemplateAreas={`
          "title title"
          "number number"
          `}
      _notLast={{ marginRight: '5px' }}
    >
      {children}
    </ListItem>
  );
};

type OrkutNostalgicIconsetProps = {
  [key: string]: number;
};

export const OrkutNostalgicIconset = (props: OrkutNostalgicIconsetProps) => {
  const iconList = [
    { name: 'Recados', slug: 'recados', icon: 'book' },
    { name: 'Fotos', slug: 'fotos', icon: 'camera' },
    { name: 'Videos', slug: 'videos', icon: 'video-camera' },
    { name: 'Fãs', slug: 'fas', icon: 'star' },
    { name: 'Mensagens', slug: 'mensagens', icon: 'email' },
  ];

  const iconTypeList = [
    { name: 'Confiável', slug: 'confiavel', icon: 'smile' },
    { name: 'Legal', slug: 'legal', icon: 'cool' },
    { name: 'Sexy', slug: 'sexy', icon: 'heart' },
  ];

  return (
    <UnorderedList
      listStyleType="none"
      margin="2rem 0 0 0"
      display="flex"
      justifyContent="space-between"
      flexWrap="wrap"
    >
      {iconList.map(({ name, slug, icon }) => (
        <OrkutNostalgicIconsetListItem key={`orkut__icon_set__${slug}`}>
          <OrkutNostalgicIconsetTitle name={name} gridArea="title" />
          <OrkutNostalgicIconsetNumber>
            <Image
              key={`orkut__icon_set__${slug}_img`}
              src={`https://alurakut.vercel.app/icons/${icon}.svg`}
              marginRight="7px"
            />
            {props[slug] ? props[slug] : 0}
          </OrkutNostalgicIconsetNumber>
        </OrkutNostalgicIconsetListItem>
      ))}

      {iconTypeList.map(({ name, slug, icon }) => {
        const total = props[slug] ? props[slug] : 2;
        return (
          <OrkutNostalgicIconsetListItem key={`orkut__icon_set__${slug}`}>
            <OrkutNostalgicIconsetTitle name={name} />
            <OrkutNostalgicIconsetNumber>
              {[0, 1, 2].map((_, index) => {
                const isHeartActive = index <= total - 1;
                return (
                  <Image
                    key={`orkut__icon_set__${slug}_img_${index}`}
                    src={`https://alurakut.vercel.app/icons/${icon}.svg`}
                    marginRight="2px"
                    opacity={isHeartActive ? '1' : '0.5'}
                  />
                );
              })}
            </OrkutNostalgicIconsetNumber>
          </OrkutNostalgicIconsetListItem>
        );
      })}
    </UnorderedList>
  );
};
