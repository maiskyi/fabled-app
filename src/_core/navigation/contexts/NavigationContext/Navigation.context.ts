import { createContext } from 'use-context-selector';

export interface NavigationContextProps {
  roles: string[];
  defaultProtectedRedirect: string;
}

export const NavigationContext = createContext<NavigationContextProps>({
  roles: [],
  defaultProtectedRedirect: '/',
});
