import { FC, PropsWithChildren } from 'react';
import { generatePath, Link as RouterLink } from 'react-router-dom';

import { stringify } from '../../utils/queryString';

export type LinkParams = PropsWithChildren<{
  pathname: string;
  params?: object;
  search?: object;
}>;

export const Link: FC<LinkParams> = ({
  pathname,
  params,
  children,
  search,
}) => {
  return (
    <RouterLink
      to={{
        pathname: generatePath(pathname, params),
        search: stringify(search),
      }}
    >
      {children}
    </RouterLink>
  );
};
