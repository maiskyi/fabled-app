import { FirebaseAuthentication } from '@capacitor-firebase/authentication';
import { useMutation } from '@tanstack/react-query';

import { useAuthError } from '../useAuthError';

export const useDeleteUser = () => {
  const { throwError } = useAuthError();

  return useMutation<void, Error, void>({
    mutationFn: async () => {
      try {
        await FirebaseAuthentication.deleteUser();
      } catch (err) {
        throwError(err);
      }
    },
    mutationKey: ['useDeleteUser'],
  });
};
