import { FC } from 'react';

import { Page, Header, Content } from '@core/uikit';
import { useRoute } from '@core/navigation';

export const Feedback: FC = () => {
  const [, navigate] = useRoute();

  return (
    <Page>
      <Header translucent>
        <Header.Back onClick={() => navigate({ back: true })} />
        <Header.Title>Share your feedback</Header.Title>
      </Header>
      <Content fullscreen inset={false}>
        <Header collapse="condense">
          <Header.Title size="large">Share your feedback</Header.Title>
        </Header>
      </Content>
    </Page>
  );
};
