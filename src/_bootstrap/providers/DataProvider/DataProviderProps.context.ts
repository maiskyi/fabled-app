import { createContext } from 'use-context-selector';

import { DTO } from '@network/contentful';

interface DataProviderContextProps {
  characters: DTO.GetBootstrapQuery['characterCollection']['items'];
}

export const DataProviderContext = createContext<DataProviderContextProps>({
  characters: [],
});
