import { useCallback, useMemo } from 'react';

import { useUser } from '@common/hooks';
import { BOT_AVATAR_SRC, Spinner, useUtils } from '@core/uikit';
import { useTranslation } from '@core/localization';
import { useGetRequest, DTO } from '@network/admin';
import { useRoute } from '@core/navigation';
import { RoutePath } from '@bootstrap/constants';
import { useCreateStory } from '@network/api';

import { ThreadItem } from './Details.types';

interface UseThreadParams {
  id: string;
  onReadNow: () => void;
  onCancel: () => void;
}

export const useThread = ({ id, onReadNow, onCancel }: UseThreadParams) => {
  const { t } = useTranslation();
  const { displayName, avatar } = useUser();
  const [, navigate] = useRoute();
  const { toast } = useUtils();

  const { isPending, mutate: create } = useCreateStory();

  const { data: request } = useGetRequest(
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

  const onRetry = useCallback(() => {
    create(
      {
        data: {
          characterId: request.story.character.id,
          moralLessonId: request.story.moralLesson.id,
          placeOfEventId: request.story.placeOfEvent.id,
          promptId: request.story.prompt.id,
          readTime: request.story.readTime,
        },
      },
      {
        onError: ({ statusCode, message }) => {
          if (statusCode === 403) {
            navigate({
              action: 'push',
              pathname: RoutePath.Subscribe,
            });
          } else {
            toast({
              message: Array.isArray(message) ? message[0] : message,
              variant: 'error',
            });
          }
        },
        onSuccess: ({ id }) => {
          navigate({
            action: 'replace',
            params: { id },
            pathname: RoutePath.CreateDetails,
          });
        },
      }
    );
  }, [create, request, navigate, toast]);

  const thread = useMemo((): ThreadItem[] => {
    const copyIndex = new Date(request?.story.createdAt).getMilliseconds() % 10;

    const userMessage: ThreadItem[] = [
      {
        id: 'userMessage',
        props: {
          avatar: avatar,
          children: request?.story.message,
          origin: 'me',
          title: displayName,
        },
        type: 'message',
      },
    ];

    const contentMessage: ThreadItem[] = (() => {
      if (
        request?.story.statusLog.includes(
          DTO.StoryStatusLogType.ContentInProgress
        )
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
        request?.story.statusLog.includes(
          DTO.StoryStatusLogType.ImageInProgress
        )
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
      if (request?.story.status === DTO.StoryStatusType.Inprogress) {
        return [
          {
            id: 'progressMessage',
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
      if (request?.story.status === DTO.StoryStatusType.Failed) {
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
      if (request?.story.status === DTO.StoryStatusType.Failed) {
        return [
          {
            id: 'errorActions',
            props: [
              {
                children: t('actions.cancel'),
                fill: 'outline',

                onClick: onCancel,
              },
              {
                children: t('actions.retry'),
                loading: isPending,
                onClick: onRetry,
              },
            ],
            type: 'actions',
          },
        ];
      }
      return [];
    })();

    const successMessage: ThreadItem[] = (() => {
      if (request?.story.status === DTO.StoryStatusType.Success) {
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
      if (request?.story.status === DTO.StoryStatusType.Success) {
        return [
          {
            id: 'successActions',
            props: [
              {
                children: t('actions.readLater'),
                fill: 'outline',
                onClick: onCancel,
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
  }, [
    displayName,
    avatar,
    request,
    t,
    onReadNow,
    onCancel,
    isPending,
    onRetry,
  ]);

  return { thread };
};
