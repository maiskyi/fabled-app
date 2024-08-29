import { memo } from 'react';

import { Content, Header, Page, Container, Text, Card } from '@core/uikit';
import { useRoute } from '@core/navigation';
import { useGetDocument } from '@core/firestore';
import { Document, RoutePath } from '@bootstrap/constants';
import { DTO } from '@bootstrap/dto';

export const Fable = memo(function Fable() {
  const [
    {
      params: { id },
    },
  ] = useRoute<{ id: string }>();

  const { data } = useGetDocument<DTO.Fable>({
    doc: Document.Fable,
    id,
  });

  return (
    <Page>
      <Header collapse="fade">
        <Header.Back pathname={RoutePath.Index} />
      </Header>
      <Content fullscreen>
        <Container aspectRatio={1}>123</Container>
        <Card.Header>
          <Card.Title>{data?.data?.title}</Card.Title>
        </Card.Header>
        <Container padding>
          <Text>
            {data?.data?.content.map((str, index) => <p key={index}>{str}</p>)}
          </Text>
        </Container>
      </Content>
    </Page>
  );
});
