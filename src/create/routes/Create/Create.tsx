import { memo } from 'react';

import { Content, Header, Page, Card, Box } from '@core/uikit';
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
            <Card>
              <Card.Header>
                <Card.Subtitle>
                  {t('copy.hiUserGreeting', { displayName })}
                </Card.Subtitle>
              </Card.Header>
              <Card.Content>{t('pages.create')}</Card.Content>
            </Card>
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
