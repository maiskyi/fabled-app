import { FC, PropsWithChildren } from 'react';

import { AuthProvider } from '@core/auth';
import { ThemeProvider } from '@core/uikit';
import { FirestoreProvider } from '@core/firestore';
import { NetworkProvider } from '@core/app';
import { FunctionsProvider, FunctionsProviderProps } from '@core/functions';
import {
  AppProvider,
  AppProviderProps,
} from '@core/app/components/AppProvider';

import { Navigation } from '../Navigation/Navigation';

export type BootstrapProps = PropsWithChildren<{
  app: AppProviderProps;
  functions: FunctionsProviderProps;
}>;

export const Bootstrap: FC<BootstrapProps> = ({ children, app, functions }) => {
  return (
    <ThemeProvider>
      <AppProvider {...app}>
        <AuthProvider>
          <NetworkProvider>
            <FirestoreProvider>
              <FunctionsProvider {...functions}>
                <Navigation>{children}</Navigation>
              </FunctionsProvider>
            </FirestoreProvider>
          </NetworkProvider>
        </AuthProvider>
      </AppProvider>
    </ThemeProvider>
  );
};
