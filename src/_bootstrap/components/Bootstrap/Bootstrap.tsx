import { FC, PropsWithChildren } from 'react';

import { AuthProvider, AuthProviderProps } from '@core/auth';
import { ThemeProvider } from '@core/uikit';
import { FirestoreProvider, FirestoreProviderProps } from '@core/firestore';
import { NetworkProvider, AppProvider, AppProviderProps } from '@core/app';
import {
  LocalizationProvider,
  LocalizationProviderProps,
} from '@core/localization';
import {
  CloudinaryProvider,
  CloudinaryProviderProps,
} from '@network/cloudinary';
import { AppUrlListener } from '@core/navigation';

import { Network, NetworkProps } from './Network';
import { Navigation } from './Navigation';
import { Config, ConfigProps } from './Config';

export type BootstrapProps = PropsWithChildren<{
  app: AppProviderProps;
  auth: AuthProviderProps;
  firestore: FirestoreProviderProps;
  localization: LocalizationProviderProps;
  network: NetworkProps;
  config: ConfigProps;
  cloudinary: CloudinaryProviderProps;
}>;

export const Bootstrap: FC<BootstrapProps> = ({
  app,
  children,
  firestore,
  localization,
  network,
  config,
  cloudinary,
}) => {
  return (
    <AppUrlListener>
      <ThemeProvider>
        <CloudinaryProvider {...cloudinary}>
          <NetworkProvider>
            <Network {...network}>
              <Config {...config}>
                <LocalizationProvider {...localization}>
                  <AppProvider {...app}>
                    <AuthProvider>
                      <FirestoreProvider {...firestore}>
                        <Navigation>{children}</Navigation>
                      </FirestoreProvider>
                    </AuthProvider>
                  </AppProvider>
                </LocalizationProvider>
              </Config>
            </Network>
          </NetworkProvider>
        </CloudinaryProvider>
      </ThemeProvider>
    </AppUrlListener>
  );
};
