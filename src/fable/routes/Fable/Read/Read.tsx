import { FC } from 'react';
import { useContext } from 'use-context-selector';

import { Box, Content, Page, Reader } from '@core/uikit';

import { FableContext } from '../Fable.context';
import { Container } from '../_partitions/Container';

export const Read: FC = () => {
  const { isReady, story } = useContext(FableContext);

  const cover = isReady ? story?.image : undefined;

  return (
    <Page cover={cover}>
      <Content>
        <Container isReady={isReady}>
          <Box paddingInline={20}>
            <Reader>{story?.content}</Reader>
          </Box>
        </Container>
      </Content>
    </Page>
  );
};
