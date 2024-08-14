import { memo } from 'react';

import { Box, Button, Content, Header, Page, Text } from '@core/uikit';
import { useRoute } from '@core/navigation';

import {
  NotificationRouteParams,
  NotificationRouteSearch,
} from './Notification.types';
import { useNotificationCopy } from './Notification.hooks';

export const Notification = memo(function Success() {
  const [
    {
      search: { back, next, code },
      params: { type },
    },
    navigate,
  ] = useRoute<NotificationRouteParams, NotificationRouteSearch>();

  const { cta, title, message } = useNotificationCopy({ code, next, type });

  const handleOnCtaClick = () => {
    navigate({ action: 'replace', pathname: next });
  };

  return (
    <Page>
      <Header translucent>
        <Header.Back pathname={back} />
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
          <Button onClick={handleOnCtaClick}>{cta}</Button>
        </Box>
      </Content>
    </Page>
  );
});
