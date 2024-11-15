import { createContext } from 'use-context-selector';

import { DTO as BDTO } from '@network/admin';
import { DTO } from '@network/api';

interface ConfigContextProps {
  version: string;
  privacyPolicyUrl: string;
  termsAndConditionsUrl: string;
  characters: BDTO.GetBootstrap['characters'];
  prompts: BDTO.GetBootstrap['prompts'];
  scenes: BDTO.GetBootstrap['placeOfEvents'];
  themes: DTO.MoralLessonsItem[];
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
