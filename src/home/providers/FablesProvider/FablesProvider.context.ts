import { createContext } from 'use-context-selector';

import { DTO } from '@bootstrap/dto';
import { useGetCollectionInfinite } from '@core/firestore';

type UseGetCollectionInfiniteReturnType = ReturnType<
  typeof useGetCollectionInfinite<DTO.Fable>
>;

export interface FablesProviderContextProps {
  isLoading: boolean;
  hasNextPage: boolean;
  fetchNextPage: UseGetCollectionInfiniteReturnType['fetchNextPage'];
  data: UseGetCollectionInfiniteReturnType['data'];
}

export const FablesProviderContext = createContext<FablesProviderContextProps>({
  data: {
    pageParams: [],
    pages: [],
  },
  fetchNextPage: () => Promise.resolve(null),
  hasNextPage: false,
  isLoading: false,
});
