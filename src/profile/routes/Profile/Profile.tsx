import { memo } from 'react';
import { entries } from 'lodash';

import { Header, Page, Content, List, useUtils, Text } from '@core/uikit';
import { useSignOut } from '@core/auth';
import { RoutePath } from '@bootstrap/constants';
import { useTranslation } from '@core/localization';

import { ProfileUserCard } from './_partitions/ProfileUserCard';
import { useProfileMenu } from './Profile.hooks';

export const Profile = memo(function Profile() {
  const { confirm } = useUtils();
  const { t } = useTranslation();
  const { mutateAsync: signOut } = useSignOut();

  const { menu, plans } = useProfileMenu();

  const title = t('pages.profile');

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
        <ProfileUserCard />
        {entries(plans).map(([title, items]) => {
          return (
            <List key={title}>
              <List.Header>{title}</List.Header>
              {items.map(({ label, onClick, icon, note }) => (
                <List.Item button={!!onClick} key={label} onClick={onClick}>
                  <List.Icon name={icon} />
                  <List.Label>
                    <Text>{label}</Text>
                    <List.Note>{note}</List.Note>
                  </List.Label>
                </List.Item>
              ))}
            </List>
          );
        })}
        {entries(menu).map(([title, items]) => {
          return (
            <List key={title}>
              <List.Header>{title}</List.Header>
              {items.map(({ label, onClick, icon }) => (
                <List.Item button={!!onClick} key={label} onClick={onClick}>
                  <List.Icon name={icon} />
                  <List.Label>
                    <Text>{label}</Text>
                  </List.Label>
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
