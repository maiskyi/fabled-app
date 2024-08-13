import { memo } from 'react';
import { useMount } from 'react-use';

import { Box, Button, Content, Header, Page, Text } from '@core/uikit';
import { useRoute } from '@core/navigation';
import { useApplyActionCode, useAuth } from '@core/auth';
import { useTranslation } from '@core/localization';
import { RoutePath } from '@bootstrap/constants';

import { AuthActionModeRouteSearch } from '../Auth.types';

import { useEmailVerificationCopy } from './EmailVerification.hooks';

export const EmailVerification = memo(function Action() {
  const { t } = useTranslation();
  const { isAuthenticated } = useAuth();

  const [
    {
      search: { oobCode },
    },
  ] = useRoute<{}, AuthActionModeRouteSearch>();

  const { isSuccess, isError, error, status, mutate } = useApplyActionCode();

  const { title, message } = useEmailVerificationCopy({
    error,
    status,
  });

  useMount(() =>
    mutate(
      { oobCode },
      {
        onSuccess: () => {},
      }
    )
  );

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
            <Button fill="solid">{t('actions.goToFabledSpace')}</Button>
          )}
          {isAuthenticated && isError && (
            <Button fill="solid">{t('actions.requestNewLink')}</Button>
          )}
          {isError && (
            <Button fill="outline">{t('actions.contactSupport')}</Button>
          )}
        </Box>
      </Content>
    </Page>
  );
});
