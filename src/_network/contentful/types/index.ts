import { PropsWithChildren } from 'react';
import { InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

export type RequestInterceptorFulfilledFn = (
  v: InternalAxiosRequestConfig
) => Promise<InternalAxiosRequestConfig>;

export type RequestInterceptorRejectedFn<T = any> = (
  error: AxiosError<T>
) => Promise<AxiosError<T>>;

export type ResponseInterceptorFulfilledFn<T = any> = (
  value: AxiosResponse<T>
) => Promise<AxiosResponse<T>>;

export type ResponseInterceptorRejectedFn<T = any> = (
  error: AxiosError<T>
) => Promise<AxiosError<T>>;

export type NetworkProviderProps = PropsWithChildren<{
  requestInterceptorRejected?: RequestInterceptorRejectedFn;
  requestInterceptorFulfilled?: RequestInterceptorFulfilledFn;
  responseInterceptorRejected?: ResponseInterceptorRejectedFn;
  responseInterceptorFulfilled?: ResponseInterceptorFulfilledFn;
}>;
