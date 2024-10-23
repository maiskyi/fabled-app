import { useAsyncFn } from 'react-use';

import { AppUpdateProviderFallbackComponent } from '@core/app';
import { Box, Button, Content, Empty, Footer, Header, Page } from '@core/uikit';
import { useTranslation } from '@core/localization';

export const AppUpdateFallback: AppUpdateProviderFallbackComponent = ({
  openAppStore,
}) => {
  const { t } = useTranslation();

  const [{ loading }, handleOnUpdateNow] = useAsyncFn(() => openAppStore());

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
              description={t('empty.appUpdate.description')}
              icon="cloud-download-outline"
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
