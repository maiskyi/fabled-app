import { memo } from 'react';

import { RoutePath, Role } from '@bootstrap/constants';
import {
  Route,
  ViewOutlet,
  ProtectedWithRedirect,
  Router as NavRouter,
} from '@core/navigation';

import { Auth } from './auth/routes';
import { Create } from './create/routes';
import { Home } from './home/routes';

export const Router = memo(function Router() {
  return (
    <NavRouter>
      <ViewOutlet>
        <Route path={RoutePath.Index}>
          <Route exact path={RoutePath.Index}>
            <ProtectedWithRedirect roles={[Role.User]}>
              <Home />
            </ProtectedWithRedirect>
          </Route>
          <Route exact path={RoutePath.Create}>
            <ProtectedWithRedirect roles={[Role.User]}>
              <Create />
            </ProtectedWithRedirect>
          </Route>
          <Route exact path={RoutePath.Auth}>
            <ProtectedWithRedirect roles={[Role.None]}>
              <Auth />
            </ProtectedWithRedirect>
          </Route>
        </Route>
      </ViewOutlet>
    </NavRouter>
  );
});
