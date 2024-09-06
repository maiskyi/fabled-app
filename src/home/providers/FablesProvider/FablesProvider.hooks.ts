import { useContextSelector } from 'use-context-selector';

import {
  FablesProviderContext,
  FablesProviderContextProps,
} from './FablesProvider.context';

export const useFablesContext = <T>(
  selector: (props: FablesProviderContextProps) => T
) => {
  return useContextSelector(FablesProviderContext, selector);
};
