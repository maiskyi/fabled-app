import { useQuery } from '@tanstack/react-query';
import {
  FirebaseFirestore,
  QueryCompositeFilterConstraint,
  QueryNonFilterConstraint,
  DocumentSnapshot,
} from '@capacitor-firebase/firestore';

import { useFirestoreError } from '../useFirestoreError';

interface UseGetCollectionKey {
  filter?: QueryCompositeFilterConstraint;
  constraints?: QueryNonFilterConstraint[];
}

interface UseGetCollectionParams extends UseGetCollectionKey {
  doc: string;
}

export const useGetCollection = <T extends object>({
  doc: reference,
  constraints: queryConstraints,
  filter: compositeFilter,
}: UseGetCollectionParams) => {
  const { throwError } = useFirestoreError();

  return useQuery<
    DocumentSnapshot<T>[],
    Error,
    DocumentSnapshot<T>[],
    ['getCollection', UseGetCollectionKey]
  >({
    queryKey: [
      'getCollection',
      {
        constraints: queryConstraints,
        filter: compositeFilter,
      },
    ],
    queryFn: async ({
      queryKey: [, { constraints: queryConstraints, filter: compositeFilter }],
    }) => {
      try {
        const { snapshots } = await FirebaseFirestore.getCollection<T>({
          reference,
          compositeFilter,
          queryConstraints,
        });
        return snapshots;
      } catch (err) {
        throwError(err);
      }
    },
  });
};
