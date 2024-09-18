import { useMemo } from 'react';
import { useMount } from 'react-use';

import { useUser } from '@common/hooks';
import { BOT_AVATAR_SRC } from '@core/uikit';
import { useTranslation } from '@core/localization';
import { useGetRequest, DTO, OnStoryUpdatedDocument } from '@network/api';

import { ThreadItem } from './Details.types';

interface UseThreadParams {
  id: string;
  onReadNow: () => void;
  onReadLater: () => void;
}

export const useThread = ({ id, onReadNow, onReadLater }: UseThreadParams) => {
  const { t } = useTranslation();
  const { displayName, avatar } = useUser();

  const { data, subscribeToMore } = useGetRequest({
    variables: { id },
  });

  const thread = useMemo((): ThreadItem[] => {
    const copyIndex = data?.story.message.length % 10;

    const userMessage: ThreadItem[] = [
      {
        id: 'userMessage',
        props: {
          avatar: avatar,
          children: data?.story.message,
          origin: 'me',
          title: displayName,
        },
        type: 'message',
      },
    ];

    const contentMessage: ThreadItem[] = (() => {
      if (data?.story.status.includes(DTO.StoryStatusType.ContentInProgress)) {
        return [
          {
            id: 'contentMessage',
            props: {
              avatar: BOT_AVATAR_SRC,
              children: t(`bot.contentInProgress.${copyIndex}`),
              origin: 'companion',
              title: t('bot.fabledAi'),
            },
            type: 'message',
          },
        ];
      }
      return [];
    })();

    const imageMessage: ThreadItem[] = (() => {
      if (data?.story.status.includes(DTO.StoryStatusType.ImageInProgress)) {
        return [
          {
            id: 'imageMessage',
            props: {
              avatar: BOT_AVATAR_SRC,
              children: t(`bot.imageInProgress.${copyIndex}`),
              origin: 'companion',
              title: t('bot.fabledAi'),
            },
            type: 'message',
          },
        ];
      }
      return [];
    })();

    const progressMessage: ThreadItem[] = (() => {
      if (!data?.story.status.includes(DTO.StoryStatusType.Success)) {
        return [
          {
            id: 'imageMessage',
            props: {
              avatar: BOT_AVATAR_SRC,
              children: '123',
              origin: 'companion',
              title: t('bot.fabledAi'),
            },
            type: 'message',
          },
        ];
      }
      return [];
    })();

    const successMessage: ThreadItem[] = (() => {
      if (data?.story.status.includes(DTO.StoryStatusType.Success)) {
        return [
          {
            id: 'successMessage',
            props: {
              avatar: BOT_AVATAR_SRC,
              children: t(`bot.fableReady.${copyIndex}`),
              origin: 'companion',
              title: t('bot.fabledAi'),
            },
            type: 'message',
          },
        ];
      }
      return [];
    })();

    const successActions: ThreadItem[] = (() => {
      if (data?.story.status.includes(DTO.StoryStatusType.Success)) {
        return [
          {
            id: 'successActions',
            props: [
              {
                children: t('actions.readLater'),
                fill: 'outline',
                onClick: onReadLater,
              },
              {
                children: t('actions.readNow'),
                onClick: onReadNow,
              },
            ],
            type: 'actions',
          },
        ];
      }
      return [];
    })();

    return [
      ...userMessage,
      ...contentMessage,
      ...imageMessage,
      ...progressMessage,
      ...successMessage,
      ...successActions,
    ];
  }, [displayName, avatar, data, t, onReadNow, onReadLater]);

  useMount(() => {
    subscribeToMore({
      document: OnStoryUpdatedDocument,
      updateQuery: (prev, { subscriptionData }) => {
        const { data } = subscriptionData;
        if (!data) return prev;
        return prev;
      },
      variables: { id },
    });
  });

  return { thread };
};
