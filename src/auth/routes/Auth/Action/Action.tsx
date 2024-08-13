import { memo } from 'react';

import { Box, Button, Content, Header, Page, Text } from '@core/uikit';
import { Redirect, useRoute } from '@core/navigation';
import { AuthActionMode } from '@core/auth';
import { useTranslation } from '@core/localization';
import { RoutePath } from '@bootstrap/constants';

import { AuthActionRouteSearch } from '../Auth.types';

export const Action = memo(function Action() {
  const { t } = useTranslation();

  const title = t('pages.action');

  const [
    {
      search: { mode, ...search },
    },
    navigate,
  ] = useRoute<{}, AuthActionRouteSearch>();

  if (mode === AuthActionMode.VerifyEmail) {
    return (
      <Redirect pathname={RoutePath.AuthEmailVerification} search={search} />
    );
  }

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
          <Text>{t('intro.action')}</Text>
        </Box>
        <Box padding={16} paddingInline={20}>
          <Button
            onClick={() =>
              navigate({ action: 'push', pathname: RoutePath.ContactUs })
            }
          >
            {t('actions.contactSupport')}
          </Button>
        </Box>
      </Content>
    </Page>
  );
});
