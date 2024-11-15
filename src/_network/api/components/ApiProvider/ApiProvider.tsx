import { FC, PropsWithChildren, useLayoutEffect, useRef } from 'react';
import axios from 'axios';
import { stringify } from 'qs';

import { ApiContext } from '../../contexts/ApiContext';

import {
  OnResponseFulfilledCallback,
  OnRequestFulfilledCallback,
} from './ApiProvider.types';

export type ApiProviderProps = PropsWithChildren<{
  endpoint: string;
  onRequestFulfilled?: OnRequestFulfilledCallback;
  onResponseFulfilled?: OnResponseFulfilledCallback<any>;
}>;

export const ApiProvider: FC<ApiProviderProps> = ({
  children,
  endpoint,
  onResponseFulfilled = null,
  onRequestFulfilled = null,
}) => {
  const { current: instance } = useRef(
    axios.create({
      baseURL: endpoint,
      paramsSerializer: (params) => stringify(params, { indices: false }),
      timeout: 30000,
    })
  );

  useLayoutEffect(() => {
    const request = instance.interceptors.request.use(onRequestFulfilled);
    const response = instance.interceptors.response.use(onResponseFulfilled);
    return () => {
      instance.interceptors.request.eject(request);
      instance.interceptors.response.eject(response);
    };
  }, [instance, onResponseFulfilled, onRequestFulfilled]);

  return (
    <ApiContext.Provider value={{ instance }}>{children}</ApiContext.Provider>
  );
};
