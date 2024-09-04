import { useInfiniteQuery, InfiniteData } from '@tanstack/react-query';
import {
  FirebaseFirestore,
  QueryCompositeFilterConstraint,
  DocumentSnapshot,
  QueryNonFilterConstraint,
} from '@capacitor-firebase/firestore';
import { OrderByDirection } from 'firebase/firestore';

import { useFirestoreError } from '../useFirestoreError';

interface UseGetCollectionInfiniteKey {
  filter?: QueryCompositeFilterConstraint;
}

interface UseGetCollectionInfiniteParams {
  doc: string;
  limit?: number;
  startAfter?: string;
  orderBy?: {
    fieldPath: string;
    direction?: OrderByDirection;
  };
}

interface UseGetCollectionInfiniteQueryParams<T extends object> {
  initialData?: InfiniteData<DocumentSnapshot<T>[], string>;
}

export const useGetCollectionInfinite = <T extends object>(
  { limit = 20, doc, startAfter, orderBy }: UseGetCollectionInfiniteParams,
  { filter: compositeFilter }: UseGetCollectionInfiniteKey = {},
  { initialData }: UseGetCollectionInfiniteQueryParams<T> = {}
) => {
  const { throwError } = useFirestoreError();

  return useInfiniteQuery<
    DocumentSnapshot<T>[],
    Error,
    InfiniteData<DocumentSnapshot<T>[]>,
    ['getCollectionInfinite', string, number, UseGetCollectionInfiniteKey],
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
      queryKey: [_, reference, limit, { filter: compositeFilter }],
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

        const queryOrderBy: QueryNonFilterConstraint[] = orderBy
          ? [
              {
                directionStr: orderBy.direction,
                fieldPath: orderBy.fieldPath,
                type: 'orderBy',
              },
            ]
          : [];

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
    queryKey: [
      'getCollectionInfinite',
      doc,
      limit,
      {
        filter: compositeFilter,
      },
    ],
  });
};
