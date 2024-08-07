import { FC, PropsWithChildren } from 'react';

import { AuthProvider } from '@core/auth';
import { ThemeProvider } from '@core/uikit';
import { FirestoreProvider, FirestoreProviderProps } from '@core/firestore';
import { NetworkProvider, AppProvider, AppProviderProps } from '@core/app';
import { FunctionsProvider, FunctionsProviderProps } from '@core/functions';
import { StorageProvider } from '@core/storage';

import { Navigation } from '../Navigation/Navigation';
import { Init } from '../Init/Init';

export type BootstrapProps = PropsWithChildren<{
  app: AppProviderProps;
  functions: FunctionsProviderProps;
  firestore: FirestoreProviderProps;
}>;

export const Bootstrap: FC<BootstrapProps> = ({
  app,
  children,
  functions,
  firestore,
}) => {
  return (
    <ThemeProvider>
      <AppProvider {...app}>
        <AuthProvider>
          <NetworkProvider>
            <FirestoreProvider {...firestore}>
              <FunctionsProvider {...functions}>
                <StorageProvider>
                  <Navigation>
                    <Init>{children}</Init>
                  </Navigation>
                </StorageProvider>
              </FunctionsProvider>
            </FirestoreProvider>
          </NetworkProvider>
        </AuthProvider>
      </AppProvider>
    </ThemeProvider>
  );
};
