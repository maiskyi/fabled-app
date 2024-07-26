import { FC, PropsWithChildren } from 'react';

import { AuthProvider } from '@core/auth';
import { ThemeProvider } from '@core/uikit';
import { FirestoreProvider } from '@core/firestore';
import { NetworkProvider } from '@core/network';

export type BootstrapProps = PropsWithChildren<{}>;

export const Bootstrap: FC<BootstrapProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <NetworkProvider>
          <FirestoreProvider>{children}</FirestoreProvider>
        </NetworkProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};
