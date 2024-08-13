import { FC } from 'react';
import { noop } from 'lodash';

import { Box, Button, Content, Form, Header, Page, Text } from '@core/uikit';
import { useTranslation } from '@core/localization';
import { useRoute } from '@core/navigation';
import { useSignInWithCredentials, SignInRequest } from '@core/auth';
import { RoutePath } from '@bootstrap/constants';

export const SignIn: FC = () => {
  const { t } = useTranslation();
  const [{ search }, navigate] = useRoute<{}, Partial<SignInRequest>>();

  const title = t('pages.signIn');

  const { isPending, mutateAsync } = useSignInWithCredentials();

  const handleOnSubmit = async (form: SignInRequest) => {
    try {
      await mutateAsync(form, {
        onError: () => {},
        onSuccess: ({ user: { emailVerified } }) => {
          if (!emailVerified) {
            navigate({ action: 'push', pathname: RoutePath.AuthVerifyEmail });
          }
        },
      });
    } catch (error) {
      noop();
    }
  };

  return (
    <Page>
      <Header translucent>
        <Header.Back />
        <Header.Title>{title}</Header.Title>
      </Header>
      <Content>
        <Header collapse="condense">
          <Header.Title size="large">{title}</Header.Title>
        </Header>
        <Box padding={16} paddingInline={20}>
          <Text>{t('intro.signIn')}</Text>
        </Box>
        <Form<SignInRequest> defaultValues={search} onSubmit={handleOnSubmit}>
          <Box padding={16} paddingInline={20}>
            <Form.Text
              name="email"
              label={t('forms.email')}
              validation={{
                email: true,
                required: true,
              }}
            />
            <Form.Password
              name="password"
              label={t('forms.password')}
              validation={{ required: true }}
            />
          </Box>
          <Box
            padding={16}
            display="flex"
            paddingInline={20}
            flexDirection="column"
          >
            <Form.Submit loading={isPending}>{t('actions.signIn')}</Form.Submit>
            <Button fill="clear">{t('actions.forgotPassword')}</Button>
          </Box>
        </Form>
      </Content>
    </Page>
  );
};
