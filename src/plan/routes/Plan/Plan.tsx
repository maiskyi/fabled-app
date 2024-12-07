import { FC } from 'react';
import { get } from 'lodash';

import {
  Box,
  Content,
  Form,
  Grid,
  Header,
  Page,
  Text,
  useUtils,
} from '@core/uikit';
import { NotificationType, RoutePath } from '@bootstrap/constants';
import { usePurchases, usePurchaseStoreProduct } from '@core/purchases';
import { useTranslation } from '@core/localization';
import { Redirect, useRoute } from '@core/navigation';
import { withLoad } from '@core/analytics';

import { PackageCard } from './_partitions/PackageCard';
import {
  PlanFrom,
  PlanFromField,
  PlanRouteParams,
  PlanRouteSearch,
} from './Plan.types';
import {
  PLAN_ACTION_MAPPING,
  PLAN_HEADER_MAPPING,
  PLAN_INTRO_MAPPING,
} from './Plan.const';

export const Plan: FC = withLoad({
  category: 'Subscribe',
  name: 'Subscribe',
})(() => {
  const { t } = useTranslation();
  const { toast } = useUtils();
  const { offerings } = usePurchases();
  const [
    {
      search: { productId },
      params: { action, identifier },
    },
  ] = useRoute<PlanRouteParams, PlanRouteSearch>();

  const { isSuccess, isPending, mutate } = usePurchaseStoreProduct();

  const offering = get(offerings, ['all', identifier]);

  const title = t(PLAN_HEADER_MAPPING[action], {
    title: offering?.identifier,
  });

  const hightestMonthlyPrice = offering?.availablePackages?.reduce(
    (acc, { product }) => {
      return product.pricePerMonth > acc ? product.pricePerMonth : acc;
    },
    0
  );

  const handleOnSubmit = ({ product: value }: PlanFrom) => {
    const product = offering.availablePackages.find(
      ({ product: { identifier } }) => identifier === value
    )?.product;
    mutate(
      { product },
      {
        onError: (error) => {
          toast({
            message: error.message,
            variant: 'error',
          });
        },
      }
    );
  };

  if (isSuccess) {
    return (
      <Redirect
        params={{ type: NotificationType.SubscriptionSucceed }}
        pathname={RoutePath.Notification}
      />
    );
  }

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
        <Grid fixed>
          <Grid.Row>
            <Grid.Cell>
              <Box padding={16} paddingInline={20}>
                <Text>{t(PLAN_INTRO_MAPPING[action])}</Text>
              </Box>
              <Form<PlanFrom>
                defaultValues={{ [PlanFromField.Product]: productId }}
                onSubmit={handleOnSubmit}
              >
                <Form.RadioGroup
                  name={PlanFromField.Product}
                  validation={{ required: true }}
                >
                  {offering?.availablePackages.map((item) => {
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
                    {t(PLAN_ACTION_MAPPING[action])}
                  </Form.Submit>
                </Box>
              </Form>
            </Grid.Cell>
          </Grid.Row>
        </Grid>
      </Content>
    </Page>
  );
});
