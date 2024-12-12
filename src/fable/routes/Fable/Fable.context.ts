import { createContext } from 'use-context-selector';

import { DTO } from '@network/api';

interface FableContextProps {
  isReady: boolean;
  story: DTO.Story;
}

export const FableContext = createContext<FableContextProps>({
  isReady: false,
  story: null,
});
