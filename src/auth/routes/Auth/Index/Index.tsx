import { memo } from 'react';

import { Page, Content, Box, Text, Button, Divider } from '@core/uikit';
import { Translate, useTranslation } from '@core/localization';
import { LegalType, RoutePath } from '@bootstrap/constants';
import { Link, useRoute } from '@core/navigation';

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
          <Box display="flex" flex={0} flexDirection="column" gap={12}>
            <Box display="flex" gap={12}>
              <Box flex={1}>
                <Button onClick={handleOnSignIn}>{t('actions.signIn')}</Button>
              </Box>
              <Box flex={1}>
                <Button onClick={handleOnSignUp}>{t('actions.signUp')}</Button>
              </Box>
            </Box>
            <Box paddingInline={26}>
              <Divider>{t('forms.or')}</Divider>
            </Box>
            <Box>
              <FederatedLogin />
            </Box>
            <Box paddingBottom={12} paddingTop={12} textAlign="center">
              <Text>
                <Translate
                  components={{
                    privacy: (
                      <Link
                        params={{ id: LegalType.PrivacyPolicy }}
                        pathname={RoutePath.Legal}
                      />
                    ),
                    terms: (
                      <Link
                        params={{ id: LegalType.TermsAndConditions }}
                        pathname={RoutePath.Legal}
                      />
                    ),
                  }}
                  id="copy.agreeToTermsAndPolicy"
                />
              </Text>
            </Box>
          </Box>
        </Box>
      </Content>
    </Page>
  );
});
