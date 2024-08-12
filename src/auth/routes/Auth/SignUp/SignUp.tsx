import { FC } from 'react';

import { Page, Header, Content, Box, Text, Form } from '@core/uikit';
import { useTranslation } from '@core/localization';
import { useRoute } from '@core/navigation';

export const SignUp: FC = () => {
  const { t } = useTranslation();
  const [, navigate] = useRoute();

  const title = t('pages.signUp');

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
          <Text>{t('intro.signUp')}</Text>
        </Box>
        <Form>
          <Box padding={16} paddingInline={20}>
            <Form.Text
              name="email"
              label={t('forms.email')}
              validation={{ required: true, email: true }}
            />
            <Form.Text
              name="email"
              label={t('forms.password')}
              validation={{ required: true, email: true }}
            />
          </Box>
          <Box padding={16} paddingInline={20}>
            <Form.Submit>{t('actions.signUp')}</Form.Submit>
          </Box>
        </Form>
      </Content>
    </Page>
  );
};
