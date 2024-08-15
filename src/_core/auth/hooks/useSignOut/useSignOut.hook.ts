import { FirebaseAuthentication } from '@capacitor-firebase/authentication';
import { useMutation } from '@tanstack/react-query';

import { useAuthError } from '../useAuthError';

export const useSignOut = () => {
  const { throwError } = useAuthError();

  return useMutation<void, Error, void>({
    mutationFn: async () => {
      try {
        await FirebaseAuthentication.signOut();
      } catch (err) {
        throwError(err);
      }
    },
    mutationKey: ['useSignOut'],
  });
};
