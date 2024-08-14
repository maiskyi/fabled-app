import { memo } from 'react';

import { Box, Button, Content, Form, Header, Page, Text } from '@core/uikit';
import { useTranslation } from '@core/localization';
import { RoutePath } from '@bootstrap/constants';
import { useRoute } from '@core/navigation';

export const ForgotPassword = memo(function ForgotPassword() {
  const { t } = useTranslation();
  const [, navigate] = useRoute();

  const title = t('pages.forgotPassword');

  const handleOnContactSupport = () => {
    navigate({ action: 'push', pathname: RoutePath.ContactUs });
  };

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
          <Box
            display="flex"
            flexDirection="column"
            gap={12}
            padding={16}
            paddingInline={20}
          >
            <Form.Submit>{t('actions.sendResetLink')}</Form.Submit>
            <Button fill="outline" onClick={handleOnContactSupport}>
              {t('actions.contactSupport')}
            </Button>
          </Box>
        </Form>
      </Content>
    </Page>
  );
});
