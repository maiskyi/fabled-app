import { memo } from 'react';
import { useMount } from 'react-use';

import {
  Box,
  Button,
  Content,
  Header,
  Page,
  Text,
  useUtils,
} from '@core/uikit';
import { useRoute } from '@core/navigation';
import {
  useApplyActionCode,
  useAuth,
  useGetCurrentUser,
  useSendEmailVerification,
} from '@core/auth';
import { useTranslation } from '@core/localization';
import { RoutePath } from '@bootstrap/constants';

import { AuthActionModeRouteSearch } from '../Auth.types';

import { useEmailVerificationCopy } from './EmailVerification.hooks';

export const EmailVerification = memo(function Action() {
  const { t } = useTranslation();
  const { isAuthenticated } = useAuth();
  const { toast } = useUtils();

  const [
    {
      search: { oobCode },
    },
    navigate,
  ] = useRoute<{}, AuthActionModeRouteSearch>();

  const { isPending: isGettingCurrentUser, mutate: getCurrentUser } =
    useGetCurrentUser();

  const {
    mutate: sendEmailVerification,
    isPending: isSendingEmailVerification,
  } = useSendEmailVerification();

  const {
    status,
    isError,
    isSuccess,
    mutate: applyActionCode,
  } = useApplyActionCode();

  const { title, message } = useEmailVerificationCopy({
    status,
  });

  const handleOnContactSupport = () => {
    navigate({ action: 'push', pathname: RoutePath.ContactUs });
  };

  const handleSignIn = () => {
    navigate({ action: 'push', pathname: RoutePath.AuthSignIn });
  };

  const handleOnRequestNewLink = async () => {
    sendEmailVerification(undefined, {
      onSuccess: () =>
        toast({
          variant: 'success',
          title: t('notifications.sendVerificationLinkSucceed.title'),
          message: t('notifications.sendVerificationLinkSucceed.message'),
        }),
      onError: () =>
        toast({
          variant: 'success',
          title: t('notifications.sendVerificationLinkFailed.title'),
          message: t('notifications.sendVerificationLinkFailed.message'),
        }),
    });
  };

  useMount(() => applyActionCode({ oobCode }));

  return (
    <Page>
      <Header translucent>
        <Header.Back pathname={RoutePath.Auth} />
        <Header.Title>{title}</Header.Title>
      </Header>
      <Content>
        <Header collapse="condense">
          <Header.Title wrap size="large">
            {title}
          </Header.Title>
        </Header>
        <Box padding={16} paddingInline={20}>
          <Text>{message}</Text>
        </Box>
        <Box
          gap={12}
          padding={16}
          display="flex"
          paddingInline={20}
          flexDirection="column"
        >
          {isAuthenticated && isSuccess && (
            <Button
              fill="solid"
              loading={isGettingCurrentUser}
              onClick={() => getCurrentUser()}
            >
              {t('actions.goToFabledSpace')}
            </Button>
          )}
          {!isAuthenticated && isSuccess && (
            <Button fill="solid" onClick={handleSignIn}>
              {t('actions.signIn')}
            </Button>
          )}
          {isAuthenticated && isError && (
            <Button
              fill="solid"
              onClick={handleOnRequestNewLink}
              loading={isSendingEmailVerification}
            >
              {t('actions.requestNewLink')}
            </Button>
          )}
          {isError && (
            <Button fill="outline" onClick={handleOnContactSupport}>
              {t('actions.contactSupport')}
            </Button>
          )}
        </Box>
      </Content>
    </Page>
  );
});
