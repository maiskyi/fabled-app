import { FC, useRef } from 'react';

import {
  Box,
  Button,
  Content,
  Form,
  FormInstance,
  Grid,
  Header,
  Page,
  Text,
  useUtils,
} from '@core/uikit';
import { useTranslation } from '@core/localization';
import { useRoute } from '@core/navigation';
import {
  useSignInWithEmailAndPassword,
  SignInWithEmailAndPasswordRequest,
} from '@core/auth';
import { RoutePath } from '@bootstrap/constants';
import { Disclaimer } from '@common/features';
import { withLoad } from '@core/analytics';

export const SignIn: FC = withLoad({
  category: 'Auth',
  name: 'Sign In',
})(() => {
  const { t } = useTranslation();
  const [{ search }, navigate] = useRoute<
    {},
    Partial<SignInWithEmailAndPasswordRequest>
  >();
  const form = useRef<FormInstance<SignInWithEmailAndPasswordRequest>>();
  const { toast } = useUtils();

  const title = t('pages.signIn');

  const { isPending, mutate: signInWithCredentials } =
    useSignInWithEmailAndPassword();

  const handleOnSubmit = (data: SignInWithEmailAndPasswordRequest) => {
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
            pathname: RoutePath.VerifyEmail,
          });
        }
      },
    });
  };

  const handleOnForgotPassword = () => {
    navigate({ action: 'push', pathname: RoutePath.ForgotPassword });
  };

  return (
    <Page>
      <Header translucent>
        <Header.Back pathname={RoutePath.Auth} />
        <Header.Title>{title}</Header.Title>
      </Header>
      <Content>
        <Header collapse="condense">
          <Header.Title size="large">{title}</Header.Title>
        </Header>
        <Grid>
          <Grid.Row>
            <Grid.Cell>
              <Box padding={16} paddingInline={20}>
                <Text>{t('intro.signIn')}</Text>
              </Box>
              <Form<SignInWithEmailAndPasswordRequest>
                defaultValues={search}
                onSubmit={handleOnSubmit}
                ref={form}
              >
                <Box padding={16} paddingInline={20}>
                  <Form.Text
                    icon="mail-outline"
                    label={t('forms.email')}
                    name="email"
                    validation={{
                      email: true,
                      required: true,
                    }}
                  />
                  <Form.Password
                    icon="lock-closed-outline"
                    label={t('forms.password')}
                    name="password"
                    validation={{ required: true }}
                  />
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  padding={16}
                  paddingInline={20}
                >
                  <Form.Submit loading={isPending}>
                    {t('actions.signIn')}
                  </Form.Submit>
                  <Button fill="clear" onClick={handleOnForgotPassword}>
                    {t('actions.forgotPassword')}
                  </Button>
                </Box>
                <Box paddingBottom={12} paddingInline={20} textAlign="center">
                  <Disclaimer />
                </Box>
              </Form>
            </Grid.Cell>
          </Grid.Row>
        </Grid>
      </Content>
    </Page>
  );
});
