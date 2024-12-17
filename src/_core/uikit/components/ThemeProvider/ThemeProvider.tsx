import { FC, PropsWithChildren } from 'react';

import { Capacitor } from '@capacitor/core';
import { IonApp, isPlatform, setupIonicReact } from '@ionic/react';

import { DeviceContext, DevicePlatform } from '../../contexts/DeviceContext';

import './ThemeProvider.css';

setupIonicReact({
  mode: 'ios',
});

export type ThemeProviderProps = PropsWithChildren<{}>;

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const platform = Capacitor.getPlatform() as DevicePlatform;

  const isDesktop = isPlatform('desktop');
  const isMobile = isPlatform('mobile');

  return (
    <DeviceContext.Provider
      value={{
        height: window.innerHeight,
        isDesktop,
        isMobile,
        platform,
        width: window.innerWidth,
      }}
    >
      <IonApp>{children}</IonApp>
    </DeviceContext.Provider>
  );
};
