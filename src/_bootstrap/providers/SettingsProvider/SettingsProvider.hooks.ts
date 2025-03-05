import { useContext } from 'use-context-selector';
import { Dispatch, SetStateAction } from 'react';

import { SettingsProviderContext } from './SettingsProvider.context';

type UseSettingsReturnType = [
  { isOnboarded: boolean },
  { setIsOnboarded: Dispatch<SetStateAction<boolean>> },
];

export const useSettings = (): UseSettingsReturnType => {
  const { setIsOnboarded, ...settings } = useContext(SettingsProviderContext);

  return [settings, { setIsOnboarded }];
};
