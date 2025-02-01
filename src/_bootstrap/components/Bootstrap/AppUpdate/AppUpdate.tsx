import { FC, PropsWithChildren } from 'react';

import { AppUpdateProvider } from '@core/app';

import { Splash } from '../Init/Splash';

import { AppUpdateFallback } from './AppUpdateFallback';

export type AppUpdateProps = PropsWithChildren<{}>;

export const AppUpdate: FC<AppUpdateProps> = ({ children }) => {
  return (
    <AppUpdateProvider Fallback={AppUpdateFallback} Loader={Splash}>
      {children}
    </AppUpdateProvider>
  );
};
