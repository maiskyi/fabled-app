import { useInfiniteQuery, InfiniteData } from '@tanstack/react-query';
import {
  FirebaseFirestore,
  QueryCompositeFilterConstraint,
  DocumentSnapshot,
  QueryNonFilterConstraint,
} from '@capacitor-firebase/firestore';

import { useFirestoreError } from '../useFirestoreError';

interface UseGetCollectionKey {
  filter?: QueryCompositeFilterConstraint;
}

interface UseGetCollectionParams {
  doc: string;
  limit?: number;
  startAfter?: string;
}

export const useGetCollectionInfinite = <T extends object>(
  { limit = 20, doc, startAfter }: UseGetCollectionParams,
  { filter: compositeFilter }: UseGetCollectionKey = {}
) => {
  const { throwError } = useFirestoreError();

  return useInfiniteQuery<
    DocumentSnapshot<T>[],
    Error,
    InfiniteData<DocumentSnapshot<T>[]>,
    ['getCollectionInfinite', string, number, UseGetCollectionKey],
    string | undefined
  >({
    queryKey: [
      'getCollectionInfinite',
      doc,
      limit,
      {
        filter: compositeFilter,
      },
    ],
    initialPageParam: startAfter,
    getNextPageParam: (last) => {
      if (last.length) {
        return last[last.length - 1]?.path;
      }
      return undefined;
    },
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

        const { snapshots } = await FirebaseFirestore.getCollection<T>({
          reference,
          compositeFilter,
          queryConstraints: [...queryLimit, ...queryStartAfter],
        });

        return snapshots;
      } catch (err) {
        throwError(err);
      }
    },
  });
};
