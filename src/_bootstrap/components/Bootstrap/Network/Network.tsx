import { FC, PropsWithChildren } from 'react';
import { merge } from 'lodash';

import {
  ContentfulProvider,
  RequestInterceptorFulfilledFn,
} from '@network/contentful';

import { NetworkContentfulProps } from './Network.types';

export type NetworkProps = PropsWithChildren<{
  contentful: NetworkContentfulProps;
}>;

export const Network: FC<NetworkProps> = ({ children, contentful }) => {
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
      {children}
    </ContentfulProvider>
  );
};
