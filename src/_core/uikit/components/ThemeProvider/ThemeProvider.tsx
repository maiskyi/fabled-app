import { FC, PropsWithChildren } from 'react';

import { IonApp, setupIonicReact } from '@ionic/react';
import {} from '@capacitor/app';
import { Capacitor } from '@capacitor/core';

import './ThemeProvider.css';

setupIonicReact({
  mode: Capacitor.getPlatform() === 'web' ? 'ios' : undefined,
});

export type ThemeProviderProps = PropsWithChildren<{}>;

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  return <IonApp>{children}</IonApp>;
};
