import { useMemo } from 'react';

import { DTO } from '@bootstrap/dto';
import { useUser } from '@common/hooks';
import { useGetDocument } from '@core/firestore';
import { Document } from '@bootstrap/constants';
import { BOT_AVATAR_SRC } from '@core/uikit';
import { useTranslation } from '@core/localization';

import { ThreadItem } from './Details.types';

interface UseThreadParams {
  id: string;
  onRead: () => void;
}

export const useThread = ({ id, onRead }: UseThreadParams) => {
  const { t } = useTranslation();
  const { displayName, avatar } = useUser();

  const { data } = useGetDocument<DTO.Fable>({
    doc: Document.Fable,
    id,
  });

  const thread = useMemo((): ThreadItem[] => {
    const copyIndex = data?.data.message.length % 10;

    const userMessage: ThreadItem[] = [
      {
        id: 'userMessage',
        props: {
          avatar: avatar,
          children: data?.data.message,
          origin: 'me',
          title: displayName,
        },
        type: 'message',
      },
    ];

    const contentMessage: ThreadItem[] = (() => {
      if (
        data?.data.status === DTO.FableStatus.ContentInProgress ||
        !!data?.data.content
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
        data?.data.status === DTO.FableStatus.ImageInProgress ||
        !!data?.data.image
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

    const successMessage: ThreadItem[] = (() => {
      if (data?.data.status === DTO.FableStatus.Success) {
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
      if (data?.data.status === DTO.FableStatus.Success) {
        return [
          {
            id: 'successMessage',
            props: [
              {
                children: t('actions.readTheFable'),
                onClick: onRead,
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
      ...successMessage,
      ...successActions,
    ];
  }, [displayName, avatar, data, t, onRead]);

  return { thread };
};
