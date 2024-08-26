import { createContext } from 'use-context-selector';

import { DTO } from '@network/contentful';

interface ConfigContextProps {
  version: string;
  privacyPolicyUrl: string;
  termsAndConditionsUrl: string;
  characters: DTO.GetBootstrapQuery['characterCollection']['items'];
  prompts: DTO.GetBootstrapQuery['promptCollection']['items'];
  scenes: DTO.GetBootstrapQuery['sceneCollection']['items'];
  themes: DTO.GetBootstrapQuery['themeCollection']['items'];
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
