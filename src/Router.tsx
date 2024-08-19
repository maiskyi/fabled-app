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
import { Notification } from './notification/routes';
import { SignUp } from './sign-up/routes';
import { VerifyEmail } from './verify-email/routes';
import { SignIn } from './sign-in/routes';
import { ForgotPassword } from './forgot-password/routes';
import { Action } from './action/routes';

export const Router = memo(function Router() {
  return (
    <NavRouter>
      <RouterOutlet>
        <Route exact path={RoutePath.Index}>
          <ProtectedWithRedirect roles={[Role.User]}>
            <Home />
          </ProtectedWithRedirect>
        </Route>
        <Route path={RoutePath.Create}>
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
        <Route path={RoutePath.Notification}>
          <Notification />
        </Route>

        {/* Auth */}
        <Route path={RoutePath.Auth}>
          <ProtectedWithRedirect roles={[Role.None, Role.Unverified]}>
            <Auth />
          </ProtectedWithRedirect>
        </Route>
        <Route path={RoutePath.SignUp}>
          <ProtectedWithRedirect roles={[Role.None, Role.Unverified]}>
            <SignUp />
          </ProtectedWithRedirect>
        </Route>
        <Route path={RoutePath.VerifyEmail}>
          <ProtectedWithRedirect roles={[Role.None, Role.Unverified]}>
            <VerifyEmail />
          </ProtectedWithRedirect>
        </Route>
        <Route path={RoutePath.SignIn}>
          <ProtectedWithRedirect roles={[Role.None, Role.Unverified]}>
            <SignIn />
          </ProtectedWithRedirect>
        </Route>
        <Route path={RoutePath.ForgotPassword}>
          <ProtectedWithRedirect roles={[Role.None, Role.Unverified]}>
            <ForgotPassword />
          </ProtectedWithRedirect>
        </Route>
        <Route path={RoutePath.Action}>
          <ProtectedWithRedirect roles={[Role.None, Role.Unverified]}>
            <Action />
          </ProtectedWithRedirect>
        </Route>
      </RouterOutlet>
    </NavRouter>
  );
});
