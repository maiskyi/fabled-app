import { memo } from 'react';
import { useAsyncFn } from 'react-use';

import {
  Box,
  Button,
  Content,
  Header,
  Page,
  Text,
  useUtils,
  useViewDidEnter,
} from '@core/uikit';
import { useRoute } from '@core/navigation';
import {
  useApplyActionCode,
  useAuth,
  useSendEmailVerification,
} from '@core/auth';
import { useTranslation } from '@core/localization';
import { RoutePath } from '@bootstrap/constants';

import { AuthActionModeRouteSearch } from '../Auth.types';

import { useEmailVerificationCopy } from './EmailVerification.hooks';

export const EmailVerification = memo(function Action() {
  const { t } = useTranslation();
  const { isAuthenticated, reload } = useAuth();
  const { toast } = useUtils();

  const [{ loading: isReloadingUser }, reloadUser] = useAsyncFn(() => reload());

  const [
    {
      search: { oobCode },
    },
    navigate,
  ] = useRoute<{}, AuthActionModeRouteSearch>();

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

  const handleOnGoToFabledSpace = () => {
    reloadUser();
  };

  const handleOnRequestNewLink = async () => {
    sendEmailVerification(undefined, {
      onError: () =>
        toast({
          message: t('notifications.sendVerificationLinkFailed.message'),
          title: t('notifications.sendVerificationLinkFailed.title'),
          variant: 'error',
        }),
      onSuccess: () =>
        toast({
          message: t('notifications.sendVerificationLinkSucceed.message'),
          title: t('notifications.sendVerificationLinkSucceed.title'),
          variant: 'success',
        }),
    });
  };

  useViewDidEnter(() => applyActionCode({ oobCode }));

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
              loading={isReloadingUser}
              onClick={handleOnGoToFabledSpace}
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
