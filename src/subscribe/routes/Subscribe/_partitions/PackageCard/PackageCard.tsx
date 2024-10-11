import { memo } from 'react';

import { PurchasesPackage } from '@core/purchases';
import { Card, Form, Icon } from '@core/uikit';
import { useTranslation } from '@core/localization';

import styles from './PackageCard.module.scss';

export const PackageCard = memo<PurchasesPackage>(function PackageCard({
  product,
  identifier,
}: PurchasesPackage) {
  const { t } = useTranslation();

  const { subscriptionPeriod, priceString } = product;

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
                <Card.Subtitle>
                  {t('help.subscribe', {
                    price: priceString,
                    subscriptionPeriod: t(
                      `constants.subscriptionPeriod.${subscriptionPeriod}.short`
                    ),
                  })}
                </Card.Subtitle>
                <Card.Title className={styles.title}>
                  {t(`constants.subscriptionPeriod.${subscriptionPeriod}.full`)}
                </Card.Title>
              </Card.Header>
            </Card>
          </div>
        );
      }}
    </Form.RadioGroup.Custom>
  );
});
