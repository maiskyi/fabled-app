import { createContext } from 'use-context-selector';

import { DTO } from '@network/api';

interface FableContextProps {
  isLoading: boolean;
  isReady: boolean;
  story: DTO.Story;
}

export const FableContext = createContext<FableContextProps>({
  isLoading: false,
  isReady: false,
  story: null,
});
