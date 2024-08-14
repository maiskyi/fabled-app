import { memo } from 'react';

import { Box, Content, Form, Header, Page, Text } from '@core/uikit';
import { useTranslation } from '@core/localization';
import { RoutePath } from '@bootstrap/constants';

export const ForgotPassword = memo(function ForgotPassword() {
  const { t } = useTranslation();

  const title = t('pages.forgotPassword');

  return (
    <Page>
      <Header translucent>
        <Header.Back pathname={RoutePath.AuthSignIn} />
        <Header.Title>{title}</Header.Title>
      </Header>
      <Content>
        <Header collapse="condense">
          <Header.Title size="large">{title}</Header.Title>
        </Header>
        <Box padding={16} paddingInline={20}>
          <Text>{t('intro.forgotPassword')}</Text>
        </Box>
        <Form>
          <Box padding={16} paddingInline={20}>
            <Form.Text
              label={t('forms.email')}
              name="email"
              validation={{ email: true, required: true }}
            />
          </Box>
        </Form>
      </Content>
    </Page>
  );
});
