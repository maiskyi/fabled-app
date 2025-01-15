import { useAsync } from 'react-use';

import {
  PromptToSubscribeComponent,
  PromptToSubscribeComponentProps,
} from '@core/purchases';
import { useTranslation } from '@core/localization';
import {
  AttributeList,
  Box,
  Content,
  Footer,
  Form,
  Grid,
  Header,
} from '@core/uikit';

export const PromptToSubscribe: PromptToSubscribeComponent = ({
  dismiss,
  dissmissTimeout,
}: PromptToSubscribeComponentProps) => {
  const { t } = useTranslation();

  const title = t('forms.unlockPremiumFeatures');

  const { value: canClose } = useAsync(async () => {
    return new Promise<boolean>((resolve) => {
      setTimeout(() => resolve(true), dissmissTimeout);
    });
  });

  return (
    <Form>
      <Header translucent>
        <Header.Title>{title}</Header.Title>
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
                    {title}
                  </Header.Title>
                </Header>
              </Grid.Cell>
            </Grid.Row>
            <Grid.Row flex={1}>
              <Grid.Cell>
                <Box
                  display="flex"
                  flexDirection="column"
                  height="100%"
                  justifyContent="flex-end"
                  paddingInline={20}
                >
                  <AttributeList>
                    <AttributeList.Item>1</AttributeList.Item>
                    <AttributeList.Item>1</AttributeList.Item>
                    <AttributeList.Item>1</AttributeList.Item>
                  </AttributeList>
                </Box>
              </Grid.Cell>
            </Grid.Row>
            <Grid.Row flex={0}>
              <Grid.Cell>
                <Box paddingInline={20}>1</Box>
              </Grid.Cell>
            </Grid.Row>
          </Grid>
        </Box>
      </Content>
      <Footer>
        <Form.Submit color="dark">{t('actions.continue')}</Form.Submit>
      </Footer>
    </Form>
  );
};
