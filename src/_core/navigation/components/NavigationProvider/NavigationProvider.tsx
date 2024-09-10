import { FC, PropsWithChildren, useMemo } from 'react';

import { NavigationContext } from '../../contexts/NavigationContext';

type NavigationProviderProps = PropsWithChildren<{
  roles?: string[];
  defaultProtectedRedirect?: string;
}>;

const DEFAULT_ROLES: string[] = [];

export const NavigationProvider: FC<NavigationProviderProps> = ({
  roles = DEFAULT_ROLES,
  children,
  defaultProtectedRedirect,
}) => {
  const contextValue = useMemo(
    () => ({ defaultProtectedRedirect, roles }),
    [defaultProtectedRedirect, roles]
  );

  return (
    <NavigationContext.Provider value={contextValue}>
      {children}
    </NavigationContext.Provider>
  );
};
