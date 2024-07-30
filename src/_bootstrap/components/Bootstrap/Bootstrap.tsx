import { FC, PropsWithChildren } from 'react';

import { AuthProvider } from '@core/auth';
import { ThemeProvider } from '@core/uikit';
import { FirestoreProvider } from '@core/firestore';
import { NetworkProvider } from '@core/network';

import { Navigation } from '../Navigation/Navigation';

export type BootstrapProps = PropsWithChildren<{}>;

export const Bootstrap: FC<BootstrapProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Navigation>
          <NetworkProvider>
            <FirestoreProvider>{children}</FirestoreProvider>
          </NetworkProvider>
        </Navigation>
      </AuthProvider>
    </ThemeProvider>
  );
};
