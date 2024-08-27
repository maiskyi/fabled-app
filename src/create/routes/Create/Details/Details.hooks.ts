import { useMemo } from 'react';

import { DTO } from '@bootstrap/dto';
import { useUser } from '@common/hooks';
import { useGetDocument } from '@core/firestore';
import { Document } from '@bootstrap/constants';

import { ThreadItem } from './Details.types';

interface UseThreadParams {
  id: string;
}

export const useThread = ({ id }: UseThreadParams) => {
  const { displayName, avatar } = useUser();

  const { data } = useGetDocument<DTO.Fable>({
    doc: Document.Fable,
    id,
  });

  const thread = useMemo((): ThreadItem[] => {
    return [
      {
        avatar: avatar,
        children: data?.data.message,
        id: 'message',
        origin: 'me',
        status: DTO.FableStatus.Initialized,
        title: displayName,
        type: 'message',
      },
    ].filter(({ status }) => data?.data.status.includes(status));
  }, [displayName, avatar, data]);

  return { thread };
};
