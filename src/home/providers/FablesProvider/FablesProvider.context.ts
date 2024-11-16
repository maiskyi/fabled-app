import { createContext } from 'use-context-selector';

import { DTO, useGetStoriesInfinite } from '@network/api';

type UseGetStoriesInfiniteReturnType = ReturnType<typeof useGetStoriesInfinite>;

export interface FablesProviderContextProps {
  stories: DTO.StoryItem[];
  isLoading: boolean;
  hasNextPage: boolean;
  fetchNextPage: UseGetStoriesInfiniteReturnType['fetchNextPage'];
  refetch: UseGetStoriesInfiniteReturnType['refetch'];
}

export const FablesProviderContext = createContext<FablesProviderContextProps>({
  fetchNextPage: () => Promise.resolve(null),
  hasNextPage: false,
  isLoading: false,
  refetch: () => Promise.resolve(null),
  stories: [],
});
