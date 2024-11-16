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
}>;

export const Bootstrap: FC<BootstrapProps> = ({
  app,
  children,
  localization,
  network,
  config,
  purchases,
  errorBoundary,
}) => {
  return (
    <ThemeProvider>
      <LocalizationProvider {...localization}>
        <ErrorBoundary {...errorBoundary}>
          <AppUpdate>
            <AppUrlListener>
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
            </AppUrlListener>
          </AppUpdate>
        </ErrorBoundary>
      </LocalizationProvider>
    </ThemeProvider>
  );
};
