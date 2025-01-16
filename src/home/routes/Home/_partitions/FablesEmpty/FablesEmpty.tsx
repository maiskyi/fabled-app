import { memo } from 'react';

import { Box, Empty, Grid } from '@core/uikit';
import { useTranslation } from '@core/localization';

import Icon from './FablesEmpty.svg?react';

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
        <Empty
          Icon={Icon}
          description={t('empty.noFables.description')}
          title={t('empty.noFables.title')}
        ></Empty>
      </Box>
    </Grid.Row>
  );
});
