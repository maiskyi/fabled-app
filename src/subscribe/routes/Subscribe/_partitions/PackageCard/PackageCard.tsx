import { memo } from 'react';

import { PurchasesPackage } from '@core/purchases';
import { Card } from '@core/uikit';
import { useTranslation } from '@core/localization';

export const PackageCard = memo<PurchasesPackage>(function PackageCard({
  product,
}: PurchasesPackage) {
  const { t } = useTranslation();

  const { subscriptionPeriod, priceString } = product;

  return (
    <Card>
      <Card.Header>
        <Card.Subtitle>
          {t('help.subscribe', {
            price: priceString,
            subscriptionPeriod: t(
              `constants.subscriptionPeriod.${subscriptionPeriod}.short`
            ),
          })}
        </Card.Subtitle>
        <Card.Title>
          {t(`constants.subscriptionPeriod.${subscriptionPeriod}.full`)}
        </Card.Title>
      </Card.Header>
    </Card>
  );
});
