import { FC, PropsWithChildren } from 'react';

import { IonApp, setupIonicReact } from '@ionic/react';
import { Capacitor } from '@capacitor/core';

import { DeviceContext } from '../../contexts/DeviceContext';

import './ThemeProvider.css';

setupIonicReact({
  mode: Capacitor.getPlatform() === 'web' ? 'ios' : undefined,
});

export type ThemeProviderProps = PropsWithChildren<{}>;

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  return (
    <DeviceContext.Provider
      value={{ height: window.innerHeight, width: window.innerWidth }}
    >
      <IonApp>{children}</IonApp>
    </DeviceContext.Provider>
  );
};
