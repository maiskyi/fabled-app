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
}

export const useThread = ({ id }: UseThreadParams) => {
  const { t } = useTranslation();
  const { displayName, avatar } = useUser();

  const { data } = useGetDocument<DTO.Fable>({
    doc: Document.Fable,
    id,
  });

  const thread = useMemo((): ThreadItem[] => {
    const contentCopyIndex = data?.data.message.length % 10;
    const imageCopyIndex = 9 - contentCopyIndex;

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
              children: t(`bot.contentInProgress.${contentCopyIndex}`),
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
              children: t(`bot.imageInProgress.${imageCopyIndex}`),
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
      if (
        data?.data.status === DTO.FableStatus.ImageInProgress ||
        !!data?.data.image
      ) {
        return [
          {
            id: 'successMessage',
            props: {
              avatar: BOT_AVATAR_SRC,
              children: t(`bot.imageInProgress.${imageCopyIndex}`),
              origin: 'companion',
              title: t('bot.fabledAi'),
            },
            type: 'message',
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
    ];
  }, [displayName, avatar, data, t]);

  return { thread };
};
