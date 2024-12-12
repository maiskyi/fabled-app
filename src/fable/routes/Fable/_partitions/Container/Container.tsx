import { FC, PropsWithChildren } from 'react';

import { Box, Header, Loading, SafeArea } from '@core/uikit';
import { RoutePath } from '@bootstrap/constants';

type ContainerProps = PropsWithChildren<{
  isReady: boolean;
}>;

export const Container: FC<ContainerProps> = ({ children, isReady }) => {
  return (
    <Box display="flex" flexDirection="column" height="100%">
      <Box
        background="linear-gradient(to bottom, rgba(0, 0, 0, 0.85), transparent)"
        flex="0 0 auto"
        paddingBottom={24}
      >
        <Header collapse="condense">
          <Header.Back color="dark" pathname={RoutePath.Index} />
        </Header>
      </Box>
      <Box
        display="flex"
        flex="1 1 auto"
        flexDirection="column"
        justifyContent="flex-end"
      >
        <Loading isOpen={!isReady} />
        {isReady && (
          <SafeArea
            background="linear-gradient(to top, rgba(0, 0, 0, 1), transparent)"
            display="flex"
            flex="0 0 70%"
            flexDirection="column"
            justifyContent="flex-end"
            safe={['bottom']}
          >
            <Box>{children}</Box>
          </SafeArea>
        )}
      </Box>
    </Box>
  );
};
