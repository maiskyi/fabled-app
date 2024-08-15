import { useCallback, useMemo } from 'react';
import { useParams, generatePath, useLocation } from 'react-router-dom';

import { useIonRouter } from '@ionic/react';

import { stringify, parse } from '../../utils/queryString';

import { NavigateParams } from './useRoute.types';

interface UseRouteState<P extends object, S extends object> {
  params?: P;
  search?: S;
}

type UseRouteDispatch = (params: NavigateParams) => void;

type UseRouteReturnType<P extends object, S extends object> = [
  UseRouteState<P, S>,
  UseRouteDispatch,
];

export const useRoute = <
  P extends object = {},
  S extends object = {},
>(): UseRouteReturnType<P, S> => {
  const params = useParams<P>();
  const { search: initialSearch } = useLocation();

  const router = useIonRouter();

  const search = useMemo((): S => {
    return parse(initialSearch) as S;
  }, [initialSearch]);

  const navigate: UseRouteDispatch = useCallback(
    (params): void => {
      const pathname =
        generatePath(params.pathname, params.params) + stringify(params.search);
      if (params.action === 'back' && router.canGoBack()) {
        return router.goBack();
      }
      if (params.action === 'back' && !router.canGoBack()) {
        return router.push(pathname, 'back', 'replace');
      }
      if (params.action === 'push') {
        return router.push(pathname);
      }
      if (params.action === 'replace') {
        return router.push(pathname, 'forward', 'replace');
      }
    },
    [router]
  );

  return useMemo(
    () => [{ params, search }, navigate],
    [params, navigate, search]
  );
};
