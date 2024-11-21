import { memo } from 'react';

import { Box, Empty } from '@core/uikit';
import { useTranslation } from '@core/localization';

export const FablesEmpty = memo(function FableEmpty() {
  const { t } = useTranslation();

  return (
    <Box
      alignItems="center"
      display="flex"
      flex={1}
      justifyContent="center"
      minHeight="100%"
      paddingBottom={188}
    >
      <Empty
        description={t('empty.noFables.description')}
        icon="book-outline"
        title={t('empty.noFables.title')}
      ></Empty>
    </Box>
  );
});
