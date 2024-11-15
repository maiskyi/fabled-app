import { AxiosRequestConfig } from 'axios';
import { useContextSelector } from 'use-context-selector';

import { QueryFunctionContext } from '@tanstack/react-query';

import { ApiContext } from '../../contexts/ApiContext';

export const useCustomInstance = <T>(): ((
  config: AxiosRequestConfig,
  context?: QueryFunctionContext
) => Promise<T>) => {
  const instance = useContextSelector(ApiContext, ({ instance }) => instance);

  return (config: AxiosRequestConfig, context?: QueryFunctionContext) => {
    return instance({
      ...config,
      signal: context?.signal,
    })
      .then(({ data }) => data)
      .catch((error) => {
        throw error;
      });
  };
};
