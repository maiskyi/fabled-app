import { FC } from 'react';
import classNames from 'classnames';

import { Badge, Form } from '@core/uikit';
import { PurchasesPackage } from '@core/purchases';
import { useTranslation } from '@core/localization';

import { calcDiscount } from './PromptToSubscribeOption.utils';

import styles from './PromptToSubscribeOption.module.scss';

interface PromptToSubscribeOptionProps {
  hightestMonthlyPrice: number;
  package: PurchasesPackage;
}

export const PromptToSubscribeOption: FC<PromptToSubscribeOptionProps> = ({
  hightestMonthlyPrice,
  package: {
    product: {
      subscriptionPeriod,
      priceString,
      pricePerMonth,
      description,
      identifier,
    },
  },
}) => {
  const { t } = useTranslation();

  return (
    <Form.RadioGroup.Custom value={identifier}>
      {({ value, onSelect }) => {
        const selected = value === identifier;

        return (
          <div
            className={classNames(styles.root, {
              [styles.selected]: selected,
            })}
            onClick={onSelect}
          >
            <div className={styles.left}>
              <h4>
                {t(`constants.subscriptionPeriod.${subscriptionPeriod}.full`)}
              </h4>
              <p>
                {t('help.subscribe', {
                  description,
                  price: priceString,
                  subscriptionPeriod: t(
                    `constants.subscriptionPeriod.${subscriptionPeriod}.short`
                  ),
                })}
              </p>
            </div>
            {hightestMonthlyPrice !== pricePerMonth && (
              <div className={styles.right}>
                <Badge color="danger">
                  {t('help.discountOff', {
                    value: calcDiscount(hightestMonthlyPrice, pricePerMonth),
                  })}
                </Badge>
              </div>
            )}
          </div>
        );

        // return (
        //   <div className={styles.root}>
        //     <Icon
        //       className={styles.icon}
        //       color={selected ? 'primary' : 'medium'}
        //       name={selected ? 'checkmark-circle' : 'ellipse'}
        //       size="large"
        //       slot="start"
        //     />
        //     <Card onClick={onSelect} outline={selected && 'primary'}>
        //       <Card.Header className={styles.header}>
        //         {hightestMonthlyPrice !== pricePerMonth && (
        //           <Card.Badge color="danger">
        //             {t('help.discountOff', {
        //               value: calcDiscount(hightestMonthlyPrice, pricePerMonth),
        //             })}
        //           </Card.Badge>
        //         )}
        //         <Card.Subtitle className={styles.subheader}>
        //           {description}
        //           <br />
        //           {t('help.subscribe', {
        //             description,
        //             price: priceString,
        //             subscriptionPeriod: t(
        //               `constants.subscriptionPeriod.${subscriptionPeriod}.short`
        //             ),
        //           })}
        //         </Card.Subtitle>
        //         <Card.Title className={styles.title}>
        //           {t(`constants.subscriptionPeriod.${subscriptionPeriod}.full`)}
        //         </Card.Title>
        //       </Card.Header>
        //     </Card>
        //   </div>
        // );
      }}
    </Form.RadioGroup.Custom>
  );
};
