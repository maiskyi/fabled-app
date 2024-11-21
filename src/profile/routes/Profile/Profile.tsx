import { entries } from 'lodash';

import {
  Header,
  Page,
  Content,
  List,
  useUtils,
  Text,
  SafeArea,
} from '@core/uikit';
import { useSignOut, useDeleteUser } from '@core/auth';
import { RoutePath } from '@bootstrap/constants';
import { useTranslation } from '@core/localization';
import { withLoad } from '@core/analytics';

import { ProfileUserCard } from './_partitions/ProfileUserCard';
import { useProfileMenu } from './Profile.hooks';

export const Profile = withLoad({
  category: 'Profile',
  name: 'Profile',
})(function Profile() {
  const { confirm, toast } = useUtils();
  const { t } = useTranslation();

  const { mutateAsync: signOut } = useSignOut();
  const { mutateAsync: deleteAccountAsync } = useDeleteUser();

  const { menu, plans } = useProfileMenu();

  const title = t('pages.profile');

  const deleteAccount = async () => {
    await deleteAccountAsync(null, {
      onError: ({ message }) => {
        toast({
          message,
          variant: 'error',
        });
      },
      onSuccess: () => {
        toast({
          message: t('notifications.accountDeletionSucceed.message'),
          title: t('notifications.accountDeletionSucceed.title'),
          variant: 'success',
        });
      },
    });
  };

  const handleOnLogout = () => {
    confirm({
      confirmBtn: t('actions.logOut'),
      icon: 'log-out-outline',
      message: t('confirms.logout.message'),
      onConfirm: () => signOut(),
      title: t('confirms.logout.title'),
      variant: 'primary',
    });
  };

  const handleOnDelete = () => {
    confirm({
      confirmBtn: t('actions.deleteAccount'),
      icon: 'log-out-outline',
      message: t('confirms.deleteAccount.message'),
      onConfirm: () => deleteAccount(),
      title: t('confirms.deleteAccount.title'),
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
        <SafeArea safe={['bottom']}>
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
              <List.Icon name="log-out-outline" />
              <List.Label>{t('actions.logOut')}</List.Label>
            </List.Item>
          </List>
          <List>
            <List.Header />
            <List.Item onClick={handleOnDelete}>
              <List.Label color="danger">
                {t('actions.deleteAccount')}
              </List.Label>
            </List.Item>
          </List>
        </SafeArea>
      </Content>
    </Page>
  );
});
