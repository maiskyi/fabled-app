import { useAsync } from 'react-use';
import { get } from 'lodash';

import { PromptToSubscribeComponent } from '@core/purchases';
import { useTranslation, Translate } from '@core/localization';
import {
  AttributeList,
  Box,
  Content,
  Footer,
  Form,
  Grid,
  Header,
  useDevice,
  Banner,
  Text,
} from '@core/uikit';
import { Fragment } from 'react/jsx-runtime';

import { PlanFrom, PlanFromField } from './PromptToSubscribe.types';
import Icon from './PromptToSubscribe.svg?react';
import { PromptToSubscribeOption } from './PromptToSubscribeOption';
import { PromptToSubscribeSubmit } from './PromptToSubscribeSubmit';

interface PromptToSubscribeProps {
  message?: string;
}

export const PromptToSubscribe: PromptToSubscribeComponent<
  PromptToSubscribeProps
> = ({ dismiss, dissmissTimeout, offerings, introEligibility, message }) => {
  const { t } = useTranslation();
  const { isMobile } = useDevice();

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

  return (
    <Fragment>
      <Form<PlanFrom>
        defaultValues={{ [PlanFromField.Product]: defaultProduct }}
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
              <Grid.Row flex={1}>
                <Grid.Cell>
                  {!isMobile && (
                    <Box
                      alignItems="center"
                      display="flex"
                      flexDirection="column"
                      height="100%"
                      justifyContent="center"
                    >
                      <Banner>
                        <Banner.Svg Component={Icon} />
                      </Banner>
                    </Box>
                  )}
                </Grid.Cell>
              </Grid.Row>
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
                  <Box padding={16} paddingInline={20}>
                    <Form.RadioGroup
                      name={PlanFromField.Product}
                      validation={{ required: true }}
                    >
                      <Box display="flex" flexDirection="column" gap={8}>
                        {packages.map((item) => {
                          return (
                            <PromptToSubscribeOption
                              hightestMonthlyPrice={hightestMonthlyPrice}
                              key={item.identifier}
                              package={item}
                            />
                          );
                        })}
                      </Box>
                    </Form.RadioGroup>
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
    </Fragment>
  );
};
