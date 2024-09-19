import { FC, PropsWithChildren } from 'react';

import { AuthProvider, AuthProviderProps } from '@core/auth';
import { ThemeProvider } from '@core/uikit';
import { NetworkProvider, AppProvider, AppProviderProps } from '@core/app';
import {
  LocalizationProvider,
  LocalizationProviderProps,
} from '@core/localization';
import { AppUrlListener } from '@core/navigation';

import { Network, NetworkProps } from './Network';
import { Navigation } from './Navigation';
import { Config, ConfigProps } from './Config';

export type BootstrapProps = PropsWithChildren<{
  app: AppProviderProps;
  auth: AuthProviderProps;
  localization: LocalizationProviderProps;
  network: NetworkProps;
  config: ConfigProps;
}>;

export const Bootstrap: FC<BootstrapProps> = ({
  app,
  children,
  localization,
  network,
  config,
}) => {
  return (
    <AppUrlListener>
      <ThemeProvider>
        <NetworkProvider>
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
        </NetworkProvider>
      </ThemeProvider>
    </AppUrlListener>
  );
};
