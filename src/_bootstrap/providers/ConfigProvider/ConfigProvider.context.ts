import { createContext } from 'use-context-selector';

import { DTO } from '@network/api';

interface ConfigContextProps {
  version: string;
  privacyPolicyUrl: string;
  termsAndConditionsUrl: string;
  characters: DTO.BootstrapCharacterItem[];
  prompts: DTO.BootstrapPromptItem[];
  scenes: DTO.BootstrapPlaceOfEventItem[];
  themes: DTO.BootstrapMoralLessonsItem[];
  isReady: boolean;
}

export const ConfigContext = createContext<ConfigContextProps>({
  characters: [],
  isReady: false,
  privacyPolicyUrl: '/',
  prompts: [],
  scenes: [],
  termsAndConditionsUrl: '/',
  themes: [],
  version: '1.0.0',
});
