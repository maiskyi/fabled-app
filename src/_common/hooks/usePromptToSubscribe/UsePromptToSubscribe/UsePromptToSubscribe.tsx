import { FC } from 'react';
import { useAsync } from 'react-use';

import { Box, Content, Footer, Grid, Header, Page, Form } from '@core/uikit';
import { useTranslation } from '@core/localization';

import { DISMISS_TIMEOUT } from '../usePromptToSubscribe.const';

interface UsePromptToSubscribeProps {
  dismiss: () => void;
}

export const UsePromptToSubscribe: FC<UsePromptToSubscribeProps> = ({
  dismiss,
}) => {
  const { t } = useTranslation();

  const title = t('forms.unlockPremiumFeatures');

  const { value: canClose } = useAsync(async () => {
    return new Promise<boolean>((resolve) => {
      setTimeout(() => resolve(true), DISMISS_TIMEOUT);
    });
  });

  return (
    <Form>
      <Page>
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
                <Grid.Cell>1</Grid.Cell>
              </Grid.Row>
              <Grid.Row flex={0}>
                <Grid.Cell>1</Grid.Cell>
              </Grid.Row>
            </Grid>
          </Box>
        </Content>
        <Footer>
          <Form.Submit>123</Form.Submit>
        </Footer>
      </Page>
    </Form>
  );
};
