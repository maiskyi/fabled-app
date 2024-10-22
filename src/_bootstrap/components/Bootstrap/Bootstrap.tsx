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
          <AppUrlListener>
            <PurchasesProvider {...purchases}>
              <QueryProvider>
                <Network {...network}>
                  <Config {...config}>
                    <AppProvider {...app}>
                      <AuthProvider>
                        <Navigation>{children}</Navigation>
                      </AuthProvider>
                    </AppProvider>
                  </Config>
                </Network>
              </QueryProvider>
            </PurchasesProvider>
          </AppUrlListener>
        </ErrorBoundary>
      </LocalizationProvider>
    </ThemeProvider>
  );
};
