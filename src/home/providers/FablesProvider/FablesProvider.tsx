import { FC, PropsWithChildren, useMemo } from 'react';

import { useGetStoriesInfinite } from '@network/api';
import { useDevice, useMediaSwitch } from '@core/uikit';

import { FablesProviderContext } from './FablesProvider.context';
import { GET_USER_STORIES_TAKE_PARAM } from './FablesProvider.const';

type FablesProviderProps = PropsWithChildren<{}>;

export const FablesProvider: FC<FablesProviderProps> = ({ children }) => {
  const { width } = useDevice();

  const { value } = useMediaSwitch<number>({
    lg: width / 2,
    md: width / 2,
    sm: width,
    xl: width / 3,
    xs: width,
  });

  const {
    data: stories,
    hasNextPage,
    fetchNextPage,
    isLoading,
    refetch,
  } = useGetStoriesInfinite(
    {
      image: {
        aspectRatio: '59:44',
        crop: 'thumb',
        width: value,
      },
      take: GET_USER_STORIES_TAKE_PARAM,
    },
    {
      query: {
        getNextPageParam: ({ total }, all) => {
          const count = all.flatMap(({ data }) => data).length;
          return count < total
            ? all.length * GET_USER_STORIES_TAKE_PARAM
            : undefined;
        },
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
