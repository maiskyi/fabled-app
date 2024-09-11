import { FC, PropsWithChildren, useRef } from 'react';
import axios from 'axios';
import { stringify } from 'qs';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import { ApiContext } from '../../contexts/ApiContext';

export type ApiProviderProps = PropsWithChildren<{
  endpoint: string;
}>;

export const ApiProvider: FC<ApiProviderProps> = ({ children, endpoint }) => {
  const { current: instance } = useRef(
    axios.create({
      baseURL: endpoint,
      paramsSerializer: (params) => stringify(params, { indices: false }),
      timeout: 30000,
    })
  );

  const { current: client } = useRef(
    new ApolloClient({
      cache: new InMemoryCache(),
      uri: endpoint,
    })
  );

  return (
    <ApiContext.Provider value={{ instance }}>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </ApiContext.Provider>
  );
};
