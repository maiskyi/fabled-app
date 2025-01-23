import { useCallback, useMemo, useState } from 'react';
import { merge } from 'lodash';

import { useUser } from '@common/hooks';
import { BOT_AVATAR_SRC, Spinner, Typist, useUtils } from '@core/uikit';
import { useTranslation } from '@core/localization';
import { useRoute } from '@core/navigation';
import { PlanAction, RoutePath } from '@bootstrap/constants';
import { DTO, useCreateStory, useGetStory } from '@network/api';

import { ThreadItem, TypistState } from './Details.types';

interface UseThreadParams {
  id: string;
  onReadNow: () => void;
  onCancel: () => void;
}

export const useThread = ({ id, onReadNow, onCancel }: UseThreadParams) => {
  const { t } = useTranslation();
  const { avatar } = useUser();
  const [, navigate] = useRoute();
  const { toast } = useUtils();

  const [
    {
      inProgress: isTypistInProgress,
      messages: {
        contentMessage: isContentMessageTyped,
        imageMessage: isImageMessageTyped,
        successMessage: isSuccessMessageTyped,
        errorMessage: isErrorMessageTyped,
      },
    },
    setTypistState,
  ] = useState<TypistState>({
    inProgress: false,
    messages: {
      contentMessage: false,
      errorMessage: false,
      imageMessage: false,
      successMessage: false,
    },
  });

  const { isPending, mutate: create } = useCreateStory();

  const { data: request } = useGetStory(
    id,
    {},
    {
      query: {
        refetchInterval: ({ state: { data } }) => {
          if (data?.status === DTO.StoryStatus.inprogress) {
            return 3000;
          }
        },
      },
    }
  );

  const onRetry = useCallback(() => {
    create(
      {
        data: {
          characterId: request.character.id,
          moralLessonId: request.moralLesson.id,
          placeOfEventId: request.placeOfEvent.id,
          promptId: request.prompt.id,
          readTime: request.readTime,
        },
      },
      {
        onError: ({ statusCode, message }) => {
          if (statusCode === 403) {
            navigate({
              action: 'push',
              params: { action: PlanAction.Subscribe },
              pathname: RoutePath.Plan,
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

  const handleOnTypingComplete = useCallback(
    (key: keyof TypistState['messages']) => {
      setTypistState((prev) =>
        merge({}, prev, {
          inProgress: false,
          messages: {
            [key]: true,
          },
        })
      );
    },
    []
  );

  const handleOnTypingStart = useCallback(() => {
    setTypistState((prev) =>
      merge({}, prev, {
        inProgress: true,
      })
    );
  }, []);

  const thread = useMemo((): ThreadItem[] => {
    const copyIndex = new Date(request?.createdAt).getMilliseconds() % 10;

    const userMessage: ThreadItem[] = [
      {
        id: 'userMessage',
        props: {
          children: request?.message,
          icon: 'user',
          origin: 'me',
        },
        type: 'message',
      },
    ];

    const contentMessage: ThreadItem[] = (() => {
      if (
        request?.statusLog.includes(DTO.StoryStatusLogItem.contentInProgress)
      ) {
        return [
          {
            id: 'contentMessage',
            props: {
              avatar: BOT_AVATAR_SRC,
              children: (
                <Typist
                  onComplete={() => handleOnTypingComplete('contentMessage')}
                  onStart={handleOnTypingStart}
                >
                  {t(`bot.contentInProgress.${copyIndex}`)}
                </Typist>
              ),
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
        request?.statusLog.includes(DTO.StoryStatusLogItem.imageInProgress) &&
        isContentMessageTyped
      ) {
        return [
          {
            id: 'imageMessage',
            props: {
              avatar: BOT_AVATAR_SRC,
              children: (
                <Typist
                  onComplete={() => handleOnTypingComplete('imageMessage')}
                  onStart={handleOnTypingStart}
                >
                  {t(`bot.imageInProgress.${copyIndex}`)}
                </Typist>
              ),
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
      if (
        request?.status === DTO.StoryStatus.inprogress &&
        !isTypistInProgress
      ) {
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
      if (request?.status === DTO.StoryStatus.failed && !isTypistInProgress) {
        return [
          {
            id: 'errorMessage',
            props: {
              avatar: BOT_AVATAR_SRC,
              children: (
                <Typist
                  onComplete={() => handleOnTypingComplete('errorMessage')}
                >
                  {t(`bot.error.${copyIndex}`)}
                </Typist>
              ),
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
      if (isErrorMessageTyped) {
        return [
          {
            id: 'errorActions',
            props: [
              {
                children: t('actions.cancel'),
                color: 'dark',
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
      if (request?.status === DTO.StoryStatus.success && isImageMessageTyped) {
        return [
          {
            id: 'successMessage',
            props: {
              avatar: BOT_AVATAR_SRC,
              children: (
                <Typist
                  onComplete={() => handleOnTypingComplete('successMessage')}
                  onStart={handleOnTypingStart}
                >
                  {t(`bot.fableReady.${copyIndex}`)}
                </Typist>
              ),
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
      if (
        request?.status === DTO.StoryStatus.success &&
        isSuccessMessageTyped
      ) {
        return [
          {
            id: 'successActions',
            props: [
              {
                children: t('actions.readLater'),
                color: 'dark',
                fill: 'outline',
                onClick: onCancel,
              },
              {
                children: t('actions.readNow'),
                icon: 'book-open',
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
    avatar,
    request,
    t,
    onReadNow,
    onCancel,
    isPending,
    onRetry,
    handleOnTypingComplete,
    isContentMessageTyped,
    isImageMessageTyped,
    isSuccessMessageTyped,
    isErrorMessageTyped,
    handleOnTypingStart,
    isTypistInProgress,
  ]);

  return { thread };
};
