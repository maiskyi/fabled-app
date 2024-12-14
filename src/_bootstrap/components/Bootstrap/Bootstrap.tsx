import { FC, PropsWithChildren } from 'react';

import { ThemeProvider } from '@core/uikit';
import { QueryProvider, AppProvider, AppProviderProps } from '@core/app';
import {
  LocalizationProvider,
  LocalizationProviderProps,
} from '@core/localization';
import { AppUrlListener } from '@core/navigation';
import { PurchasesProvider, PurchasesProviderProps } from '@core/purchases';
import { AnalyticsProvider, AnalyticsProviderProps } from '@core/analytics';

import { Network, NetworkProps } from './Network';
import { Navigation } from './Navigation';
import { Config, ConfigProps } from './Config';
import {
  ErrorBoundary,
  ErrorBoundaryProps,
} from './ErrorBoundary/ErrorBoundary';
import { AppUpdate } from './AppUpdate';
import { Auth, AuthProps } from './Auth';

export type BootstrapProps = PropsWithChildren<{
  app: AppProviderProps;
  auth: AuthProps;
  localization: LocalizationProviderProps;
  network: NetworkProps;
  config: ConfigProps;
  purchases: PurchasesProviderProps;
  errorBoundary: ErrorBoundaryProps;
  analytics: AnalyticsProviderProps;
}>;

export const Bootstrap: FC<BootstrapProps> = ({
  app,
  children,
  localization,
  network,
  config,
  purchases,
  errorBoundary,
  analytics,
}) => {
  return (
    <ThemeProvider>
      <LocalizationProvider {...localization}>
        <ErrorBoundary {...errorBoundary}>
          <AnalyticsProvider {...analytics}>
            <AppUpdate>
              <AppUrlListener>
                <PurchasesProvider {...purchases}>
                  <QueryProvider>
                    <AppProvider {...app}>
                      <Auth>
                        <Network {...network}>
                          <Config {...config}>
                            <Navigation>{children}</Navigation>
                          </Config>
                        </Network>
                      </Auth>
                    </AppProvider>
                  </QueryProvider>
                </PurchasesProvider>
              </AppUrlListener>
            </AppUpdate>
          </AnalyticsProvider>
        </ErrorBoundary>
      </LocalizationProvider>
    </ThemeProvider>
  );
};
