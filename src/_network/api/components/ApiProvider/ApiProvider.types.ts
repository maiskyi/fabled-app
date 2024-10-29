import { AxiosResponse } from 'axios';

export type OnResponseFulfilledCallback<T = unknown> =
  | ((value: AxiosResponse<T>) => AxiosResponse<T> | Promise<AxiosResponse<T>>)
  | null;
