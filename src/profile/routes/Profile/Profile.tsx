import { memo } from 'react';

import { Header, Page, Content, Card } from '@core/uikit';
import { useRoute } from '@core/navigation';
import { useAuth } from '@core/auth';

export const Profile = memo(function Profile() {
  const [, navigate] = useRoute();
  const { user } = useAuth();

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
            <Card.Avatar src={user.photoURL} />
            <Card.Title>{user.displayName}</Card.Title>
            <Card.Subtitle>{user.email}</Card.Subtitle>
          </Card.Header>
        </Card>
      </Content>
    </Page>
  );
});
