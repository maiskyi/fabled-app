import { FC, PropsWithChildren, useRef } from 'react';
import axios from 'axios';
import { stringify } from 'qs';

import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  split,
} from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';

import { ApiContext } from '../../contexts/ApiContext';

export type ApiProviderProps = PropsWithChildren<{
  endpoint: string;
  subscription: string;
}>;

export const ApiProvider: FC<ApiProviderProps> = ({
  children,
  endpoint,
  subscription,
}) => {
  const { current: instance } = useRef(
    axios.create({
      baseURL: endpoint,
      paramsSerializer: (params) => stringify(params, { indices: false }),
      timeout: 30000,
    })
  );

  const { current: httpLink } = useRef(
    new HttpLink({
      uri: endpoint,
    })
  );

  const { current: wsLink } = useRef(
    new GraphQLWsLink(
      createClient({
        url: subscription,
      })
    )
  );

  const { current: splitLink } = useRef(
    split(
      ({ query }) => {
        const definition = getMainDefinition(query);
        return (
          definition.kind === 'OperationDefinition' &&
          definition.operation === 'subscription'
        );
      },
      wsLink,
      httpLink
    )
  );

  const { current: client } = useRef(
    new ApolloClient({
      cache: new InMemoryCache(),
      link: splitLink,
    })
  );

  return (
    <ApiContext.Provider value={{ instance }}>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </ApiContext.Provider>
  );
};
