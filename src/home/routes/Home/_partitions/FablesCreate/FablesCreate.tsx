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
        <Box alignItems="center" display="flex" gap={12}>
          <Box display="flex" flex={0}>
            <Icon fontSize={28} name="feather" />
          </Box>
          <Box display="flex" flex={1} flexDirection="column" gap={4}>
            <Typography variant="body-2" weight="semi-bold">
              {t('actions.createNewFable')}
            </Typography>
            <Typography variant="body-4">{t('intro.home')}</Typography>
          </Box>
          <Box display="flex" flex={0}>
            <Icon fontSize={24} name="chevron-right" />
          </Box>
        </Box>
      </Card.Content>
    </Card>
  );
});
