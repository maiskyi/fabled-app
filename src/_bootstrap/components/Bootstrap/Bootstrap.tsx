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

import { Navigation } from '../Navigation';
import { Init, InitProps } from '../Init';
import { Network, NetworkProps } from '../Network';

export type BootstrapProps = PropsWithChildren<{
  app: AppProviderProps;
  auth: AuthProviderProps;
  functions: FunctionsProviderProps;
  firestore: FirestoreProviderProps;
  localization: LocalizationProviderProps;
  network: NetworkProps;
  init: InitProps;
}>;

export const Bootstrap: FC<BootstrapProps> = ({
  app,
  init,
  children,
  functions,
  firestore,
  localization,
  network,
}) => {
  return (
    <ThemeProvider>
      <Network {...network}>
        <LocalizationProvider {...localization}>
          <AppProvider {...app}>
            <AuthProvider>
              <NetworkProvider>
                <FirestoreProvider {...firestore}>
                  <FunctionsProvider {...functions}>
                    <StorageProvider>
                      <Navigation>
                        <Init {...init}>{children}</Init>
                      </Navigation>
                    </StorageProvider>
                  </FunctionsProvider>
                </FirestoreProvider>
              </NetworkProvider>
            </AuthProvider>
          </AppProvider>
        </LocalizationProvider>
      </Network>
    </ThemeProvider>
  );
};
