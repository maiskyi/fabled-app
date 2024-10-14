import { FC } from 'react';

import { Box, Content, Form, Header, Page, Text } from '@core/uikit';
import { RoutePath } from '@bootstrap/constants';
import { usePurchases, usePurchaseStoreProduct } from '@core/purchases';
import { useTranslation } from '@core/localization';

import { PackageCard } from './_partitions/PackageCard';
import { SubscribeFrom, SubscribeFromField } from './Subscribe.types';

export const Subscribe: FC = () => {
  const { t } = useTranslation();
  const { offering, activeSubscriptions } = usePurchases();

  const { isPending, mutate } = usePurchaseStoreProduct();

  const title = t('pages.subscribe');

  const defaultValues: SubscribeFrom = {
    [SubscribeFromField.Product]: offering.availablePackages[0].identifier,
  };

  const hightestMonthlyPrice = offering.availablePackages.reduce(
    (acc, { product }) => {
      return product.pricePerMonth > acc ? product.pricePerMonth : acc;
    },
    0
  );

  const handleOnSubmit = ({ product: value }: SubscribeFrom) => {
    const product = offering.availablePackages.find(
      ({ identifier }) => identifier === value
    )?.product;
    mutate(
      { product },
      {
        onError: (...args) => {
          console.log(...args);
        },
        onSuccess: () => {},
      }
    );
  };

  return (
    <Page>
      <Header translucent>
        <Header.Back pathname={RoutePath.Index} />
        <Header.Title>{title}</Header.Title>
      </Header>
      <Content>
        <Header collapse="condense">
          <Header.Title size="large" wrap>
            {title}
          </Header.Title>
        </Header>
        <Box padding={16} paddingInline={20}>
          <Text>{t('intro.subscribe')}</Text>
        </Box>
        <Form<SubscribeFrom>
          defaultValues={defaultValues}
          onSubmit={handleOnSubmit}
        >
          <Form.RadioGroup name={SubscribeFromField.Product}>
            {offering.availablePackages.map((item) => {
              return (
                <PackageCard
                  hightestMonthlyPrice={hightestMonthlyPrice}
                  key={item.identifier}
                  package={item}
                  {...item}
                />
              );
            })}
          </Form.RadioGroup>
          <Box
            display="flex"
            flexDirection="column"
            padding={16}
            paddingInline={20}
          >
            <Form.Submit loading={isPending}>
              {t('actions.subscribe')}
            </Form.Submit>
          </Box>
        </Form>
      </Content>
    </Page>
  );
};
