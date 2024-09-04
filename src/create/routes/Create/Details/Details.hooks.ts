import { useMemo } from 'react';

import { DTO } from '@bootstrap/dto';
import { useUser } from '@common/hooks';
import { useDocumentSnapshotListener } from '@core/firestore';
import { Document } from '@bootstrap/constants';
import { BOT_AVATAR_SRC } from '@core/uikit';
import { useTranslation } from '@core/localization';

import { ThreadItem } from './Details.types';

interface UseThreadParams {
  id: string;
  onReadNow: () => void;
  onReadLater: () => void;
}

export const useThread = ({ id, onReadNow, onReadLater }: UseThreadParams) => {
  const { t } = useTranslation();
  const { displayName, avatar } = useUser();

  const { data } = useDocumentSnapshotListener<DTO.Fable>({
    doc: Document.Fable,
    id,
  });

  const thread = useMemo((): ThreadItem[] => {
    const copyIndex = data?.message.length % 10;

    const userMessage: ThreadItem[] = [
      {
        id: 'userMessage',
        props: {
          avatar: avatar,
          children: data?.message,
          origin: 'me',
          title: displayName,
        },
        type: 'message',
      },
    ];

    const contentMessage: ThreadItem[] = (() => {
      if (data?.status.includes(DTO.FableStatus.ContentInProgress)) {
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
      if (data?.status.includes(DTO.FableStatus.ImageInProgress)) {
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
      if (data?.status.includes(DTO.FableStatus.Success)) {
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
      if (data?.status.includes(DTO.FableStatus.Success)) {
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
      ...successMessage,
      ...successActions,
    ];
  }, [displayName, avatar, data, t, onReadNow, onReadLater]);

  return { thread };
};
