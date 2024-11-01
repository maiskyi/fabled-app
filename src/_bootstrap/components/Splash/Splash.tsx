import { FC } from 'react';

import { Box, Content, Page, Spinner } from '@core/uikit';

export const Splash: FC = () => {
  return (
    <Page>
      <Content>
        <Box
          alignItems="center"
          display="flex"
          justifyContent="center"
          minHeight="100%"
        >
          <Spinner />
        </Box>
      </Content>
    </Page>
  );
};
