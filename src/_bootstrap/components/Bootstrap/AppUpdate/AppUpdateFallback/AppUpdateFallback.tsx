import { useAsyncFn, useMount } from 'react-use';

import {
  AppUpdateProviderFallbackComponent,
  AppUpdateProviderFallbackComponentProps,
} from '@core/app';
import {
  Banner,
  Box,
  Content,
  Footer,
  Grid,
  Header,
  Page,
  useSplashScreen,
} from '@core/uikit';
import { useTranslation } from '@core/localization';

export const AppUpdateFallback: AppUpdateProviderFallbackComponent = ({
  openAppStore,
}: AppUpdateProviderFallbackComponentProps) => {
  const { t } = useTranslation();
  const [, { hide }] = useSplashScreen();

  const [{ loading }, handleOnUpdateNow] = useAsyncFn(() => openAppStore());

  useMount(hide);

  return (
    <Page>
      <Header transparent />
      <Content>
        <Box
          display="flex"
          flexDirection="column"
          minHeight="100%"
          paddingInline={20}
        >
          <Grid>
            <Grid.Row flex={1}>
              <Grid.Cell>
                <Box
                  alignItems="center"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  minHeight="100%"
                >
                  <Banner>
                    <Banner.Image asset="two-robots" />
                    <Banner.Title>{t('empty.appUpdate.title')}</Banner.Title>
                    <Banner.Description>
                      {t('empty.appUpdate.description')}
                    </Banner.Description>
                    <Banner.Action
                      loading={loading}
                      onClick={handleOnUpdateNow}
                    >
                      {t('actions.updateNow')}
                    </Banner.Action>
                  </Banner>
                </Box>
              </Grid.Cell>
            </Grid.Row>
          </Grid>
        </Box>
      </Content>
      <Footer />
    </Page>
  );
};
