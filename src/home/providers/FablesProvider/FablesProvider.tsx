import { FC, PropsWithChildren, useMemo, useRef } from 'react';

import {
  UseGetCollectionInfiniteEveryParams,
  UseGetCollectionInfiniteOrderParams,
  useCollectionSnapshotListener,
} from '@core/firestore';
import { DTO } from '@bootstrap/dto';
import { Document } from '@bootstrap/constants';
import { useUser } from '@common/hooks';
import { useInfiniteGetUserStories } from '@network/api';

import { FablesProviderContext } from './FablesProvider.context';

type FablesProviderProps = PropsWithChildren<{}>;

export const FablesProvider: FC<FablesProviderProps> = ({ children }) => {
  const { uid } = useUser();

  const { data, hasNextPage, fetchNextPage, isLoading, refetch } =
    useInfiniteGetUserStories(
      { skip: 0, take: 25, uid },
      {
        getNextPageParam: () => {
          return undefined;
        },
        initialPageParam: 0,
      }
    );

  const { current: every } = useRef<
    UseGetCollectionInfiniteEveryParams<DTO.Fable>[]
  >([
    {
      fieldPath: 'status',
      opStr: 'array-contains',
      type: 'where',
      value: DTO.FableStatus.Success,
    },
    {
      fieldPath: 'uid',
      opStr: '==',
      type: 'where',
      value: uid,
    },
  ]);

  const { current: order } = useRef<
    UseGetCollectionInfiniteOrderParams<DTO.Fable>
  >({
    direction: 'desc',
    field: 'createdAt',
  });

  const stories = useMemo(() => {
    return data?.pages.flatMap(({ stories }) => stories);
  }, [data]);

  const contextValue = useMemo(
    () => ({ data, fetchNextPage, hasNextPage, isLoading, stories }),
    [isLoading, hasNextPage, fetchNextPage, data, stories]
  );

  useCollectionSnapshotListener(
    {
      doc: Document.Fable,
      every,
      order,
    },
    () => {
      refetch();
    }
  );

  return (
    <FablesProviderContext.Provider value={contextValue}>
      {children}
    </FablesProviderContext.Provider>
  );
};
