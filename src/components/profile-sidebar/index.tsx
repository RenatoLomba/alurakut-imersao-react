import React from 'react';
import { Image } from '@chakra-ui/react';
import { WhiteBox } from '../white-box';

type ProfileSidebarProps = {
  github: string;
};

export const ProfileSidebar = ({ github }: ProfileSidebarProps) => {
  return (
    <WhiteBox>
      <Image borderRadius="lg" src={`https://github.com/${github}.png`} />
    </WhiteBox>
  );
};
