import { FC, PropsWithChildren } from 'react';

import { AuthProvider, AuthProviderProps } from '@core/auth';

export type BootstrapProps = PropsWithChildren<{
  auth: AuthProviderProps;
}>;

export const Bootstrap: FC<BootstrapProps> = ({ auth, children }) => {
  return <AuthProvider {...auth}>{children}</AuthProvider>;
};
