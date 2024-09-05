import { Fragment, memo, useMemo } from 'react';

import { RoutePath } from '@bootstrap/constants';
import { Route, RouterOutlet, Router as NavRouter } from '@core/navigation';
import { useAuth } from '@core/auth';

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

export const Router = memo(function Router() {
  const { isAuthenticated, user } = useAuth();

  const common = useMemo(() => {
    return (
      <Fragment>
        <Route path={RoutePath.ContactUs}>
          <ContactUs />
        </Route>
        <Route path={RoutePath.Notification}>
          <Notification />
        </Route>
      </Fragment>
    );
  }, []);

  if (isAuthenticated && user.emailVerified) {
    return (
      <NavRouter>
        <RouterOutlet>
          <Route exact path={RoutePath.Index}>
            <Home />
          </Route>
          <Route path={RoutePath.Create}>
            <Create />
          </Route>
          <Route path={RoutePath.Profile}>
            <Profile />
          </Route>
          <Route path={RoutePath.Feedback}>
            <Feedback />
          </Route>
          <Route path={RoutePath.Fable}>
            <Fable />
          </Route>
          {common}
        </RouterOutlet>
      </NavRouter>
    );
  }

  return (
    <NavRouter>
      <RouterOutlet>
        <Route path={RoutePath.Auth}>
          <Auth />
        </Route>
        <Route path={RoutePath.SignUp}>
          <SignUp />
        </Route>
        <Route path={RoutePath.VerifyEmail}>
          <VerifyEmail />
        </Route>
        <Route path={RoutePath.SignIn}>
          <SignIn />
        </Route>
        <Route path={RoutePath.ForgotPassword}>
          <ForgotPassword />
        </Route>
        <Route path={RoutePath.Action}>
          <Action />
        </Route>
        {common}
      </RouterOutlet>
    </NavRouter>
  );
});
