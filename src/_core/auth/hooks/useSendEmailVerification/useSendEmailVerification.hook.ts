import { FirebaseAuthentication } from '@capacitor-firebase/authentication';
import { useMutation } from '@tanstack/react-query';

import { useAuthError } from '../useAuthError';

export const useSendEmailVerification = () => {
  const { throwError } = useAuthError();

  return useMutation<void, Error, void>({
    mutationKey: ['useSendEmailVerification'],
    mutationFn: async () => {
      try {
        await FirebaseAuthentication.sendEmailVerification();
      } catch (err) {
        throwError(err);
      }
    },
  });
};
