import { FC, PropsWithChildren } from 'react';

import { NavigationProvider } from '@core/navigation';
import { useAuth } from '@core/auth';

import { Role, RoutePath } from '../../constants';

export type NavigationProps = PropsWithChildren<{}>;

export const Navigation: FC<NavigationProps> = ({ children }) => {
  const { isAuthenticated, user } = useAuth();

  const roles = (() => {
    if (isAuthenticated && user?.emailVerified) {
      return [Role.User];
    }
    if (isAuthenticated && !user?.emailVerified) {
      return [Role.Unverified];
    }
    return [Role.None];
  })();

  const defaultProtectedRedirect = (() => {
    if (isAuthenticated && user?.emailVerified) {
      return RoutePath.Index;
    }
    if (isAuthenticated && !user?.emailVerified) {
      return RoutePath.VerifyEmail;
    }
    return RoutePath.Auth;
  })();

  return (
    <NavigationProvider
      defaultProtectedRedirect={defaultProtectedRedirect}
      roles={roles}
    >
      {children}
    </NavigationProvider>
  );
};
