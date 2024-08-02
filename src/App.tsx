import { FC } from 'react';

import { Bootstrap, BootstrapProps } from '@bootstrap/components';

import { Router } from './Router';

export type AppProps = BootstrapProps;

export const App: FC<AppProps> = (props) => (
  <Bootstrap {...props}>
    <Router />
  </Bootstrap>
);
