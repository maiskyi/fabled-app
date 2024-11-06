import { createContext } from 'use-context-selector';

import { DTO, useInfiniteGetUserStories } from '@network/admin';

type UseInfiniteGetUserStoriesReturnType = ReturnType<
  typeof useInfiniteGetUserStories
>;

export interface FablesProviderContextProps {
  stories: DTO.GetUserStories['stories'];
  isLoading: boolean;
  hasNextPage: boolean;
  fetchNextPage: UseInfiniteGetUserStoriesReturnType['fetchNextPage'];
  refetch: UseInfiniteGetUserStoriesReturnType['refetch'];
}

export const FablesProviderContext = createContext<FablesProviderContextProps>({
  fetchNextPage: () => Promise.resolve(null),
  hasNextPage: false,
  isLoading: false,
  refetch: () => Promise.resolve(null),
  stories: [],
});
