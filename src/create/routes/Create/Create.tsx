import { memo } from 'react';

import { Content, Header, Page, Box, Message } from '@core/uikit';
import { RoutePath } from '@bootstrap/constants';
import { useTranslation } from '@core/localization';
import { useUserDisplayName } from '@common/hooks';

export const Create = memo(function Create() {
  const { t } = useTranslation();
  const { displayName } = useUserDisplayName();

  return (
    <Page>
      <Header translucent>
        <Header.Back pathname={RoutePath.Index} />
      </Header>
      <Content>
        <Box display="flex" flexDirection="column" minHeight="100%">
          <Box flex={0}>
            <Message
              color="dark"
              title={t('copy.hiUserGreeting', { displayName })}
            >
              {t('pages.create')}
            </Message>
          </Box>
          <Box alignItems="center" display="flex" flex={1}>
            <Header collapse="condense">
              <Header.Title size="large" wrap>
                123
              </Header.Title>
            </Header>
          </Box>
        </Box>
      </Content>
    </Page>
  );
});
