import { FC } from 'react';

import { Box, Button, Content, Header, Page, Text } from '@core/uikit';
import { Translate, useTranslation } from '@core/localization';
import { useAuth } from '@core/auth';
import { useRoute } from '@core/navigation';

export const VerifyEmail: FC = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const [, navigate] = useRoute();

  const title = t('pages.verifyEmail');

  return (
    <Page>
      <Header translucent>
        <Header.Back onClick={() => navigate({ back: true })} />
        <Header.Title>{title}</Header.Title>
      </Header>
      <Content>
        <Header collapse="condense">
          <Header.Title size="large">{title}</Header.Title>
        </Header>
        <Box padding={16} paddingInline={20}>
          <Text>
            <Translate id="intro.verifyEmail" values={{ email: user?.email }} />
          </Text>
        </Box>
        <Box padding={16} paddingInline={20}>
          <Button>{t('actions.requestNewLink')}</Button>
        </Box>
      </Content>
    </Page>
  );
};
