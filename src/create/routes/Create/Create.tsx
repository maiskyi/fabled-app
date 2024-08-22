import { memo } from 'react';

import {
  Content,
  Header,
  Page,
  Message,
  BOT_AVATAR_SRC,
  Animation,
  View,
} from '@core/uikit';
import { RoutePath } from '@bootstrap/constants';
import { useTranslation } from '@core/localization';
import { useUser } from '@common/hooks';
import { Route } from '@core/navigation';

import { Index } from './Index/Index';

export const Create = memo(function Create() {
  const { t } = useTranslation();
  const { displayName: userDisplayName } = useUser();

  return (
    <Page>
      <Header translucent>
        <Header.Back pathname={RoutePath.Index} />
      </Header>
      <Content>
        <View.DidEnter>
          <Animation.Message>
            <Message
              avatar={BOT_AVATAR_SRC}
              origin="companion"
              title={t('copy.fabledAi')}
            >
              {t('copy.createFableAiGreeting', {
                displayName: userDisplayName,
              })}
            </Message>
          </Animation.Message>
          <Route exact path={RoutePath.Create}>
            <Index />
          </Route>
        </View.DidEnter>
      </Content>
    </Page>
  );
});
