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
import {
  ErrorBoundaryProvider,
  ErrorBoundaryProviderProps,
} from '@core/analytics';

import { Network, NetworkProps } from './Network';
import { Navigation } from './Navigation';
import { Config, ConfigProps } from './Config';

export type BootstrapProps = PropsWithChildren<{
  app: AppProviderProps;
  auth: AuthProviderProps;
  localization: LocalizationProviderProps;
  network: NetworkProps;
  config: ConfigProps;
  purchases: PurchasesProviderProps;
  errorBoundary: ErrorBoundaryProviderProps;
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
    <ErrorBoundaryProvider {...errorBoundary}>
      <AppUrlListener>
        <ThemeProvider>
          <PurchasesProvider {...purchases}>
            <QueryProvider>
              <Network {...network}>
                <Config {...config}>
                  <LocalizationProvider {...localization}>
                    <AppProvider {...app}>
                      <AuthProvider>
                        <Navigation>{children}</Navigation>
                      </AuthProvider>
                    </AppProvider>
                  </LocalizationProvider>
                </Config>
              </Network>
            </QueryProvider>
          </PurchasesProvider>
        </ThemeProvider>
      </AppUrlListener>
    </ErrorBoundaryProvider>
  );
};
