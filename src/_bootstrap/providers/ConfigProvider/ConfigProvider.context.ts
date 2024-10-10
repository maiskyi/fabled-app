import { createContext } from 'use-context-selector';

import { DTO } from '@network/api';

interface ConfigContextProps {
  version: string;
  privacyPolicyUrl: string;
  termsAndConditionsUrl: string;
  characters: DTO.GetBootstrap['characters'];
  prompts: DTO.GetBootstrap['prompts'];
  scenes: DTO.GetBootstrap['placeOfEvents'];
  themes: DTO.GetBootstrap['moralLessons'];
  subscriptions: DTO.GetBootstrap['config']['subscriptions'];
}

export const ConfigContext = createContext<ConfigContextProps>({
  characters: [],
  privacyPolicyUrl: '/',
  prompts: [],
  scenes: [],
  subscriptions: [],
  termsAndConditionsUrl: '/',
  themes: [],
  version: '1.0.0',
});
