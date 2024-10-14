import { memo } from 'react';

import { PurchasesPackage, SubscriptionPeriod } from '@core/purchases';
import { Card, Form, Icon } from '@core/uikit';
import { useTranslation } from '@core/localization';

import { calcDiscount } from './PackageCard.utils';

import styles from './PackageCard.module.scss';

interface PackageCardProps {
  hightestMonthlyPrice: number;
  package: PurchasesPackage;
}

export const PackageCard = memo<PackageCardProps>(function PackageCard({
  hightestMonthlyPrice,
  package: {
    product: { title, subscriptionPeriod, priceString, pricePerMonth },
    identifier,
  },
}: PackageCardProps) {
  const { t } = useTranslation();

  console.log(pricePerMonth);

  return (
    <Form.RadioGroup.Custom value={identifier}>
      {({ value, onSelect }) => {
        const selected = value === identifier;

        return (
          <div className={styles.root}>
            <Icon
              className={styles.icon}
              color={selected ? 'primary' : 'medium'}
              name={selected ? 'checkmark-circle' : 'ellipse'}
              size="large"
              slot="start"
            />
            <Card onClick={onSelect} outline={selected && 'primary'}>
              <Card.Header className={styles.header}>
                {hightestMonthlyPrice !== pricePerMonth && (
                  <Card.Badge color="danger">
                    {t('help.discountOff', {
                      value: calcDiscount(hightestMonthlyPrice, pricePerMonth),
                    })}
                  </Card.Badge>
                )}
                <Card.Subtitle>
                  {t('help.subscribe', {
                    price: priceString,
                    subscriptionPeriod: t(
                      `constants.subscriptionPeriod.${subscriptionPeriod}.short`
                    ),
                  })}
                </Card.Subtitle>
                <Card.Title className={styles.title}>{title}</Card.Title>
              </Card.Header>
            </Card>
          </div>
        );
      }}
    </Form.RadioGroup.Custom>
  );
});