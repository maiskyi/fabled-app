import { FC, PropsWithChildren, useContext } from 'react';
import { intersection } from 'lodash';

import { NavigationContext } from '../../contexts/NavigationContext';
import { Redirect } from '../Redirect';

export type ProtectedWithRedirectProps = PropsWithChildren<{
  roles: string[];
}>;

export const ProtectedWithRedirect: FC<ProtectedWithRedirectProps> = ({
  roles,
  children,
}) => {
  const {
    roles: currentRoles,
    defaultProtectedRedirect: protectedRedirectPathname,
  } = useContext(NavigationContext);

  const isProtected = !intersection(currentRoles, roles)?.length;

  if (isProtected) {
    return <Redirect direction="root" pathname={protectedRedirectPathname} />;
  }

  return <>{children}</>;
};
