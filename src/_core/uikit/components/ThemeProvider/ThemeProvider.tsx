import { FC, PropsWithChildren } from 'react';
import { useAsync } from 'react-use';

import { Device } from '@capacitor/device';
import { Capacitor } from '@capacitor/core';
import { IonApp, isPlatform, setupIonicReact } from '@ionic/react';

import { ASSETS } from '../../constants';
import { DeviceContext, DevicePlatform } from '../../contexts/DeviceContext';

import './ThemeProvider.css';

setupIonicReact({
  mode: 'ios',
});

export type ThemeProviderProps = PropsWithChildren<{}>;

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const { value } = useAsync(async () => {
    const assetsRequests = Object.values(ASSETS).map((asset) => {
      return new Promise<boolean>((resolve) => {
        const img = new Image();
        img.src = asset;
        img.addEventListener('load', () => {
          resolve(true);
        });
      });
    });

    const idRequest = Device.getId();

    const [id] = await Promise.all([idRequest, ...assetsRequests]);

    return id;
  });

  const platform = Capacitor.getPlatform() as DevicePlatform;

  const isMobile = isPlatform('mobile');
  const isTablet = isPlatform('tablet');
  const isDesktop = isPlatform('desktop');
  const isReady = !!value;

  const isNativePlatform = Capacitor.isNativePlatform();

  return (
    <DeviceContext.Provider
      value={{
        ...value,
        height: window.innerHeight,
        isDesktop,
        isMobile,
        isNativePlatform,
        isReady,
        isTablet,
        platform,
        width: window.innerWidth,
      }}
    >
      <IonApp>{children}</IonApp>
    </DeviceContext.Provider>
  );
};
