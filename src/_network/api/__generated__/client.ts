// @ts-nocheck

/**
 * Generated by orval v6.20.0 🍺
 * Do not edit manually.
 * Fabled API
 * Fabled API Documentation
 * OpenAPI spec version: 1.0
 */
import { useInfiniteQuery, useMutation, useQuery } from '@tanstack/react-query';

import { useCustomInstance } from '../hooks/useCustomInstance/index';

import type {
  InfiniteData,
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseInfiniteQueryOptions,
  UseInfiniteQueryResult,
  UseMutationOptions,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query';
import type { GetStoriesParams, Stories } from './client.schemas';

// eslint-disable-next-line
type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P
) => any
  ? P
  : never;

/**
 * @summary Get user stories
 */
export const useGetStoriesHook = () => {
  const getStories = useCustomInstance<Stories>();

  return (
    params?: GetStoriesParams,
    options?: SecondParameter<ReturnType<typeof useCustomInstance>>,
    signal?: AbortSignal
  ) => {
    return getStories(
      { method: 'get', params, signal, url: `/api/stories` },
      options
    );
  };
};

export const getGetStoriesQueryKey = (params?: GetStoriesParams) => {
  return [`/api/stories`, ...(params ? [params] : [])] as const;
};

export const useGetStoriesInfiniteQueryOptions = <
  TData = InfiniteData<
    Awaited<ReturnType<ReturnType<typeof useGetStoriesHook>>>,
    GetStoriesParams['skip']
  >,
  TError = unknown,
>(
  params?: GetStoriesParams,
  options?: {
    query?: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<ReturnType<typeof useGetStoriesHook>>>,
        TError,
        TData,
        Awaited<ReturnType<ReturnType<typeof useGetStoriesHook>>>,
        QueryKey,
        GetStoriesParams['skip']
      >
    >;
    request?: SecondParameter<ReturnType<typeof useCustomInstance>>;
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetStoriesQueryKey(params);

  const getStories = useGetStoriesHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useGetStoriesHook>>>,
    QueryKey,
    GetStoriesParams['skip']
  > = ({ signal, pageParam }) =>
    getStories({ skip: pageParam, ...params }, requestOptions, signal);

  return {
    cacheTime: 0,
    queryFn,
    queryKey,
    refetchOnWindowFocus: false,
    ...queryOptions,
  } as UseInfiniteQueryOptions<
    Awaited<ReturnType<ReturnType<typeof useGetStoriesHook>>>,
    TError,
    TData,
    Awaited<ReturnType<ReturnType<typeof useGetStoriesHook>>>,
    QueryKey,
    GetStoriesParams['skip']
  > & { queryKey: QueryKey };
};

export type GetStoriesInfiniteQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useGetStoriesHook>>>
>;
export type GetStoriesInfiniteQueryError = unknown;

/**
 * @summary Get user stories
 */
export const useGetStoriesInfinite = <
  TData = InfiniteData<
    Awaited<ReturnType<ReturnType<typeof useGetStoriesHook>>>,
    GetStoriesParams['skip']
  >,
  TError = unknown,
>(
  params?: GetStoriesParams,
  options?: {
    query?: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<ReturnType<typeof useGetStoriesHook>>>,
        TError,
        TData,
        Awaited<ReturnType<ReturnType<typeof useGetStoriesHook>>>,
        QueryKey,
        GetStoriesParams['skip']
      >
    >;
    request?: SecondParameter<ReturnType<typeof useCustomInstance>>;
  }
): UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = useGetStoriesInfiniteQueryOptions(params, options);

  const query = useInfiniteQuery(queryOptions) as UseInfiniteQueryResult<
    TData,
    TError
  > & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useGetStoriesQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetStoriesHook>>>,
  TError = unknown,
>(
  params?: GetStoriesParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<ReturnType<typeof useGetStoriesHook>>>,
        TError,
        TData
      >
    >;
    request?: SecondParameter<ReturnType<typeof useCustomInstance>>;
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetStoriesQueryKey(params);

  const getStories = useGetStoriesHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useGetStoriesHook>>>
  > = ({ signal }) => getStories(params, requestOptions, signal);

  return {
    cacheTime: 0,
    queryFn,
    queryKey,
    refetchOnWindowFocus: false,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<ReturnType<typeof useGetStoriesHook>>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type GetStoriesQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useGetStoriesHook>>>
>;
export type GetStoriesQueryError = unknown;

/**
 * @summary Get user stories
 */
export const useGetStories = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetStoriesHook>>>,
  TError = unknown,
>(
  params?: GetStoriesParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<ReturnType<typeof useGetStoriesHook>>>,
        TError,
        TData
      >
    >;
    request?: SecondParameter<ReturnType<typeof useCustomInstance>>;
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = useGetStoriesQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useCreateStoryControllerCreateStoryHook = () => {
  const createStoryControllerCreateStory = useCustomInstance<void>();

  return (options?: SecondParameter<ReturnType<typeof useCustomInstance>>) => {
    return createStoryControllerCreateStory(
      { method: 'post', url: `/api/stories` },
      options
    );
  };
};

export const useCreateStoryControllerCreateStoryMutationOptions = <
  TError = unknown,
  TVariables = void,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<
      ReturnType<ReturnType<typeof useCreateStoryControllerCreateStoryHook>>
    >,
    TError,
    TVariables,
    TContext
  >;
  request?: SecondParameter<ReturnType<typeof useCustomInstance>>;
}): UseMutationOptions<
  Awaited<
    ReturnType<ReturnType<typeof useCreateStoryControllerCreateStoryHook>>
  >,
  TError,
  TVariables,
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const createStoryControllerCreateStory =
    useCreateStoryControllerCreateStoryHook();

  const mutationFn: MutationFunction<
    Awaited<
      ReturnType<ReturnType<typeof useCreateStoryControllerCreateStoryHook>>
    >,
    TVariables
  > = () => {
    return createStoryControllerCreateStory(requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type CreateStoryControllerCreateStoryMutationResult = NonNullable<
  Awaited<
    ReturnType<ReturnType<typeof useCreateStoryControllerCreateStoryHook>>
  >
>;

export type CreateStoryControllerCreateStoryMutationError = unknown;

export const useCreateStoryControllerCreateStory = <
  TError = unknown,
  TVariables = void,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<
      ReturnType<ReturnType<typeof useCreateStoryControllerCreateStoryHook>>
    >,
    TError,
    TVariables,
    TContext
  >;
  request?: SecondParameter<ReturnType<typeof useCustomInstance>>;
}) => {
  const mutationOptions =
    useCreateStoryControllerCreateStoryMutationOptions(options);

  return useMutation(mutationOptions);
};
