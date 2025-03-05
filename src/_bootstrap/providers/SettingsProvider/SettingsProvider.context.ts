import { noop } from 'lodash';
import { Dispatch, SetStateAction } from 'react';
import { createContext } from 'use-context-selector';

interface SettingsProviderContextProps {
  isOnboarded: boolean;
  setIsOnboarded: Dispatch<SetStateAction<boolean>>;
}

export const SettingsProviderContext =
  createContext<SettingsProviderContextProps>({
    isOnboarded: false,
    setIsOnboarded: noop,
  });
