import { memo } from 'react';

import { Page, Content, Button, Box, Text, Form } from '@core/uikit';
import { useGoogleSignIn } from '@core/auth';
import { useTranslation } from '@core/localization';
import { useMutationFunction } from '@core/functions';
import { FunctionName, RoutePath } from '@bootstrap/constants';
import { DTO } from '@bootstrap/dto';
import { useRoute } from '@core/navigation';

export const Index = memo(function Index() {
  const { t } = useTranslation();
  const [, navigate] = useRoute();
  const [{ loading }, signInWithGoogle] = useGoogleSignIn();

  const { isPending: isCheckEmailPending, mutateAsync: checkIfEmailExist } =
    useMutationFunction<DTO.CheckEmailRequest, DTO.CheckEmailResponse>({
      name: FunctionName.OnCheckEmail,
    });

  const handleOnSubmit = async (form: DTO.CheckEmailRequest) => {
    const { exists, providers } = await checkIfEmailExist(form);
    if (exists && providers.includes(DTO.AuthProvider.Password)) {
      navigate({ pathname: RoutePath.AuthSignIn });
    } else {
      navigate({ pathname: RoutePath.AuthSignUp, search: form });
    }
  };

  return (
    <Page>
      <Content fullscreen>
        <Box
          height="100%"
          display="flex"
          minHeight="100%"
          flexDirection="column"
          justifyContent="center"
        >
          <Box padding={20} display="flex" flexDirection="column" gap={8}>
            <Button.Social
              name="google"
              expand="block"
              loading={loading}
              onClick={signInWithGoogle}
            >
              {t('actions.continueWithGoogle')}
            </Button.Social>
            <Button.Social name="apple" expand="block">
              {t('actions.continueWithApple')}
            </Button.Social>
            <Button.Social name="facebook" expand="block">
              {t('actions.continueWithFacebook')}
            </Button.Social>
          </Box>
          <Box padding={4} display="flex" justifyContent="center">
            <Text variant="h3">or</Text>
          </Box>
          <Form<DTO.CheckEmailRequest> onSubmit={handleOnSubmit}>
            <Box padding={20} display="flex" flexDirection="column" gap={12}>
              <Form.Text
                type="email"
                name="email"
                label={t('forms.email')}
                validation={{ required: true, email: true }}
              />
              <Form.Submit loading={isCheckEmailPending}>
                {t('actions.continue')}
              </Form.Submit>
            </Box>
          </Form>
        </Box>
      </Content>
    </Page>
  );
});
