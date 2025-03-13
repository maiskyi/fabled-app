import { FC } from 'react';

import { Box, Button, useUtils } from '@core/uikit';
import { useTranslation } from '@core/localization';
import { useDeleteUser, useSignOut } from '@core/auth';

export const ProfileActions: FC = () => {
  const { t } = useTranslation();
  const { confirm, toast } = useUtils();

  const { mutateAsync: signOut } = useSignOut();
  const { mutateAsync: deleteAccountAsync } = useDeleteUser();

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
      icon: 'trash-2',
      message: t('confirms.deleteAccount.message'),
      onConfirm: () => deleteAccount(),
      title: t('confirms.deleteAccount.title'),
      variant: 'secondary',
    });
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={8}
      marginTop={32}
      paddingInline={20}
    >
      <Button block fill="outline" onClick={handleOnLogout} size="small">
        {t('actions.logOut')}
      </Button>
      <Button
        block
        color="secondary"
        fill="outline"
        onClick={handleOnDelete}
        size="small"
      >
        {t('actions.deleteAccount')}
      </Button>
    </Box>
  );
};
