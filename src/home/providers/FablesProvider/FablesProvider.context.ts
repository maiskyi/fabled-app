import { createContext } from 'use-context-selector';

import { DTO, useInfiniteGetUserStories } from '@network/api';

type UseInfiniteGetUserStoriesReturnType = ReturnType<
  typeof useInfiniteGetUserStories
>;

export interface FablesProviderContextProps {
  stories: DTO.GetUserStories['stories'];
  isLoading: boolean;
  hasNextPage: boolean;
  fetchNextPage: UseInfiniteGetUserStoriesReturnType['fetchNextPage'];
}

export const FablesProviderContext = createContext<FablesProviderContextProps>({
  fetchNextPage: () => Promise.resolve(null),
  hasNextPage: false,
  isLoading: false,
  stories: [],
});
