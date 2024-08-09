import { memo } from 'react';

import { Header, Page, Content, Card, List } from '@core/uikit';
import { useRoute } from '@core/navigation';
import { useAuth } from '@core/auth';
import { RoutePath } from '@bootstrap/constants';

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
        <List>
          <List.Header>Support</List.Header>
          <List.Item
            button
            onClick={() => navigate({ pathname: RoutePath.ContactUs })}
          >
            <List.Icon name="mail-outline" />
            <List.Label>Contact Us</List.Label>
          </List.Item>
          <List.Item
            button
            onClick={() => navigate({ pathname: RoutePath.ProfileFeedback })}
          >
            <List.Icon name="chatbox-ellipses-outline" />
            <List.Label>Share your feedback</List.Label>
          </List.Item>
        </List>
        <List>
          <List.Header>Legal</List.Header>
          <List.Item button>
            <List.Icon name="book-outline" />
            <List.Label>Terms and conditions</List.Label>
          </List.Item>
          <List.Item button>
            <List.Icon name="book-outline" />
            <List.Label>Privacy policy</List.Label>
          </List.Item>
        </List>
        <List>
          <List.Header />
          <List.Item>
            <List.Label color="danger">Log out</List.Label>
          </List.Item>
        </List>
      </Content>
    </Page>
  );
});
