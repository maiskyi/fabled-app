import { FC } from 'react';

import {
  Bootstrap,
  BootstrapProps,
  Init,
  InitProps,
} from '@bootstrap/components';

import { Router } from './Router';

export interface AppProps {
  bootstrap: BootstrapProps;
  init: InitProps;
}

export const App: FC<AppProps> = ({ bootstrap, init }) => (
  <Bootstrap {...bootstrap}>
    <Init {...init}>
      <Router />
    </Init>
  </Bootstrap>
);
