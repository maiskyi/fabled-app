import { createContext } from 'use-context-selector';

import { DTO } from '@network/contentful';

interface ConfigContextProps {
  version: string;
  privacyPolicyUrl: string;
  termsAndConditionsUrl: string;
  characters: DTO.GetBootstrapQuery['characterCollection']['items'];
}

export const ConfigContext = createContext<ConfigContextProps>({
  characters: [],
  privacyPolicyUrl: '/',
  termsAndConditionsUrl: '/',
  version: '1.0.0',
});
