import { useInfiniteQuery, InfiniteData } from '@tanstack/react-query';
import {
  FirebaseFirestore,
  QueryCompositeFilterConstraint,
  DocumentSnapshot,
  QueryNonFilterConstraint,
} from '@capacitor-firebase/firestore';

import { useFirestoreError } from '../useFirestoreError';

import {
  UseGetCollectionInfiniteParams,
  UseGetCollectionInfiniteQueryParams,
  UseGetCollectionInfiniteOrderParams,
  UseGetCollectionInfiniteEveryParams,
} from './useGetCollectionInfinite.types';

export const useGetCollectionInfinite = <T extends object>(
  {
    limit = 20,
    doc,
    startAfter,
    order,
    every,
  }: UseGetCollectionInfiniteParams<T>,
  { initialData }: UseGetCollectionInfiniteQueryParams<T> = {}
) => {
  const { throwError } = useFirestoreError();

  return useInfiniteQuery<
    DocumentSnapshot<T>[],
    Error,
    InfiniteData<DocumentSnapshot<T>[]>,
    [
      'getCollectionInfinite',
      string,
      number,
      UseGetCollectionInfiniteOrderParams<T>,
      UseGetCollectionInfiniteEveryParams<T>[],
    ],
    string | undefined
  >({
    getNextPageParam: (last) => {
      if (last.length) return last[last.length - 1]?.path;
      return undefined;
    },
    initialData,
    initialPageParam: startAfter,
    queryFn: async ({
      pageParam: startAfter,
      queryKey: [_, reference, limit, order, every],
    }) => {
      try {
        const queryStartAfter: QueryNonFilterConstraint[] = startAfter
          ? [
              {
                reference: startAfter,
                type: 'startAfter',
              },
            ]
          : [];

        const queryLimit: QueryNonFilterConstraint[] = [
          {
            limit,
            type: 'limit',
          },
        ];

        const queryOrderBy: QueryNonFilterConstraint[] = order
          ? [
              {
                directionStr: order.direction,
                fieldPath: order.field,
                type: 'orderBy',
              },
            ]
          : [];

        const compositeFilter: QueryCompositeFilterConstraint = every
          ? {
              queryConstraints: every,
              type: 'and',
            }
          : undefined;

        const { snapshots } = await FirebaseFirestore.getCollection<T>({
          compositeFilter,
          queryConstraints: [
            ...queryOrderBy,
            ...queryLimit,
            ...queryStartAfter,
          ],
          reference,
        });

        return snapshots;
      } catch (err) {
        throwError(err);
      }
    },
    queryKey: ['getCollectionInfinite', doc, limit, order, every],
  });
};
