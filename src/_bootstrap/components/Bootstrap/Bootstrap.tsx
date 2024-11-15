import { FC, PropsWithChildren } from 'react';

import { AuthProvider, AuthProviderProps } from '@core/auth';
import { ThemeProvider } from '@core/uikit';
import { QueryProvider, AppProvider, AppProviderProps } from '@core/app';
import {
  LocalizationProvider,
  LocalizationProviderProps,
} from '@core/localization';
import { AppUrlListener } from '@core/navigation';
import { PurchasesProvider, PurchasesProviderProps } from '@core/purchases';
import { CloudinaryProvider, CloudinaryProviderProps } from '@core/cloudinary';

import { Network, NetworkProps } from './Network';
import { Navigation } from './Navigation';
import { Config, ConfigProps } from './Config';
import {
  ErrorBoundary,
  ErrorBoundaryProps,
} from './ErrorBoundary/ErrorBoundary';
import { AppUpdate } from './AppUpdate';

export type BootstrapProps = PropsWithChildren<{
  app: AppProviderProps;
  auth: AuthProviderProps;
  localization: LocalizationProviderProps;
  network: NetworkProps;
  config: ConfigProps;
  purchases: PurchasesProviderProps;
  errorBoundary: ErrorBoundaryProps;
  cloudinary: CloudinaryProviderProps;
}>;

export const Bootstrap: FC<BootstrapProps> = ({
  app,
  children,
  localization,
  network,
  config,
  purchases,
  errorBoundary,
  cloudinary,
}) => {
  return (
    <ThemeProvider>
      <LocalizationProvider {...localization}>
        <ErrorBoundary {...errorBoundary}>
          <AppUpdate>
            <AppUrlListener>
              <CloudinaryProvider {...cloudinary}>
                <PurchasesProvider {...purchases}>
                  <QueryProvider>
                    <AppProvider {...app}>
                      <AuthProvider>
                        <Network {...network}>
                          <Config {...config}>
                            <Navigation>{children}</Navigation>
                          </Config>
                        </Network>
                      </AuthProvider>
                    </AppProvider>
                  </QueryProvider>
                </PurchasesProvider>
              </CloudinaryProvider>
            </AppUrlListener>
          </AppUpdate>
        </ErrorBoundary>
      </LocalizationProvider>
    </ThemeProvider>
  );
};
