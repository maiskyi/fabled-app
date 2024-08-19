import { FC } from 'react';

import { Bootstrap, BootstrapProps } from '@bootstrap/components';

import { Router } from './Router';

export interface AppProps {
  bootstrap: BootstrapProps;
}

export const App: FC<AppProps> = ({ bootstrap }) => (
  <Bootstrap {...bootstrap}>
    <Router />
  </Bootstrap>
);
