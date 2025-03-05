import { FC, PropsWithChildren } from 'react';
import { useLocalStorage } from 'react-use';

import { SettingsProviderContext } from './SettingsProvider.context';

type SettingsProviderProps = PropsWithChildren<{}>;

export const SettingsProvider: FC<SettingsProviderProps> = ({ children }) => {
  const [isOnboarded, setIsOnboarded] = useLocalStorage(
    'profile.settings.isOnboarded',
    false
  );

  return (
    <SettingsProviderContext.Provider value={{ isOnboarded, setIsOnboarded }}>
      {children}
    </SettingsProviderContext.Provider>
  );
};
