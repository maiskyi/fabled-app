import { memo } from 'react';

import {
  Content,
  Header,
  Page,
  Card,
  Box,
  useDevice,
  Footer,
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

  const { data } = useGetStory({
    id,
    image: {
      aspect_ratio: '1:1',
      width: `${width}`,
    },
  });

  return (
    <Page>
      <Header collapse="fade" fixed>
        <Header.Back pathname={RoutePath.Index} />
      </Header>
      <Content fullscreen>
        <Box
          aspectRatio={1}
          borderRadius={8}
          marginInline={20}
          overflow="hidden"
        >
          <img
            alt={data?.story.title}
            src={data?.story.image.publicUrlTransformed}
          />
        </Box>
        <Card.Header>
          <Card.Title>{data?.story?.title}</Card.Title>
        </Card.Header>
        <Box marginInline={20} whiteSpace="pre-wrap">
          {data?.story?.content}
        </Box>
      </Content>
      <Footer />
    </Page>
  );
});
