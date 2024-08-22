import { FC, PropsWithChildren } from 'react';

import { AuthProvider, AuthProviderProps } from '@core/auth';
import { ThemeProvider } from '@core/uikit';
import { FirestoreProvider, FirestoreProviderProps } from '@core/firestore';
import { NetworkProvider, AppProvider, AppProviderProps } from '@core/app';
import { FunctionsProvider, FunctionsProviderProps } from '@core/functions';
import { StorageProvider } from '@core/storage';
import {
  LocalizationProvider,
  LocalizationProviderProps,
} from '@core/localization';

import { Network, NetworkProps } from './Network';
import { Navigation } from './Navigation';
import { Config, ConfigProps } from './Config';

export type BootstrapProps = PropsWithChildren<{
  app: AppProviderProps;
  auth: AuthProviderProps;
  functions: FunctionsProviderProps;
  firestore: FirestoreProviderProps;
  localization: LocalizationProviderProps;
  network: NetworkProps;
  config: ConfigProps;
}>;

export const Bootstrap: FC<BootstrapProps> = ({
  app,
  children,
  functions,
  firestore,
  localization,
  network,
  config,
}) => {
  return (
    <ThemeProvider>
      <NetworkProvider>
        <Network {...network}>
          <Config {...config}>
            <LocalizationProvider {...localization}>
              <AppProvider {...app}>
                <AuthProvider>
                  <FirestoreProvider {...firestore}>
                    <FunctionsProvider {...functions}>
                      <StorageProvider>
                        <Navigation>{children}</Navigation>
                      </StorageProvider>
                    </FunctionsProvider>
                  </FirestoreProvider>
                </AuthProvider>
              </AppProvider>
            </LocalizationProvider>
          </Config>
        </Network>
      </NetworkProvider>
    </ThemeProvider>
  );
};
