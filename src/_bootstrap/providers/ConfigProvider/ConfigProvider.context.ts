import { createContext } from 'use-context-selector';

import { DTO } from '@network/contentful';

interface ConfigContextProps {
  version: string;
  privacyPolicyUrl: string;
  termsAndConditionsUrl: string;
  characters: DTO.GetBootstrapQuery['characterCollection']['items'];
  prompts: DTO.GetBootstrapQuery['promptCollection']['items'];
}

export const ConfigContext = createContext<ConfigContextProps>({
  characters: [],
  privacyPolicyUrl: '/',
  prompts: [],
  termsAndConditionsUrl: '/',
  version: '1.0.0',
});
