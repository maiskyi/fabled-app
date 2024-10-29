import { AxiosResponse, InternalAxiosRequestConfig } from 'axios';

export type OnResponseFulfilledCallback<T = unknown> =
  | ((value: AxiosResponse<T>) => AxiosResponse<T> | Promise<AxiosResponse<T>>)
  | null;

export type OnRequestFulfilledCallback =
  | ((
      value: InternalAxiosRequestConfig
    ) => InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig>)
  | null;
