import { useCallback, useMemo } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { NavigateParams } from './useRoute.types';

interface UseRouteState<P extends object> {
  params: P;
}

type UseRouteDispatch = (params: NavigateParams) => void;

type UseRouteReturnType<P extends object> = [
  UseRouteState<P>,
  UseRouteDispatch,
];

export const useRoute = <P extends object = {}>(): UseRouteReturnType<P> => {
  const params = useParams<P>();

  const { goBack, push } = useHistory();

  const navigate: UseRouteDispatch = useCallback(
    (params): void => {
      if ('back' in params) {
        goBack();
      } else {
        push({ pathname: params.pathname });
      }
    },
    [goBack, push]
  );

  return useMemo(() => [{ params }, navigate], [params, navigate]);
};
