import { memo } from 'react';

import { Header, Page, Content, Card } from '@core/uikit';
import { useRoute } from '@core/navigation';

export const Profile = memo(function Profile() {
  const [, navigate] = useRoute();

  return (
    <Page>
      <Header translucent>
        <Header.Back onClick={() => navigate({ back: true })} />
        <Header.Title>Profile</Header.Title>
      </Header>
      <Content fullscreen inset={false}>
        <Header collapse="condense">
          <Header.Title size="large">Profile</Header.Title>
        </Header>
        <Card>
          <Card.Header>
            <Card.Title>123</Card.Title>
            <Card.Subtitle>123</Card.Subtitle>
          </Card.Header>
        </Card>
      </Content>
    </Page>
  );
});
