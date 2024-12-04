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
import { FablesProvider } from './home/providers';
import { ChangePassword } from './change-password/routes';
import { ChangeName } from './change-name/routes';
import { Subscribe } from './subscribe/routes';
import { Plan } from './plan/routes';

const USER_ROLES = [Role.User];

const AUTH_ROLES = [Role.None, Role.Unverified];

export const Router = memo(function Router() {
  return (
    <NavRouter>
      <RouterOutlet>
        <Route exact path={RoutePath.Index}>
          <ProtectedWithRedirect roles={USER_ROLES}>
            <FablesProvider>
              <Home />
            </FablesProvider>
          </ProtectedWithRedirect>
        </Route>
        <Route path={RoutePath.Create}>
          <ProtectedWithRedirect roles={USER_ROLES}>
            <Create />
          </ProtectedWithRedirect>
        </Route>
        <Route path={RoutePath.Profile}>
          <ProtectedWithRedirect roles={USER_ROLES}>
            <Profile />
          </ProtectedWithRedirect>
        </Route>
        <Route path={RoutePath.Feedback}>
          <ProtectedWithRedirect roles={USER_ROLES}>
            <Feedback />
          </ProtectedWithRedirect>
        </Route>
        <Route path={RoutePath.Fable}>
          <ProtectedWithRedirect roles={USER_ROLES}>
            <Fable />
          </ProtectedWithRedirect>
        </Route>
        <Route path={RoutePath.ChangePassword}>
          <ProtectedWithRedirect roles={USER_ROLES}>
            <ChangePassword />
          </ProtectedWithRedirect>
        </Route>
        <Route path={RoutePath.ChangeName}>
          <ProtectedWithRedirect roles={USER_ROLES}>
            <ChangeName />
          </ProtectedWithRedirect>
        </Route>
        <Route path={RoutePath.Subscribe}>
          <ProtectedWithRedirect roles={USER_ROLES}>
            <Subscribe />
          </ProtectedWithRedirect>
        </Route>
        <Route path={RoutePath.Plan}>
          <ProtectedWithRedirect roles={USER_ROLES}>
            <Plan />
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
          <ProtectedWithRedirect roles={AUTH_ROLES}>
            <Auth />
          </ProtectedWithRedirect>
        </Route>
        <Route path={RoutePath.SignUp}>
          <ProtectedWithRedirect roles={AUTH_ROLES}>
            <SignUp />
          </ProtectedWithRedirect>
        </Route>
        <Route path={RoutePath.VerifyEmail}>
          <ProtectedWithRedirect roles={AUTH_ROLES}>
            <VerifyEmail />
          </ProtectedWithRedirect>
        </Route>
        <Route path={RoutePath.SignIn}>
          <ProtectedWithRedirect roles={AUTH_ROLES}>
            <SignIn />
          </ProtectedWithRedirect>
        </Route>
        <Route path={RoutePath.ForgotPassword}>
          <ProtectedWithRedirect roles={AUTH_ROLES}>
            <ForgotPassword />
          </ProtectedWithRedirect>
        </Route>
        <Route path={RoutePath.Action}>
          <ProtectedWithRedirect roles={AUTH_ROLES}>
            <Action />
          </ProtectedWithRedirect>
        </Route>
      </RouterOutlet>
    </NavRouter>
  );
});
