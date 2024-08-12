import { useCallback, useMemo } from 'react';
import {
  useParams,
  useHistory,
  generatePath,
  useLocation,
} from 'react-router-dom';

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

  const { goBack, push } = useHistory();

  const search = useMemo((): S => {
    return parse(initialSearch) as S;
  }, [initialSearch]);

  const navigate: UseRouteDispatch = useCallback(
    (params): void => {
      if ('back' in params) {
        goBack();
      } else {
        push({
          pathname: generatePath(params.pathname, params.params),
          search: stringify(params.search),
        });
      }
    },
    [goBack, push]
  );

  return useMemo(
    () => [{ params, search }, navigate],
    [params, navigate, search]
  );
};
