import { FC, PropsWithChildren } from 'react';

import { FirebaseApp } from 'firebase/app';

export type AuthProviderProps = PropsWithChildren<{
  app: FirebaseApp;
}>;

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  return <>{children}</>;
};
