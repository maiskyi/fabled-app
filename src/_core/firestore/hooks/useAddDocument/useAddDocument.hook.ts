import {
  FirebaseFirestore,
  DocumentReference,
} from '@capacitor-firebase/firestore';
import { useMutation } from '@tanstack/react-query';

interface MutationVariables<T extends object> {
  doc: string;
  data: T;
}

export const useAddDocument = <T extends object>() => {
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
        throw new Error('err');
      }
    },
  });
};
