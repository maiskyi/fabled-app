import { memo } from 'react';
import { entries } from 'lodash';

import { Header, Page, Content, Card, List, useUtils } from '@core/uikit';
import { useAuth, useSignOut } from '@core/auth';
import { RoutePath } from '@bootstrap/constants';
import { useTranslation } from '@core/localization';

import { useProfileMenu } from './Profile.hooks';

export const Profile = memo(function Profile() {
  const { user } = useAuth();
  const { confirm } = useUtils();
  const { t } = useTranslation();
  const { mutateAsync: signOut } = useSignOut();

  const { menu } = useProfileMenu();

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
        {entries(menu).map(([title, items]) => {
          return (
            <List key={title}>
              <List.Header>{title}</List.Header>
              {items.map(({ label, onClick, icon }) => (
                <List.Item button key={label} onClick={onClick}>
                  <List.Icon name={icon} />
                  <List.Label>{label}</List.Label>
                </List.Item>
              ))}
            </List>
          );
        })}
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
