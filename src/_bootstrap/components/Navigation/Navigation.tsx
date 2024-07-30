import { FC, PropsWithChildren } from 'react';

import { NavigationProvider } from '@core/navigation';
import { useAuth } from '@core/auth';

import { Role, RoutePath } from '../../constants';

export type NavigationProps = PropsWithChildren<{}>;

export const Navigation: FC<NavigationProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  const roles = isAuthenticated ? [Role.User] : [Role.None];

  const defaultProtectedRedirect = isAuthenticated
    ? RoutePath.Index
    : RoutePath.Auth;

  return (
    <NavigationProvider
      roles={roles}
      defaultProtectedRedirect={defaultProtectedRedirect}
    >
      {children}
    </NavigationProvider>
  );
};
