import { FC, PropsWithChildren } from 'react';
import { Redirect } from 'react-router-dom';
import { intersection } from 'lodash';
import { useContextSelector } from 'use-context-selector';

import { NavigationContext } from '../../contexts/NavigationContext';

export type ProtectedWithRedirectProps = PropsWithChildren<{
  roles: string[];
}>;

export const ProtectedWithRedirect: FC<ProtectedWithRedirectProps> = ({
  roles,
  children,
}) => {
  const protectedRedirectPathname = useContextSelector(
    NavigationContext,
    ({ defaultProtectedRedirect }) => defaultProtectedRedirect
  );

  const currentRoles = useContextSelector(
    NavigationContext,
    ({ roles }) => roles
  );

  const isProtected = !intersection(currentRoles, roles)?.length;

  if (isProtected) {
    return <Redirect to={{ pathname: protectedRedirectPathname }} />;
  }

  return <>{children}</>;
};
