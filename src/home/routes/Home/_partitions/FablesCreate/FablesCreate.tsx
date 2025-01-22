import { memo } from 'react';

import { Card, Icon } from '@core/uikit';
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
      <Card.Content></Card.Content>
      {/* <Card.Header>
        <Card.Subtitle>{t('intro.home')}</Card.Subtitle>
        <Card.Title>{t('actions.createNewFable')}</Card.Title>
      </Card.Header>
      <Card.Footer>
        <Icon name="arrow-forward-outline" size="large" />
      </Card.Footer> */}
    </Card>
  );
});
