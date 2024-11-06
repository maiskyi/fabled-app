import { memo, useCallback, useRef } from 'react';

import {
  Content,
  Header,
  Page,
  Message,
  BOT_AVATAR_SRC,
  Animation,
  ContentInstance,
  useDevice,
  useViewWillEnter,
} from '@core/uikit';
import { RoutePath } from '@bootstrap/constants';
import { useTranslation } from '@core/localization';
import { useUser } from '@common/hooks';
import { Route, useRoute } from '@core/navigation';
import { DTO, useGetUserStories } from '@network/admin';

import { Index } from './Index/Index';
import { Details } from './Details/Details';

export const Create = memo(function Create() {
  const content = useRef<ContentInstance>();
  const { t } = useTranslation();
  const { displayName: userDisplayName, uid } = useUser();
  const { width } = useDevice();
  const [, navigate] = useRoute();

  const { isFetching, refetch } = useGetUserStories(
    {
      image: {
        aspect_ratio: '4:3',
        crop: 'thumb',
        width: `${width}`,
      },
      status: DTO.StoryStatusType.Inprogress,
      uid,
    },
    {
      enabled: false,
    }
  );

  const handleOnMessage = useCallback(() => {
    if (content.current) {
      setTimeout(() => content.current?.scrollToBottom(300), 100);
    }
  }, []);

  useViewWillEnter(() => {
    (async () => {
      const { data } = await refetch();
      if (data.storiesCount > 0) {
        navigate({
          action: 'replace',
          params: { id: data?.stories[0]?.id },
          pathname: RoutePath.CreateDetails,
        });
      }
    })();
  });

  return (
    <Page>
      <Header translucent>
        <Header.Back pathname={RoutePath.Index} />
      </Header>
      <Content fullscreen ref={content}>
        <Header collapse="condense">
          <Header.Title size="large">{t('pages.create')}</Header.Title>
        </Header>
        <Animation.Message>
          <Message
            avatar={BOT_AVATAR_SRC}
            origin="companion"
            title={t('bot.fabledAi')}
          >
            {t('bot.createFableAiGreeting', {
              displayName: userDisplayName,
            })}
          </Message>
        </Animation.Message>
        <Route exact path={RoutePath.Create}>
          <Index loading={isFetching} />
        </Route>
        <Route path={RoutePath.CreateDetails}>
          <Details onMessage={handleOnMessage} />
        </Route>
      </Content>
    </Page>
  );
});
