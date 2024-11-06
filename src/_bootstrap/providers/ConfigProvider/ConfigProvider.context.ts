import { createContext } from 'use-context-selector';

import { DTO } from '@network/admin';

interface ConfigContextProps {
  version: string;
  privacyPolicyUrl: string;
  termsAndConditionsUrl: string;
  characters: DTO.GetBootstrap['characters'];
  prompts: DTO.GetBootstrap['prompts'];
  scenes: DTO.GetBootstrap['placeOfEvents'];
  themes: DTO.GetBootstrap['moralLessons'];
}

export const ConfigContext = createContext<ConfigContextProps>({
  characters: [],
  privacyPolicyUrl: '/',
  prompts: [],
  scenes: [],
  termsAndConditionsUrl: '/',
  themes: [],
  version: '1.0.0',
});
