import { memo } from 'react';

import { Box, Card, Icon } from '@core/uikit';
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
    <Box flex={0}>
      <Card color="secondary" onClick={() => onClick({})}>
        <Card.Header>
          <Card.Subtitle>{t('intro.home')}</Card.Subtitle>
          <Card.Title>{t('actions.createNewFable')}</Card.Title>
        </Card.Header>
        <Card.Footer>
          <Icon name="arrow-forward-outline" size="large" />
        </Card.Footer>
      </Card>
    </Box>
  );
});
