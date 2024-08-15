import { useQuery } from '@tanstack/react-query';
import {
  FirebaseFirestore,
  DocumentSnapshot,
} from '@capacitor-firebase/firestore';

import { useFirestoreError } from '../useFirestoreError';

interface UseGetDocumentParams {
  doc: string;
  id: string;
}

export const useGetDocument = <T extends object>({
  id,
  doc,
}: UseGetDocumentParams) => {
  const { throwError } = useFirestoreError();

  return useQuery<
    DocumentSnapshot<T>,
    Error,
    DocumentSnapshot<T>,
    ['getDocument', string, string]
  >({
    queryFn: async ({ queryKey: [, doc, id] }) => {
      try {
        const { snapshot } = await FirebaseFirestore.getDocument<T>({
          reference: `${doc}/${id}`,
        });
        return snapshot;
      } catch (err) {
        throwError(err);
      }
    },
    queryKey: ['getDocument', doc, id],
  });
};
