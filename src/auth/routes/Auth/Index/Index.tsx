import { memo } from 'react';

import { Page, Content, Box, Text, Form } from '@core/uikit';
import { useTranslation } from '@core/localization';
import { useMutationFunction } from '@core/functions';
import { FunctionName, RoutePath } from '@bootstrap/constants';
import { DTO } from '@bootstrap/dto';
import { useRoute } from '@core/navigation';

import { FederatedLogin } from '../../../features';

export const Index = memo(function Index() {
  const { t } = useTranslation();
  const [, navigate] = useRoute();

  const { isPending: isCheckEmailPending, mutateAsync: checkIfEmailExist } =
    useMutationFunction<DTO.CheckEmailRequest, DTO.CheckEmailResponse>({
      name: FunctionName.OnCheckEmail,
    });

  const handleOnSubmit = async (form: DTO.CheckEmailRequest) => {
    const { exists, providers } = await checkIfEmailExist(form);
    if (exists && providers.includes(DTO.AuthProvider.Password)) {
      navigate({
        action: 'push',
        pathname: RoutePath.AuthSignIn,
        search: form,
      });
    } else {
      navigate({
        action: 'push',
        pathname: RoutePath.AuthSignUp,
        search: form,
      });
    }
  };

  return (
    <Page>
      <Content fullscreen>
        <Box
          display="flex"
          flexDirection="column"
          height="100%"
          justifyContent="center"
          minHeight="100%"
        >
          <FederatedLogin />
          <Box display="flex" justifyContent="center" padding={4}>
            <Text variant="h3">or</Text>
          </Box>
          <Form<DTO.CheckEmailRequest> onSubmit={handleOnSubmit}>
            <Box display="flex" flexDirection="column" gap={12} padding={20}>
              <Form.Text
                label={t('forms.email')}
                name="email"
                type="email"
                validation={{ email: true, required: true }}
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
