import { memo } from 'react';

import { Page, Content, Box, Button, Divider, Header } from '@core/uikit';
import { useTranslation } from '@core/localization';
import { RoutePath } from '@bootstrap/constants';
import { useRoute } from '@core/navigation';
import { Disclaimer } from '@common/features';

import { FederatedLogin } from '../../features';

export const Auth = memo(function Index() {
  const { t } = useTranslation();

  const [, navigate] = useRoute();

  const handleOnSignIn = () => {
    navigate({
      action: 'push',
      pathname: RoutePath.SignIn,
    });
  };

  const handleOnSignUp = () => {
    navigate({
      action: 'push',
      pathname: RoutePath.SignUp,
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
        <Header.Actions>
          <Header.Action
            icons="help-buoy-outline"
            onClick={handleOnContactUs}
          />
        </Header.Actions>
      </Header>
      <Content>
        <Box
          display="flex"
          flexDirection="column"
          height="100%"
          justifyContent="center"
          minHeight="100%"
          padding={20}
        >
          <Header collapse="condense" />
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
                <Button color="tertiary" onClick={handleOnSignIn}>
                  {t('actions.signIn')}
                </Button>
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
              <Disclaimer />
            </Box>
          </Box>
        </Box>
      </Content>
    </Page>
  );
});
