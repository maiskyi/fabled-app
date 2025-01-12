import { useAsyncFn, useMount } from 'react-use';

import {
  AppUpdateProviderFallbackComponent,
  AppUpdateProviderFallbackComponentProps,
} from '@core/app';
import {
  Box,
  Button,
  Content,
  Empty,
  Footer,
  Header,
  Page,
  useSplashScreen,
} from '@core/uikit';
import { useTranslation } from '@core/localization';

import Icon from './AppUpdateFallback.svg?react';

export const AppUpdateFallback: AppUpdateProviderFallbackComponent = ({
  openAppStore,
}: AppUpdateProviderFallbackComponentProps) => {
  const { t } = useTranslation();
  const [, { hide }] = useSplashScreen();

  const [{ loading }, handleOnUpdateNow] = useAsyncFn(() => openAppStore());

  useMount(hide);

  return (
    <Page>
      <Header translucent />
      <Content>
        <Box display="flex" flexDirection="column" minHeight="100%">
          <Box flex={0}>
            <Header collapse="condense">
              <Header.Title size="large" wrap>
                {t('pages.appUpdate')}
              </Header.Title>
            </Header>
          </Box>
          <Box
            alignItems="center"
            display="flex"
            flex={1}
            justifyContent="center"
            minHeight="100%"
          >
            <Empty
              Icon={Icon}
              description={t('empty.appUpdate.description')}
              title={t('empty.appUpdate.title')}
            >
              <Button loading={loading} onClick={handleOnUpdateNow}>
                {t('actions.updateNow')}
              </Button>
            </Empty>
          </Box>
        </Box>
      </Content>
      <Footer />
    </Page>
  );
};
