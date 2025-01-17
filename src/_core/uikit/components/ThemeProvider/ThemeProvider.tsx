import { FC, PropsWithChildren } from 'react';
import { useAsync } from 'react-use';

import { Device } from '@capacitor/device';
import { Capacitor } from '@capacitor/core';
import { IonApp, isPlatform, setupIonicReact } from '@ionic/react';

import { DeviceContext, DevicePlatform } from '../../contexts/DeviceContext';

import './ThemeProvider.css';

setupIonicReact({
  mode: 'ios',
});

export type ThemeProviderProps = PropsWithChildren<{}>;

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const { value } = useAsync(async () => {
    return await Device.getId();
  });

  const platform = Capacitor.getPlatform() as DevicePlatform;

  const isMobile = isPlatform('mobile');
  const isTablet = isPlatform('tablet');
  const isDesktop = isPlatform('desktop');

  const isNativePlatform = Capacitor.isNativePlatform();

  return value ? (
    <DeviceContext.Provider
      value={{
        ...value,
        height: window.innerHeight,
        isDesktop,
        isMobile,
        isNativePlatform,
        isTablet,
        platform,
        width: window.innerWidth,
      }}
    >
      <IonApp>{children}</IonApp>
    </DeviceContext.Provider>
  ) : null;
};
