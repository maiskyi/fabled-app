import { memo } from 'react';

import { Box, Grid, Banner } from '@core/uikit';
import { useTranslation } from '@core/localization';

export const FablesEmpty = memo(function FableEmpty() {
  const { t } = useTranslation();

  return (
    <Grid.Row flex={1}>
      <Box
        alignItems="center"
        display="flex"
        flex={1}
        justifyContent="center"
        minHeight="100%"
      >
        <Banner>
          <Banner.Image asset="two-robots" />
          <Banner.Title>{t('empty.noFables.title')}</Banner.Title>
          <Banner.Description>
            {t('empty.noFables.description')}
          </Banner.Description>
        </Banner>
      </Box>
    </Grid.Row>
  );
});
