import { FC, PropsWithChildren, useMemo } from 'react';

import { useUser } from '@common/hooks';
import { DTO, useInfiniteGetUserStories } from '@network/admin';
import { useDevice } from '@core/uikit';
import { useGetStoriesInfinite } from '@network/api';

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
  } = useGetStoriesInfinite(
    {
      skip: GET_USER_STORIES_SKIP_PARAM,
      take: GET_USER_STORIES_TAKE_PARAM,
    },
    {
      query: {
        getNextPageParam: ({ total }, all) => {
          const count = all.flatMap(({ data }) => data).length;
          return count > total
            ? all.length * GET_USER_STORIES_TAKE_PARAM
            : undefined;
        },
      },
    }
  );

  const { data: _ } = useInfiniteGetUserStories(
    {
      image: {
        aspect_ratio: '4:3',
        crop: 'thumb',
        width: `${width}`,
      },
      skip: GET_USER_STORIES_SKIP_PARAM,
      status: DTO.StoryStatusType.Success,
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
      stories: stories?.pages.flatMap(({ data }) => data),
    }),
    [isLoading, hasNextPage, fetchNextPage, stories, refetch]
  );

  return (
    <FablesProviderContext.Provider value={contextValue}>
      {children}
    </FablesProviderContext.Provider>
  );
};
