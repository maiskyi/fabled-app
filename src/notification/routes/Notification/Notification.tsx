import { Banner, Box, Content, Grid, Header, Page } from '@core/uikit';
import { useRoute } from '@core/navigation';
import { RoutePath } from '@bootstrap/constants';
import { withLoad } from '@core/analytics';

import {
  NotificationRouteParams,
  NotificationRouteSearch,
} from './Notification.types';
import { useNotification } from './Notification.hooks';

export const Notification = withLoad({
  category: 'Notification',
  name: 'Notification',
})(function Success() {
  const [
    {
      search: { code },
      params: { type },
    },
  ] = useRoute<NotificationRouteParams, NotificationRouteSearch>();

  const [{ cta, title, message }, dispatch] = useNotification({ code, type });

  return (
    <Page>
      <Header translucent>
        <Header.Back pathname={RoutePath.Index} />
      </Header>
      <Content>
        <Box display="flex" flexDirection="column" minHeight="100%">
          <Grid>
            <Grid.Row flex={0}>
              <Grid.Cell>
                <Header collapse="condense" transparent />
              </Grid.Cell>
            </Grid.Row>
            <Grid.Row flex={1}>
              <Grid.Cell>
                <Box
                  alignItems="center"
                  display="flex"
                  flex={1}
                  justifyContent="center"
                  minHeight="100%"
                >
                  <Banner>
                    <Banner.Icon />
                    <Banner.Title>{title}</Banner.Title>
                    <Banner.Description>{message}</Banner.Description>
                    <Banner.Action onClick={dispatch}>{cta}</Banner.Action>
                  </Banner>
                </Box>
              </Grid.Cell>
            </Grid.Row>
          </Grid>
        </Box>
      </Content>
    </Page>
  );
});
