import { memo } from 'react';
import { Route } from 'react-router-dom';

import { RoutePath } from '@bootstrap/constants';
import { Page } from '@core/uikit';
import { RouterOutlet } from '@core/navigation';

import { Index } from './Index/Index';
import { Action } from './Action/Action';

export const Auth = memo(function Auth() {
  return (
    <Page>
      <RouterOutlet>
        <Route exact path={RoutePath.Auth}>
          <Index />
        </Route>
        <Route path={RoutePath.AuthAction}>
          <Action />
        </Route>
      </RouterOutlet>
    </Page>
  );
});
