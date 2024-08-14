import { FC } from 'react';

import { Page, Header, Content, Container } from '@core/uikit';
import { Document } from '@bootstrap/constants';
import { useGetDocument } from '@core/firestore';
import { DTO } from '@bootstrap/dto';
import { useRoute } from '@core/navigation';

export const Request: FC = () => {
  const [{ params }] = useRoute<{ id: string }>();

  const { data } = useGetDocument<DTO.Fable>({
    doc: Document.Fable,
    id: params.id,
  });

  return (
    <Page>
      <Header translucent>
        <Header.Back />
        <Header.Title>Your request is being processed...</Header.Title>
      </Header>
      <Content inset={false}>
        <Header collapse="condense">
          <Header.Title size="large">
            Your request is being processed...
          </Header.Title>
        </Header>
        <Container padding>{JSON.stringify(data?.data)}</Container>
      </Content>
    </Page>
  );
};
