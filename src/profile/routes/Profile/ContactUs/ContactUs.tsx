import { FC } from 'react';

import { Page, Header, Content } from '@core/uikit';
import { useRoute } from '@core/navigation';

export const ContactUs: FC = () => {
  const [, navigate] = useRoute();

  return (
    <Page>
      <Header translucent>
        <Header.Back onClick={() => navigate({ back: true })} />
        <Header.Title>Contact Us</Header.Title>
      </Header>
      <Content fullscreen inset={false}>
        <Header collapse="condense">
          <Header.Title size="large">Contact Us</Header.Title>
        </Header>
      </Content>
    </Page>
  );
};
