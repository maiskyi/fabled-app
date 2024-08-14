import { FC, useRef } from 'react';

import {
  Box,
  Button,
  Content,
  Form,
  FormInstance,
  Header,
  Page,
  Text,
  useUtils,
} from '@core/uikit';
import { useTranslation } from '@core/localization';
import { useRoute } from '@core/navigation';
import { useSignInWithCredentials, SignInRequest } from '@core/auth';
import { RoutePath } from '@bootstrap/constants';

export const SignIn: FC = () => {
  const { t } = useTranslation();
  const [{ search }, navigate] = useRoute<{}, Partial<SignInRequest>>();
  const form = useRef<FormInstance<SignInRequest>>();
  const { toast } = useUtils();

  const title = t('pages.signIn');

  const { isPending, mutate: signInWithCredentials } =
    useSignInWithCredentials();

  const handleOnSubmit = (data: SignInRequest) => {
    signInWithCredentials(data, {
      onError: ({ title, message, fields }) => {
        if (fields) {
          form.current.setErrors(fields);
        } else {
          toast({ message, title, variant: 'error' });
        }
      },
      onSuccess: ({ user: { emailVerified } }) => {
        if (!emailVerified) {
          navigate({
            action: 'replace',
            pathname: RoutePath.AuthVerifyEmail,
          });
        }
      },
    });
  };

  const handleOnForgotPassword = () => {
    navigate({ action: 'push', pathname: RoutePath.AuthForgotPassword });
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
        <Form<SignInRequest>
          ref={form}
          defaultValues={search}
          onSubmit={handleOnSubmit}
        >
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
            <Button fill="clear" onClick={handleOnForgotPassword}>
              {t('actions.forgotPassword')}
            </Button>
          </Box>
        </Form>
      </Content>
    </Page>
  );
};
