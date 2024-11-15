import { memo } from 'react';

import {
  Content,
  Header,
  Page,
  Card,
  Box,
  useDevice,
  SafeArea,
  Spinner,
} from '@core/uikit';
import { useRoute } from '@core/navigation';
import { RoutePath } from '@bootstrap/constants';
import { useGetStory } from '@network/api';
import { Image } from '@core/cloudinary';

export const Fable = memo(function Fable() {
  const [
    {
      params: { id },
    },
  ] = useRoute<{ id: string }>();

  const { width } = useDevice();

  const { data } = useGetStory(id);

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
            <Image
              aspectRatio="1:1"
              id={data?.image.publicId}
              spinner={<Spinner />}
              width={width}
            />
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
