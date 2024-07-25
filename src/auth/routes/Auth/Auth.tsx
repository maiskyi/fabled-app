import { memo } from 'react';
import { Route } from 'react-router-dom';

import { RoutePath } from '@bootstrap/constants';

import { Index } from './Index/Index';

export const Auth = memo(() => {
  return (
    <>
      <Route exact path={RoutePath.Auth}>
        <Index />
      </Route>
    </>
  );
});

Auth.displayName = 'Auth';
