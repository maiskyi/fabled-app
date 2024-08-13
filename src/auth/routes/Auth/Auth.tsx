import { memo } from 'react';
import { Route } from 'react-router-dom';

import { RoutePath } from '@bootstrap/constants';
import { Page } from '@core/uikit';
import { RouterOutlet } from '@core/navigation';

import { Index } from './Index/Index';
import { SignUp } from './SignUp/SignUp';
import { VerifyEmail } from './VerifyEmail/VerifyEmail';
import { SignIn } from './SignIn/SignIn';
import { Action } from './Action/Action';
import { EmailVerification } from './EmailVerification/EmailVerification';

export const Auth = memo(function Auth() {
  return (
    <Page>
      <RouterOutlet>
        <Route exact path={RoutePath.Auth}>
          <Index />
        </Route>
        <Route path={RoutePath.AuthSignIn}>SignIn</Route>
        <Route path={RoutePath.AuthVerifyEmail}>
          <VerifyEmail />
        </Route>
        <Route path={RoutePath.AuthSignUp}>
          <SignUp />
        </Route>
        <Route path={RoutePath.AuthSignIn}>
          <SignIn />
        </Route>
        <Route path={RoutePath.AuthAction}>
          <Action />
        </Route>
        <Route path={RoutePath.AuthEmailVerification}>
          <EmailVerification />
        </Route>
      </RouterOutlet>
    </Page>
  );
});
