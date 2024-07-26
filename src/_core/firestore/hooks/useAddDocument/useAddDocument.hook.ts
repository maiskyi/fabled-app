import {
  FirebaseFirestore,
  DocumentReference,
} from '@capacitor-firebase/firestore';
import { useMutation } from '@tanstack/react-query';

import { useFirestoreError } from '../useFirestoreError';

interface MutationVariables<T extends object> {
  doc: string;
  data: T;
}

export const useAddDocument = <T extends object>() => {
  const { throwError } = useFirestoreError();

  return useMutation<DocumentReference, Error, MutationVariables<T>>({
    mutationKey: ['addDocument'],
    mutationFn: async ({ data, doc: reference }) => {
      try {
        const { reference: res } = await FirebaseFirestore.addDocument({
          data,
          reference,
        });
        return res;
      } catch (err) {
        throwError(err);
      }
    },
  });
};
