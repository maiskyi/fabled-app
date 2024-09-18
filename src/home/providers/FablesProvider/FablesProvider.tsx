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
import { useDevice } from '@core/uikit';

import { FablesProviderContext } from './FablesProvider.context';
import {
  GET_USER_STORIES_SKIP_PARAM,
  GET_USER_STORIES_TAKE_PARAM,
} from './FablesProvider.const';

type FablesProviderProps = PropsWithChildren<{}>;

export const FablesProvider: FC<FablesProviderProps> = ({ children }) => {
  const { uid } = useUser();
  const { width } = useDevice();

  const { data, hasNextPage, fetchNextPage, isLoading, refetch } =
    useInfiniteGetUserStories(
      {
        image: {
          aspect_ratio: '4:3',
          crop: 'thumb',
          width: `${width}`,
        },
        skip: GET_USER_STORIES_SKIP_PARAM,
        take: GET_USER_STORIES_TAKE_PARAM,
        uid,
      },
      {
        getNextPageParam: ({ storiesCount }, all) => {
          const total = all.flatMap(({ stories }) => stories).length;
          return storiesCount > total
            ? { skip: all.length * GET_USER_STORIES_TAKE_PARAM }
            : undefined;
        },
        initialPageParam: {
          skip: GET_USER_STORIES_SKIP_PARAM,
        },
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
