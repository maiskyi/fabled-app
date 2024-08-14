import { memo } from 'react';

import { Box, Button, Content, Header, Page, Text } from '@core/uikit';
import { useRoute } from '@core/navigation';
import { useTranslation } from '@core/localization';

import {
  NotificationRouteParams,
  NotificationRouteSearch,
} from './Notification.types';
import { useNotificationCopy } from './Notification.hooks';

export const Notification = memo(function Success() {
  const { t } = useTranslation();
  const [
    {
      search: { back },
      params: { type },
    },
    navigate,
  ] = useRoute<NotificationRouteParams, NotificationRouteSearch>();

  const { title, message } = useNotificationCopy({ type });

  const handleOnOk = () => {
    navigate({ action: 'back', pathname: back });
  };

  return (
    <Page>
      <Header translucent>
        <Header.Back pathname={back} />
      </Header>
      <Content>
        <Header>
          <Header.Title size="large" wrap>
            {title}
          </Header.Title>
        </Header>
        <Box padding={16} paddingInline={20}>
          <Text>{message}</Text>
        </Box>
        <Box padding={16} paddingInline={20}>
          <Button onClick={handleOnOk}>{t('actions.ok')}</Button>
        </Box>
      </Content>
    </Page>
  );
});
