import { FC, PropsWithChildren } from 'react';
import { merge } from 'lodash';

import {
  ContentfulProvider,
  RequestInterceptorFulfilledFn,
} from '@network/contentful';
import { ApiProvider, ApiProviderProps } from '@network/api';

import { NetworkContentfulProps } from './Network.types';

export type NetworkProps = PropsWithChildren<{
  contentful: NetworkContentfulProps;
  api: ApiProviderProps;
}>;

export const Network: FC<NetworkProps> = ({ children, contentful, api }) => {
  const requestInterceptorFulfilled: RequestInterceptorFulfilledFn = async (
    config
  ) => {
    return merge({}, config, {
      headers: {
        Authorization: `Bearer ${contentful.apiKey}`,
      },
    });
  };

  return (
    <ContentfulProvider
      {...contentful}
      requestInterceptorFulfilled={requestInterceptorFulfilled}
    >
      <ApiProvider {...api}>{children}</ApiProvider>
    </ContentfulProvider>
  );
};
