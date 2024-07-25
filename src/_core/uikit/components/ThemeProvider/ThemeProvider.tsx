import { FC, PropsWithChildren } from 'react';

import { IonApp, setupIonicReact } from '@ionic/react';

import './ThemeProvider.css';

setupIonicReact();

export type ThemeProviderProps = PropsWithChildren<{}>;

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  return <IonApp>{children}</IonApp>;
};
