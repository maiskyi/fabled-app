import { FC } from 'react';

import {
  Box,
  Button,
  Content,
  Divider,
  Grid,
  Header,
  Page,
  SafeArea,
  Typography,
  useUtils,
} from '@core/uikit';
import { useTranslation } from '@core/localization';
import { useRoute } from '@core/navigation';
import {
  AuthError,
  SignInWithEmailAndPasswordRequest,
  useSignInWithApple,
  useSignInWithGoogle,
} from '@core/auth';
import { RoutePath } from '@bootstrap/constants';
import { Disclaimer } from '@common/features';
import { withLoad } from '@core/analytics';

export const SignIn: FC = withLoad({
  category: 'Auth',
  name: 'Sign In',
})(() => {
  const { t } = useTranslation();
  const { toast } = useUtils();

  const [, navigate] = useRoute<
    {},
    Partial<SignInWithEmailAndPasswordRequest>
  >();

  const title = t('pages.signIn');

  const { isPending: isSigningInWithGoogle, mutate: signInWithGoogle } =
    useSignInWithGoogle();

  const { isPending: isSigningInWithApple, mutate: signInWithApple } =
    useSignInWithApple();

  const signInErrorHandler = ({ title, message }: AuthError) => {
    toast({ message, title, variant: 'error' });
  };

  const handleOnSignInWithGoogle = () => {
    signInWithGoogle(undefined, {
      onError: (error) => signInErrorHandler(error),
    });
  };

  const handleOnSignInWithApple = () => {
    signInWithApple(undefined, {
      onError: (error) => signInErrorHandler(error),
    });
  };

  const handleOnContactUs = () => {
    navigate({
      action: 'push',
      pathname: RoutePath.ContactUs,
    });
  };

  return (
    <Page>
      <Header translucent>
        <Header.Title>{title}</Header.Title>
        <Header.Buttons>
          <Header.Button icon="help-buoy-outline" onClick={handleOnContactUs} />
        </Header.Buttons>
      </Header>
      <Content scrollY={false}>
        <Box display="flex" flexDirection="column" minHeight="100%">
          <Grid>
            <Grid.Row flex={0}>
              <Grid.Cell>
                <Header collapse="condense">
                  <Header.Title size="large" wrap>
                    {title}
                  </Header.Title>
                </Header>
              </Grid.Cell>
            </Grid.Row>
            <Grid.Row flex={1}>
              <Grid.Cell></Grid.Cell>
            </Grid.Row>
            <Grid.Row flex={0}>
              <Grid.Cell>
                <SafeArea
                  background="var(--color-bnw-800)"
                  borderRadius="24px 24px 0px 0px"
                  paddingInline={20}
                  paddingTop={32}
                  safe={['bottom']}
                >
                  <Box display="flex" flexDirection="column" gap={80}>
                    <Box display="flex" flexDirection="column" gap={32}>
                      <Box>
                        <Divider>
                          <Typography variant="body-3">
                            {t('forms.signInUpWith')}
                          </Typography>
                        </Divider>
                      </Box>
                      <Box display="flex" gap={40} justifyContent="center">
                        <Button.Social
                          loading={isSigningInWithGoogle}
                          name="google"
                          onClick={handleOnSignInWithGoogle}
                        />
                        <Button.Social
                          loading={isSigningInWithApple}
                          name="apple"
                          onClick={handleOnSignInWithApple}
                        />
                      </Box>
                    </Box>
                    <Box textAlign="center">
                      <Disclaimer />
                    </Box>
                  </Box>
                </SafeArea>
              </Grid.Cell>
            </Grid.Row>
          </Grid>
        </Box>
      </Content>
    </Page>
  );
});
