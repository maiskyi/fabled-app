import { useContext } from 'use-context-selector';

import { ContentfulContext } from '../../contexts/Cotentful.context';

export const useFetchData = <TData, TVariables>(
  query: string
): ((variables?: TVariables) => Promise<TData>) => {
  const { instance } = useContext(ContentfulContext);

  return (variables?: TVariables) => {
    return instance
      .post('/', {
        query,
        variables: variables,
      })
      .then((response) => response?.data?.data);
  };
};
