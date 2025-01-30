import { useAsync } from 'react-use';
import { get } from 'lodash';

import {
  PromptToSubscribeComponent,
  usePurchaseStoreProduct,
} from '@core/purchases';
import { useTranslation, Translate } from '@core/localization';
import {
  AttributeList,
  Box,
  Content,
  Footer,
  Form,
  Grid,
  Header,
  Text,
  useUtils,
  Loading,
} from '@core/uikit';
import { Fragment } from 'react/jsx-runtime';
import { NotificationType } from '@bootstrap/constants';

import { PlanFrom, PlanFromField } from './PromptToSubscribe.types';
// import Icon from './PromptToSubscribe.svg?react';
import { PromptToSubscribeOption } from './PromptToSubscribeOption';
import { PromptToSubscribeSubmit } from './PromptToSubscribeSubmit';

interface PromptToSubscribeProps {
  message?: string;
}

export const PromptToSubscribe: PromptToSubscribeComponent<
  PromptToSubscribeProps
> = ({ dismiss, dissmissTimeout, offerings, introEligibility, message }) => {
  const { t } = useTranslation();
  const { toast } = useUtils();

  const { isPending, mutate } = usePurchaseStoreProduct();

  const { value: canClose } = useAsync(async () => {
    return new Promise<boolean>((resolve) => {
      setTimeout(() => resolve(true), dissmissTimeout);
    });
  });

  const packages = get(offerings, ['current', 'availablePackages'], []);

  const defaultProduct = get(packages, [0, 'product', 'identifier']);

  const hightestMonthlyPrice = packages.reduce((acc, { product }) => {
    return product.pricePerMonth > acc ? product.pricePerMonth : acc;
  }, 0);

  const handleOnSubmit = ({ product: value }: PlanFrom) => {
    const product = packages.find(
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
        onSuccess: () => {
          toast({
            message: t(
              `notifications.${NotificationType.SubscriptionSucceed}.message`
            ),
            title: t(
              `notifications.${NotificationType.SubscriptionSucceed}.title`
            ),
            variant: 'success',
          });
          dismiss();
        },
      }
    );
  };

  return (
    <Fragment>
      <Loading isOpen={isPending} />
      <Form<PlanFrom>
        defaultValues={{ [PlanFromField.Product]: defaultProduct }}
        onSubmit={handleOnSubmit}
      >
        <Header translucent>
          {canClose && (
            <Header.Actions slot="end">
              <Header.Action
                icon="close-outline"
                onClick={dismiss}
              ></Header.Action>
            </Header.Actions>
          )}
        </Header>
        <Content scrollY={false}>
          <Box
            display="flex"
            flexDirection="column"
            height="100%"
            minHeight="100%"
          >
            <Grid>
              <Grid.Row flex={0}>
                <Grid.Cell>
                  <Header collapse="condense">
                    <Header.Title size="large" wrap>
                      {t('forms.unlockPremiumFeatures')}
                    </Header.Title>
                  </Header>
                </Grid.Cell>
              </Grid.Row>
              {!!message && (
                <Grid.Row flex={0}>
                  <Grid.Cell>
                    <Box paddingInline={20}>
                      <Text>{message}</Text>
                    </Box>
                  </Grid.Cell>
                </Grid.Row>
              )}
              <Grid.Row flex={1} />
              <Grid.Row flex={0}>
                <Grid.Cell>
                  <Box paddingInline={20}>
                    <AttributeList>
                      <AttributeList.Item>
                        <Translate id="features.ad" />
                      </AttributeList.Item>
                      <AttributeList.Item>
                        <Translate id="features.speed" />
                      </AttributeList.Item>
                      <AttributeList.Item>
                        <Translate id="features.storiesGereric" />
                      </AttributeList.Item>
                    </AttributeList>
                  </Box>
                </Grid.Cell>
              </Grid.Row>
              <Grid.Row flex={0}>
                <Grid.Cell>
                  <Form.RadioGroup
                    name={PlanFromField.Product}
                    validation={{ required: true }}
                  >
                    {packages.map((item) => {
                      return (
                        <PromptToSubscribeOption
                          hightestMonthlyPrice={hightestMonthlyPrice}
                          key={item.identifier}
                          package={item}
                        />
                      );
                    })}
                  </Form.RadioGroup>
                </Grid.Cell>
              </Grid.Row>
            </Grid>
          </Box>
        </Content>
        <Footer>
          <PromptToSubscribeSubmit
            introEligibility={introEligibility}
            packages={packages}
          />
        </Footer>
      </Form>
    </Fragment>
  );
};
