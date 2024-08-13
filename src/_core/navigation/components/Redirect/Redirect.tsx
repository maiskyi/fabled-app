import { FC } from 'react';
import { useMount } from 'react-use';
import { generatePath } from 'react-router';

import { useIonRouter } from '@ionic/react';

import { stringify } from '../../utils/queryString';

export interface RedirectProps {
  pathname: string;
  params?: object;
  search?: object;
}

export const Redirect: FC<RedirectProps> = ({
  pathname: initialPathname,
  params,
  search,
}) => {
  const router = useIonRouter();

  useMount(() => {
    const pathname = generatePath(initialPathname, params) + stringify(search);
    router.push(pathname, 'forward', 'replace');
  });

  return null;
};
