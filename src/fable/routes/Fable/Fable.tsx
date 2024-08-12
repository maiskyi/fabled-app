import { memo } from 'react';

import { Content, Header, Page, Container, Text, Card } from '@core/uikit';
import { useRoute } from '@core/navigation';
import { useGetDocument } from '@core/firestore';
import { Document } from '@bootstrap/constants';
import { DTO } from '@bootstrap/dto';

export const Fable = memo(function Fable() {
  const [
    {
      params: { id },
    },
    navigate,
  ] = useRoute<{ id: string }>();

  const { data } = useGetDocument<DTO.Fable>({
    id,
    doc: Document.Fable,
  });

  return (
    <Page>
      <Header collapse="fade">
        <Header.Back onClick={() => navigate({ back: true })} />
      </Header>
      <Content fullscreen>
        <Container aspectRatio={1}>123</Container>
        <Card.Header>
          <Card.Title>{data?.data?.response?.title}</Card.Title>
        </Card.Header>
        <Container padding>
          <Text>{data?.data?.response?.content}</Text>
        </Container>
      </Content>
    </Page>
  );
});
