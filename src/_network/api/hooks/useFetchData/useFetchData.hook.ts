import { useContextSelector } from 'use-context-selector';

import { ApiContext } from '../../contexts/ApiContext';

export const useFetchData = <TData, TVariables>(
  query: string
): ((variables?: TVariables) => Promise<TData>) => {
  const instance = useContextSelector(ApiContext, ({ instance }) => instance);

  return async (variables?: TVariables) => {
    return instance
      .post('/', {
        query,
        variables: variables,
      })
      .then((response) => response?.data?.data);
  };
};
