import { FC } from 'react';
import { useMount } from 'react-use';
import { generatePath } from 'react-router';

import { RouteAction, useIonRouter } from '@ionic/react';

import { stringify } from '../../utils/queryString';

import { RedirectDirection } from './Redirect.types';

export interface RedirectProps {
  pathname: string;
  params?: object;
  search?: object;
  direction?: RedirectDirection;
  action?: RouteAction;
}

export const Redirect: FC<RedirectProps> = ({
  pathname: initialPathname,
  params,
  search,
  direction = 'forward',
  action = 'replace',
}) => {
  const router = useIonRouter();

  useMount(() => {
    const pathname = generatePath(initialPathname, params) + stringify(search);
    router.push(pathname, direction, action);
  });

  return null;
};
