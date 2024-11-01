import { FC } from 'react';
import { useMount } from 'react-use';

import {
  Box,
  Content,
  Empty,
  Footer,
  Header,
  Page,
  useSplashScreen,
} from '@core/uikit';
import { useTranslation } from '@core/localization';

export const ErrorBoundaryFallback: FC = () => {
  const { t } = useTranslation();
  const [, { hide }] = useSplashScreen();

  useMount(hide);

  return (
    <Page>
      <Header translucent />
      <Content>
        <Box display="flex" flexDirection="column" minHeight="100%">
          <Box flex={0}>
            <Header collapse="condense">
              <Header.Title size="large" wrap>
                {t('pages.errorBoundary')}
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
              description={t('empty.errorBoundary.description')}
              icon="alert-circle-outline"
              title={t('empty.errorBoundary.title')}
              variant="danger"
            ></Empty>
          </Box>
        </Box>
      </Content>
      <Footer />
    </Page>
  );
};
