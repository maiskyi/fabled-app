import { memo } from 'react';

import { Box, Card, Icon, Typography } from '@core/uikit';
import { useTranslation } from '@core/localization';

import { FablesCreateOnClickFn } from './FablesCreate.types';

interface FablesCreateProps {
  onClick: FablesCreateOnClickFn;
}

export const FablesCreate = memo<FablesCreateProps>(function FablesCreate({
  onClick,
}: FablesCreateProps) {
  const { t } = useTranslation();

  return (
    <Card color="horizontal" onClick={() => onClick({})}>
      <Card.Content>
        <Box display="flex" gap={12}>
          <Box flex={0}></Box>
          <Box display="flex" flex={1} flexDirection="column" gap={4}>
            <Typography variant="body-2" weight="semi-bold">
              {t('actions.createNewFable')}
            </Typography>
            <Typography variant="body-4">{t('intro.home')}</Typography>
          </Box>
          <Box flex={0}></Box>
        </Box>
      </Card.Content>
    </Card>
  );
});
