import { createContext } from 'use-context-selector';

export interface ConfigContextProps {
  version: string;
  privacyPolicyUrl: string;
  termsAndConditionsUrl: string;
}

export const ConfigContext = createContext<ConfigContextProps>({
  privacyPolicyUrl: '',
  termsAndConditionsUrl: '',
  version: null,
});
