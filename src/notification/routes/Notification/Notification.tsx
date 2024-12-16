import { Box, Button, Content, Grid, Header, Page, Text } from '@core/uikit';
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
        <Header collapse="condense">
          <Header.Title size="large" wrap>
            {title}
          </Header.Title>
        </Header>
        <Grid>
          <Grid.Row>
            <Grid.Cell>
              <Box padding={16} paddingInline={20}>
                <Text>{message}</Text>
              </Box>
              <Box padding={16} paddingInline={20}>
                <Button onClick={dispatch}>{cta}</Button>
              </Box>
            </Grid.Cell>
          </Grid.Row>
        </Grid>
      </Content>
    </Page>
  );
});
