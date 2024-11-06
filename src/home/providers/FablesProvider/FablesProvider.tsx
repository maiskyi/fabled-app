import { FC, PropsWithChildren, useMemo } from 'react';

import { useUser } from '@common/hooks';
import { useInfiniteGetUserStories } from '@network/admin';
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

  const {
    data: stories,
    hasNextPage,
    fetchNextPage,
    isLoading,
    refetch,
  } = useInfiniteGetUserStories(
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

  const contextValue = useMemo(
    () => ({
      data: stories,
      fetchNextPage,
      hasNextPage,
      isLoading,
      refetch,
      stories: stories?.pages.flatMap(({ stories }) => stories),
    }),
    [isLoading, hasNextPage, fetchNextPage, stories, refetch]
  );

  return (
    <FablesProviderContext.Provider value={contextValue}>
      {children}
    </FablesProviderContext.Provider>
  );
};
