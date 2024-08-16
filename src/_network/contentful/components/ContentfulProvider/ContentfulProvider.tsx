import { FC, useRef } from 'react';
import { useUnmount } from 'react-use';
import { stringify } from 'qs';
import axios from 'axios';

import { ContentfulContext } from '../../contexts/Cotentful.context';
import {
  NetworkProviderProps,
  RequestInterceptorFulfilledFn,
  RequestInterceptorRejectedFn,
  ResponseInterceptorFulfilledFn,
  ResponseInterceptorRejectedFn,
} from '../../types';

export interface ContentfulProviderProps extends NetworkProviderProps {
  space: string;
  environment: string;
  requestInterceptorRejected?: RequestInterceptorRejectedFn;
  requestInterceptorFulfilled?: RequestInterceptorFulfilledFn;
  responseInterceptorRejected?: ResponseInterceptorRejectedFn;
  responseInterceptorFulfilled?: ResponseInterceptorFulfilledFn;
}

export const ContentfulProvider: FC<ContentfulProviderProps> = ({
  baseUrl,
  space,
  children,
  environment,
  responseInterceptorFulfilled,
  responseInterceptorRejected,
  requestInterceptorRejected,
  requestInterceptorFulfilled,
}) => {
  const { current: instance } = useRef(
    axios.create({
      baseURL: baseUrl,
      paramsSerializer: (params) => stringify(params, { indices: false }),
      timeout: 30000,
    })
  );

  const { current: requestInterceptor } = useRef(
    instance.interceptors.request.use(
      requestInterceptorFulfilled,
      requestInterceptorRejected
    )
  );

  const { current: responseInterceptor } = useRef(
    instance.interceptors.response.use(
      responseInterceptorFulfilled,
      responseInterceptorRejected
    )
  );

  useUnmount(() => {
    instance.interceptors.request.eject(requestInterceptor);
    instance.interceptors.response.eject(responseInterceptor);
  });

  return (
    <ContentfulContext.Provider
      value={{
        environment,
        instance,
        space,
      }}
    >
      {children}
    </ContentfulContext.Provider>
  );
};
