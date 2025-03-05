import { useContext } from 'use-context-selector';

import { SettingsProviderContext } from './SettingsProvider.context';

export const useSettings = () => {
  const settings = useContext(SettingsProviderContext);

  return [settings];
};
