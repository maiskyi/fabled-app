import { FC, PropsWithChildren } from 'react';

import { ThemeProvider } from '@core/uikit';
import { QueryProvider, AppProvider, AppProviderProps } from '@core/app';
import {
  LocalizationProvider,
  LocalizationProviderProps,
} from '@core/localization';
import { AppUrlListener } from '@core/navigation';
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
import { Purchases, PurchasesProps } from './Purchases';

export type BootstrapProps = PropsWithChildren<{
  app: AppProviderProps;
  auth: AuthProps;
  localization: LocalizationProviderProps;
  network: NetworkProps;
  config: ConfigProps;
  purchases: PurchasesProps;
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
                <Purchases {...purchases}>
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
                </Purchases>
              </AppUrlListener>
            </AppUpdate>
          </AnalyticsProvider>
        </ErrorBoundary>
      </LocalizationProvider>
    </ThemeProvider>
  );
};
