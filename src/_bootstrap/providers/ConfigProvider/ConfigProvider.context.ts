import { createContext } from 'use-context-selector';

interface ConfigContextProps {
  version: string;
}

export const ConfigContext = createContext<ConfigContextProps>({
  version: null,
});
