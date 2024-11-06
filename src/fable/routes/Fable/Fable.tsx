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
import { useGetStory } from '@network/admin';

export const Fable = memo(function Fable() {
  const [
    {
      params: { id },
    },
  ] = useRoute<{ id: string }>();

  const { width } = useDevice();

  const { data } = useGetStory({
    id,
    image: {
      aspect_ratio: '1:1',
      width: `${width + 5}`,
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
            <Image src={data?.story.image.publicUrlTransformed} />
            {/* <img alt={data?.story.title} /> */}
          </Box>
          <Card.Header>
            <Card.Title>{data?.story?.title}</Card.Title>
          </Card.Header>
          <Box marginInline={20} whiteSpace="pre-wrap">
            {data?.story?.content}
          </Box>
        </SafeArea>
      </Content>
    </Page>
  );
});
