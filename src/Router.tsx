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
import { Profile } from './profile/routes';
import { ContactUs } from './contact-us/routes';
import { Feedback } from './feeadback/routes';
import { Fable } from './fable/routes';

export const Router = memo(function Router() {
  return (
    <NavRouter>
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
        <Route path={RoutePath.Profile}>
          <ProtectedWithRedirect roles={[Role.User]}>
            <Profile />
          </ProtectedWithRedirect>
        </Route>
        <Route path={RoutePath.Feedback}>
          <ProtectedWithRedirect roles={[Role.User]}>
            <Feedback />
          </ProtectedWithRedirect>
        </Route>
        <Route path={RoutePath.Fable}>
          <ProtectedWithRedirect roles={[Role.User]}>
            <Fable />
          </ProtectedWithRedirect>
        </Route>
        <Route path={RoutePath.ContactUs}>
          <ContactUs />
        </Route>
        <Route path={RoutePath.Auth}>
          <ProtectedWithRedirect roles={[Role.None, Role.Unverified]}>
            <Auth />
          </ProtectedWithRedirect>
        </Route>
      </RouterOutlet>
    </NavRouter>
  );
});
