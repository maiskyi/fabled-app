import { memo } from 'react';

import { Page, Content, Box, Text, Button } from '@core/uikit';
import { useTranslation } from '@core/localization';
import { RoutePath } from '@bootstrap/constants';
import { useRoute } from '@core/navigation';

import { FederatedLogin } from '../../../features';

export const Index = memo(function Index() {
  const { t } = useTranslation();

  const [, navigate] = useRoute();

  const handleOnSignIn = () => {
    navigate({ action: 'push', pathname: RoutePath.AuthSignIn });
  };

  const handleOnSignUp = () => {
    navigate({ action: 'push', pathname: RoutePath.AuthSignUp });
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
          padding={20}
        >
          <Box
            alignItems="center"
            display="flex"
            flex={1}
            justifyContent="center"
          >
            Logo goes here
          </Box>
          <Box display="flex" flex={0} flexDirection="column">
            <Box display="flex" gap={12}>
              <Box flex={1}>
                <Button onClick={handleOnSignIn}>{t('actions.signIn')}</Button>
              </Box>
              <Box flex={1}>
                <Button onClick={handleOnSignUp}>{t('actions.signUp')}</Button>
              </Box>
            </Box>
            <Box display="flex" justifyContent="center">
              <Text variant="h3">or</Text>
            </Box>
            <Box>
              <FederatedLogin />
            </Box>
          </Box>
        </Box>
      </Content>
    </Page>
  );

  // return (
  //   <Page>
  //     <Content fullscreen>
  //       <Box
  //         display="flex"
  //         flexDirection="column"
  //         height="100%"
  //         justifyContent="center"
  //         minHeight="100%"
  //       >
  //         <FederatedLogin />
  //         <Box display="flex" justifyContent="center" padding={4}>
  //           <Text variant="h3">or</Text>
  //         </Box>
  //         <Form<DTO.CheckEmailRequest> onSubmit={handleOnSubmit}>
  //           <Box display="flex" flexDirection="column" gap={12} padding={20}>
  //             <Form.Text
  //               label={t('forms.email')}
  //               name="email"
  //               type="email"
  //               validation={{ email: true, required: true }}
  //             />
  //             <Form.Submit loading={isCheckEmailPending}>
  //               {t('actions.continue')}
  //             </Form.Submit>
  //           </Box>
  //         </Form>
  //       </Box>
  //     </Content>
  //   </Page>
  // );
});
