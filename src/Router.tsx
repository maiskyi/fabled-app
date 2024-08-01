import { memo } from 'react';

import { RoutePath, Role } from '@bootstrap/constants';
import {
  Route,
  RouterOutlet,
  ProtectedWithRedirect,
  Router as NavRouter,
} from '@core/navigation';

import { Auth } from './auth/routes';
import { Create } from './create/routes';
import { Home } from './home/routes';
import { Request } from './request/routes';

export const Router = memo(function Router() {
  return (
    <NavRouter>
      <RouterOutlet>
        <Route path={RoutePath.Index}>
          <RouterOutlet>
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
            <Route exact path={RoutePath.Request}>
              <ProtectedWithRedirect roles={[Role.User]}>
                <Request />
              </ProtectedWithRedirect>
            </Route>
            <Route exact path={RoutePath.Auth}>
              <ProtectedWithRedirect roles={[Role.None]}>
                <Auth />
              </ProtectedWithRedirect>
            </Route>
          </RouterOutlet>
        </Route>
      </RouterOutlet>
    </NavRouter>
  );
});
