import { useCallback, useMemo } from 'react';

import { useUser } from '@common/hooks';
import { BOT_AVATAR_SRC, Spinner, useUtils } from '@core/uikit';
import { useTranslation } from '@core/localization';
import { useCreateStory, useGetRequest, DTO } from '@network/admin';
import { useAuth } from '@core/auth';
import { useRoute } from '@core/navigation';
import { RoutePath } from '@bootstrap/constants';

import { ThreadItem } from './Details.types';

interface UseThreadParams {
  id: string;
  onReadNow: () => void;
  onCancel: () => void;
}

export const useThread = ({ id, onReadNow, onCancel }: UseThreadParams) => {
  const { t } = useTranslation();
  const { displayName, avatar } = useUser();
  const { user } = useAuth();
  const [, navigate] = useRoute();
  const { toast } = useUtils();

  const { isPending, mutate: create } = useCreateStory<DTO.Errors>();

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
          character: {
            connect: {
              id: request.story.character.id,
            },
          },
          firebaseUserId: user?.uid,
          moralLesson: {
            connect: {
              id: request.story.moralLesson.id,
            },
          },
          placeOfEvent: {
            connect: {
              id: request.story.placeOfEvent.id,
            },
          },
          prompt: {
            connect: {
              id: request.story.prompt.id,
            },
          },
          readTime: request.story.readTime,
        },
      },
      {
        onError: (error) => {
          const isAccessDenied = error?.some(
            ({ extensions: { code } }) =>
              code === DTO.ExtensionCode.KS_ACCESS_DENIED
          );
          if (isAccessDenied) {
            navigate({ action: 'push', pathname: RoutePath.Subscribe });
          } else {
            toast({
              message: error[0].message,
              variant: 'error',
            });
          }
        },
        onSuccess: ({ createStory: { id } }) => {
          navigate({
            action: 'replace',
            params: { id },
            pathname: RoutePath.CreateDetails,
          });
        },
      }
    );
  }, [create, request, user, navigate, toast]);

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
