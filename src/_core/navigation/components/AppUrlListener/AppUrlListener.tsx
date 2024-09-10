import { FC, PropsWithChildren } from 'react';
import { useMount } from 'react-use';

import { App, URLOpenListenerEvent } from '@capacitor/app';

import { HISTORY } from '../../constants';

export type AppUrlListenerProps = PropsWithChildren<{}>;

export const AppUrlListener: FC<AppUrlListenerProps> = ({ children }) => {
  useMount(() => {
    App.addListener('appUrlOpen', ({ url }: URLOpenListenerEvent) => {
      const { search, pathname } = new URL(url);
      HISTORY.push({ pathname, search });
    });
  });

  return <>{children}</>;
};
