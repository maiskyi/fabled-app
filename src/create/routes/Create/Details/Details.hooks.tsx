import { useMemo } from 'react';

import { useUser } from '@common/hooks';
import { BOT_AVATAR_SRC, Spinner } from '@core/uikit';
import { useTranslation } from '@core/localization';
import { useGetRequest, DTO } from '@network/api';

import { ThreadItem } from './Details.types';

interface UseThreadParams {
  id: string;
  onReadNow: () => void;
  onReadLater: () => void;
}

export const useThread = ({ id, onReadNow, onReadLater }: UseThreadParams) => {
  const { t } = useTranslation();
  const { displayName, avatar } = useUser();

  const { data } = useGetRequest(
    {
      id,
    },
    {
      refetchInterval: ({ state: { data } }) => {
        if (data?.story?.status === DTO.StoryStatusType.Inprogress) {
          return 3000;
        }
        return false;
      },
    }
  );

  const thread = useMemo((): ThreadItem[] => {
    const copyIndex = new Date(data?.story.createdAt).getMilliseconds() % 10;

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
      if (
        data?.story.statusLog.includes(DTO.StoryStatusLogType.ContentInProgress)
      ) {
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
      if (
        data?.story.statusLog.includes(DTO.StoryStatusLogType.ImageInProgress)
      ) {
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
      if (data?.story.status === DTO.StoryStatusType.Inprogress) {
        return [
          {
            id: 'imageMessage',
            props: {
              avatar: BOT_AVATAR_SRC,
              children: <Spinner color="light" variant="dots" />,
              origin: 'companion',
              title: t('bot.fabledAi'),
            },
            type: 'message',
          },
        ];
      }
      return [];
    })();

    const errorMessage: ThreadItem[] = (() => {
      if (data?.story.status === DTO.StoryStatusType.Failed) {
        return [
          {
            id: 'errorMessage',
            props: {
              avatar: BOT_AVATAR_SRC,
              children: t(`bot.error.${copyIndex}`),
              color: 'danger',
              origin: 'companion',
              title: t('bot.fabledAi'),
            },
            type: 'message',
          },
        ];
      }
      return [];
    })();

    const errorActions: ThreadItem[] = (() => {
      if (data?.story.status === DTO.StoryStatusType.Failed) {
        return [
          {
            id: 'errorActions',
            props: [
              {
                children: t('actions.cancel'),
                fill: 'outline',
                onClick: onReadLater,
              },
              {
                children: t('actions.retry'),
                onClick: onReadNow,
              },
            ],
            type: 'actions',
          },
        ];
      }
      return [];
    })();

    const successMessage: ThreadItem[] = (() => {
      if (data?.story.status === DTO.StoryStatusType.Success) {
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
      if (data?.story.status === DTO.StoryStatusType.Success) {
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
      ...errorMessage,
      ...errorActions,
      ...successMessage,
      ...successActions,
    ];
  }, [displayName, avatar, data, t, onReadNow, onReadLater]);

  return { thread };
};
