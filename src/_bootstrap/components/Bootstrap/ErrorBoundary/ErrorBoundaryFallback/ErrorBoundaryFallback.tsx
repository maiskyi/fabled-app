import { FC } from 'react';
import { useMount } from 'react-use';

import { Banner, Box, Content, Page, useSplashScreen } from '@core/uikit';
import { useTranslation } from '@core/localization';

export const ErrorBoundaryFallback: FC = () => {
  const { t } = useTranslation();
  const [, { hide }] = useSplashScreen();

  useMount(hide);

  return (
    <Page>
      <Content scrollY={false}>
        <Box
          alignItems="center"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          minHeight="100%"
        >
          <Banner>
            <Banner.Image asset="robot-3" />
            <Banner.Title>{t('empty.errorBoundary.title')}</Banner.Title>
            <Banner.Description>
              {t('empty.errorBoundary.description')}
            </Banner.Description>
          </Banner>
        </Box>
      </Content>
    </Page>
  );
};
