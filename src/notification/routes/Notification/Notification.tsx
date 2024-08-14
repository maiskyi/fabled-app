import { memo } from 'react';

import { Box, Button, Content, Header, Page, Text } from '@core/uikit';
import { useRoute } from '@core/navigation';
import { RoutePath } from '@bootstrap/constants';

import {
  NotificationRouteParams,
  NotificationRouteSearch,
} from './Notification.types';
import { useNotification } from './Notification.hooks';

export const Notification = memo(function Success() {
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
        <Box padding={16} paddingInline={20}>
          <Text>{message}</Text>
        </Box>
        <Box padding={16} paddingInline={20}>
          <Button onClick={dispatch}>{cta}</Button>
        </Box>
      </Content>
    </Page>
  );
});
