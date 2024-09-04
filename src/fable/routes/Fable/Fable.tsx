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
import { useGetDocument } from '@core/firestore';
import { Document, RoutePath } from '@bootstrap/constants';
import { DTO } from '@bootstrap/dto';
import { CloudinaryImage } from '@network/cloudinary';

export const Fable = memo(function Fable() {
  const [
    {
      params: { id },
    },
  ] = useRoute<{ id: string }>();

  const { width } = useDevice();

  const { data } = useGetDocument<DTO.Fable>({
    doc: Document.Fable,
    id,
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
          <CloudinaryImage
            aspectRatio="1:1"
            publicId={data?.data.image.public_id}
            width={width}
          />
        </Box>
        <Card.Header>
          <Card.Title>{data?.data?.title}</Card.Title>
        </Card.Header>
        <Box marginInline={20}>
          {data?.data?.content.map((str, index) => <p key={index}>{str}</p>)}
        </Box>
      </Content>
      <Footer />
    </Page>
  );
});
