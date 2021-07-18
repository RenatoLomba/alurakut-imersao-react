import React, { ReactNode } from 'react';
import { Box, Grid } from '@chakra-ui/react';

type MainGridProps = {
  children: ReactNode;
};

export const MainGrid = ({ children }: MainGridProps) => {
  return (
    <Box
      backgroundImage='url("/images/wallpaper.jpg")'
      backgroundRepeat="no-repeat"
      backgroundAttachment="fixed"
      backgroundPosition="center"
      backgroundSize="cover"
    >
      <Grid
        as="main"
        width="100%"
        gap="2.5"
        margin="0 auto"
        maxWidth={{ base: '500px', lg: '1110px' }}
        padding="4"
        templateColumns={{ base: '1fr', lg: '10rem 1fr 19.5rem' }}
        templateAreas={{
          lg: `
          "leftArea mainArea rightArea"
          `,
        }}
      >
        {children}
      </Grid>
    </Box>
  );
};
