import { memo } from 'react';

import { Header, Page, Content, Card, List, useUtils } from '@core/uikit';
import { useRoute } from '@core/navigation';
import { useAuth } from '@core/auth';
import { RoutePath } from '@bootstrap/constants';
import { useTranslation } from '@core/localization';

export const Profile = memo(function Profile() {
  const [, navigate] = useRoute();
  const { user, signOut } = useAuth();
  const { confirm } = useUtils();
  const { t } = useTranslation();

  const title = t('pages.profile');

  const userDisplayName = user?.displayName || t('defaults.userDisplayName');

  const handleOnLogout = () => {
    confirm({
      confirmBtn: t('actions.logOut'),
      icon: 'log-out-outline',
      message: t('confirms.logout.message'),
      onConfirm: () => signOut(),
      title: t('confirms.logout.title'),
      variant: 'danger',
    });
  };

  return (
    <Page>
      <Header translucent>
        <Header.Back pathname={RoutePath.Index} />
        <Header.Title>{title}</Header.Title>
      </Header>
      <Content fullscreen inset={false}>
        <Header collapse="condense">
          <Header.Title size="large">{title}</Header.Title>
        </Header>
        <Card>
          <Card.Header>
            <Card.Avatar src={user?.photoUrl} />
            <Card.Title>{userDisplayName}</Card.Title>
            <Card.Subtitle>{user?.email}</Card.Subtitle>
          </Card.Header>
        </Card>
        <List>
          <List.Header>Support</List.Header>
          <List.Item
            button
            onClick={() =>
              navigate({ action: 'push', pathname: RoutePath.ContactUs })
            }
          >
            <List.Icon name="mail-outline" />
            <List.Label>Contact Us</List.Label>
          </List.Item>
          <List.Item
            button
            onClick={() =>
              navigate({ action: 'push', pathname: RoutePath.Feedback })
            }
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
          <List.Item onClick={handleOnLogout}>
            <List.Label color="danger">Log out</List.Label>
          </List.Item>
        </List>
      </Content>
    </Page>
  );
});
