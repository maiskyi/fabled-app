import { FC, PropsWithChildren } from 'react';

import { AuthProvider, AuthProviderProps } from '@core/auth';
import { ThemeProvider } from '@core/uikit';

export type BootstrapProps = PropsWithChildren<{
  auth: AuthProviderProps;
}>;

export const Bootstrap: FC<BootstrapProps> = ({ auth, children }) => {
  return (
    <ThemeProvider>
      <AuthProvider {...auth}>{children}</AuthProvider>
    </ThemeProvider>
  );
};
