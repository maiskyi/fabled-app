import { FC, PropsWithChildren } from 'react';

import { AppUpdateProvider } from '@core/app';

import { Loader } from '../Loader';

import { AppUpdateFallback } from './AppUpdateFallback';

export type AppUpdateProps = PropsWithChildren<{}>;

export const AppUpdate: FC<AppUpdateProps> = ({ children }) => {
  return (
    <AppUpdateProvider Fallback={AppUpdateFallback} Loader={Loader}>
      {children}
    </AppUpdateProvider>
  );
};
