import { FC } from 'react';

import {
  AuthProvider,
  AuthProviderProps,
  AuthStateChangeParams,
} from '@core/auth';
import { useAnalytics } from '@core/analytics';

export type AuthProps = AuthProviderProps;

export const Auth: FC<AuthProps> = ({ children, ...props }) => {
  const { identify } = useAnalytics();

  const handleOnAuthStateChange = ({ user }: AuthStateChangeParams) => {
    identify({
      id: user?.uid,
      traits: {
        displayName: user?.displayName,
        email: user?.email,
      },
    });
  };

  return (
    <AuthProvider {...props} onAuthStateChange={handleOnAuthStateChange}>
      {children}
    </AuthProvider>
  );
};
