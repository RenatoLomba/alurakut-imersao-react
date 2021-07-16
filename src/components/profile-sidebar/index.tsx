import React from 'react';
import { Image, Text } from '@chakra-ui/react';
import { WhiteBox } from '../white-box';
import { HrComponent } from '../hr-component';
import { AlurakutProfileSidebarMenuDefault } from '../../lib/alurakut-common/alurakut-profile-sidebar-menu-default';
import { BoxLink } from '../box-link';

type ProfileSidebarProps = {
  github: string;
};

export const ProfileSidebar = ({ github }: ProfileSidebarProps) => {
  return (
    <WhiteBox>
      <Image borderRadius="lg" src={`https://github.com/${github}.png`} />
      <HrComponent />
      <Text>
        <BoxLink href={`https://github.com/${github}`}>@{github}</BoxLink>
      </Text>
      <HrComponent />
      <AlurakutProfileSidebarMenuDefault />
    </WhiteBox>
  );
};
