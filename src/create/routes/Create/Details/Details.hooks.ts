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

    return [
      {
        id: 'message',
        props: {
          avatar: avatar,
          children: data?.data.message,
          origin: 'me',
          title: displayName,
        },
        status: [
          DTO.FableStatus.Initialized,
          DTO.FableStatus.ContentInProgress,
          DTO.FableStatus.ImageInProgress,
        ],
        type: 'message',
      } as ThreadItem,
      {
        id: 'content',
        props: {
          avatar: BOT_AVATAR_SRC,
          children: t(`bot.contentInProgress.${contentCopyIndex}`),
          origin: 'companion',
          title: t('bot.fabledAi'),
        },
        status: [
          DTO.FableStatus.ContentInProgress,
          DTO.FableStatus.ImageInProgress,
        ],
        type: 'message',
      } as ThreadItem,
      {
        id: 'image',
        props: {
          avatar: BOT_AVATAR_SRC,
          children: t(`bot.imageInProgress.${imageCopyIndex}`),
          origin: 'companion',
          title: t('bot.fabledAi'),
        },
        status: [DTO.FableStatus.ImageInProgress],
        type: 'message',
      } as ThreadItem,
    ].filter(({ status }) => status.includes(data?.data.status));
  }, [displayName, avatar, data, t]);

  return { thread };
};
