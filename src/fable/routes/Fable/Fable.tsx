import { memo } from 'react';

import {
  Content,
  Header,
  Page,
  Card,
  Box,
  useDevice,
  SafeArea,
  Image,
} from '@core/uikit';
import { useRoute } from '@core/navigation';
import { RoutePath } from '@bootstrap/constants';
import { useGetStory } from '@network/api';

export const Fable = memo(function Fable() {
  const [
    {
      params: { id },
    },
  ] = useRoute<{ id: string }>();

  const { width } = useDevice();

  const { data } = useGetStory(id, {
    image: {
      aspectRatio: '1:1',
      width,
    },
  });

  return (
    <Page>
      <Header collapse="fade" fixed>
        <Header.Back pathname={RoutePath.Index} />
      </Header>
      <Content fullscreen>
        <SafeArea safe={['bottom']}>
          <Box
            aspectRatio={1}
            borderRadius={8}
            marginInline={20}
            overflow="hidden"
            position="relative"
          >
            <Image src={data?.image} />
          </Box>
          <Card.Header>
            <Card.Title>{data?.title}</Card.Title>
          </Card.Header>
          <Box marginInline={20} whiteSpace="pre-wrap">
            {data?.content}
          </Box>
        </SafeArea>
      </Content>
    </Page>
  );
});
