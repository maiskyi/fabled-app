import { FC } from 'react';
import { Redirect as RouterRedirect, generatePath } from 'react-router-dom';

export interface RedirectProps {
  pathname: string;
  params?: object;
  search?: object;
}

export const Redirect: FC<RedirectProps> = ({ pathname, params }) => {
  return (
    <RouterRedirect
      push={false}
      to={{ pathname: generatePath(pathname, params) }}
    />
  );
};
