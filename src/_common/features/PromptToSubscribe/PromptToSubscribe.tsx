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
  useUtils,
  Loading,
  Typography,
  Page,
  Cover,
  ASSETS,
} from '@core/uikit';
import { NotificationType } from '@bootstrap/constants';
import { APP_NAME } from '@common/constants';

import { PlanFrom, PlanFromField } from './PromptToSubscribe.types';
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
    <Cover
      position="center 20px"
      size="calc(100% - 80px)"
      src={ASSETS.ROBOTS_1_2_3}
    >
      <Page>
        <Loading isOpen={isPending} />
        <Form<PlanFrom>
          defaultValues={{ [PlanFromField.Product]: defaultProduct }}
          onSubmit={handleOnSubmit}
        >
          <Header transparent>
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
                <Grid.Row flex={1}>
                  <Grid.Cell>
                    <Box display="flex" flexDirection="column" height="100%">
                      <Box flex={1} />
                      <Box
                        background="linear-gradient(transparent 0%, rgb(2, 2, 2) 120px)"
                        flex={0}
                        paddingTop={60}
                      >
                        <Box paddingInline={20}>
                          <Typography variant="h3" weight="semi-bold">
                            {message ||
                              t('pages.promptToSubscribe', { name: APP_NAME })}
                          </Typography>
                        </Box>
                        <Box paddingInline={20}>
                          <AttributeList>
                            <AttributeList.Item variant="body-2">
                              <Translate id="features.ad" />
                            </AttributeList.Item>
                            <AttributeList.Item variant="body-2">
                              <Translate id="features.speed" />
                            </AttributeList.Item>
                            <AttributeList.Item variant="body-2">
                              <Translate id="features.storiesGereric" />
                            </AttributeList.Item>
                          </AttributeList>
                        </Box>
                        <Box>
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
                        </Box>
                      </Box>
                    </Box>
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
      </Page>
    </Cover>
  );
};
