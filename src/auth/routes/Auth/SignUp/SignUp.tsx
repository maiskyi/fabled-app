import { FC } from 'react';
import { noop } from 'lodash';

import { Page, Header, Content, Box, Text, Form } from '@core/uikit';
import { useTranslation } from '@core/localization';
import { Redirect, useRoute } from '@core/navigation';
import { useSignUp, SignUpRequest } from '@core/auth';
import { RoutePath } from '@bootstrap/constants';

export const SignUp: FC = () => {
  const { t } = useTranslation();
  const [{ search }, navigate] = useRoute<{}, Partial<SignUpRequest>>();

  const title = t('pages.signUp');

  const { data, mutateAsync } = useSignUp();

  const handleOnSubmit = async (form: SignUpRequest) => {
    try {
      await mutateAsync(form);
    } catch (error) {
      noop();
    }
  };

  if (data.user) {
    return <Redirect pathname={RoutePath.AuthVerifyEmail} />;
  }

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
        <Form<SignUpRequest> defaultValues={search} onSubmit={handleOnSubmit}>
          <Box padding={16} paddingInline={20}>
            <Form.Text
              name="email"
              label={t('forms.email')}
              validation={{ required: true, email: true }}
            />
            <Form.Password
              name="password"
              label={t('forms.password')}
              validation={{ required: true }}
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
