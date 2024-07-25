import { memo } from 'react';
import { Redirect, Route } from 'react-router-dom';

import { useAuth } from '@core/auth';
import { setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { RoutePath } from '@bootstrap/constants';

import { Root } from './root/routes';
import { Auth } from './auth/routes';

setupIonicReact();

export const Router = memo(() => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return (
      <IonReactRouter>
        <Route exact path={RoutePath.Root}>
          <Redirect to={RoutePath.Home} />
        </Route>
        <Route exact path={RoutePath.Any}>
          <Redirect to={RoutePath.Home} />
        </Route>
        <Root />
      </IonReactRouter>
    );
  }

  return (
    <IonReactRouter>
      <Route exact path={RoutePath.Root}>
        <Redirect to={RoutePath.Auth} />
      </Route>
      <Route exact path={RoutePath.Any}>
        <Redirect to={RoutePath.Auth} />
      </Route>
      <Route path={RoutePath.Auth}>
        <Auth />
      </Route>
    </IonReactRouter>
  );
});

Router.displayName = 'Router';
