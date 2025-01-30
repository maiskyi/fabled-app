import { FC } from 'react';

import { Badge, Box, Card, Form, Typography } from '@core/uikit';
import { PurchasesPackage } from '@core/purchases';
import { useTranslation } from '@core/localization';

import { calcDiscount } from './PromptToSubscribeOption.utils';

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
          <Card onClick={onSelect} outline={selected}>
            <Card.Content>
              <Box display="flex">
                <Box display="flex" flex={1} flexDirection="column" gap={4}>
                  <Typography variant="body-2" weight="bold">
                    {t('help.subscribe', {
                      description,
                      price: priceString,
                      subscriptionPeriod: t(
                        `constants.subscriptionPeriod.${subscriptionPeriod}.short`
                      ),
                    })}
                  </Typography>
                  <Typography variant="body-4">
                    {t(
                      `constants.subscriptionPeriod.${subscriptionPeriod}.full`
                    )}
                  </Typography>
                </Box>
                {hightestMonthlyPrice !== pricePerMonth && (
                  <Box flex={0}>
                    <Badge color="secondary">
                      {t('help.discountOff', {
                        value: calcDiscount(
                          hightestMonthlyPrice,
                          pricePerMonth
                        ),
                      })}
                    </Badge>
                  </Box>
                )}
              </Box>
            </Card.Content>
          </Card>
        );
      }}
    </Form.RadioGroup.Custom>
  );
};
