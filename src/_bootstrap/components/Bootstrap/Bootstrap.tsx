import { FC, PropsWithChildren } from 'react';

import { AuthProvider } from '@core/auth';
import { ThemeProvider } from '@core/uikit';

export type BootstrapProps = PropsWithChildren<{}>;

export const Bootstrap: FC<BootstrapProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  );
};
