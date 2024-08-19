import { FC, useEffect, useRef } from 'react';
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

import { getBaseUrl } from './ContentfulProvider.utils';

export interface ContentfulProviderProps extends NetworkProviderProps {
  space: string;
  environment: string;
  requestInterceptorRejected?: RequestInterceptorRejectedFn;
  requestInterceptorFulfilled?: RequestInterceptorFulfilledFn;
  responseInterceptorRejected?: ResponseInterceptorRejectedFn;
  responseInterceptorFulfilled?: ResponseInterceptorFulfilledFn;
}

export const ContentfulProvider: FC<ContentfulProviderProps> = ({
  space,
  children,
  environment,
  responseInterceptorFulfilled = null,
  responseInterceptorRejected = null,
  requestInterceptorRejected = null,
  requestInterceptorFulfilled = null,
}) => {
  const { current: instance } = useRef(
    axios.create({
      baseURL: getBaseUrl({ environment, space }),
      paramsSerializer: (params) => stringify(params, { indices: false }),
      timeout: 30000,
    })
  );

  instance.interceptors.request.use(
    requestInterceptorFulfilled,
    requestInterceptorRejected
  );

  instance.interceptors.response.use(
    responseInterceptorFulfilled,
    responseInterceptorRejected
  );

  useEffect(() => {
    const requestInterceptor = instance.interceptors.request.use(
      requestInterceptorFulfilled,
      requestInterceptorRejected
    );
    const responseInterceptor = instance.interceptors.response.use(
      responseInterceptorFulfilled,
      responseInterceptorRejected
    );
    return () => {
      instance.interceptors.request.eject(requestInterceptor);
      instance.interceptors.response.eject(responseInterceptor);
    };
  }, [
    instance.interceptors.request,
    instance.interceptors.response,
    requestInterceptorFulfilled,
    requestInterceptorRejected,
    responseInterceptorFulfilled,
    responseInterceptorRejected,
  ]);

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
