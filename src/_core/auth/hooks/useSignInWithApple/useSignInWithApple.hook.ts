import { FirebaseAuthentication } from '@capacitor-firebase/authentication';
import { useMutation } from '@tanstack/react-query';

import { useAuthError, AuthError } from '../useAuthError';
import { AuthFederatedSignInResponse } from '../../types';

export const useSignInWithApple = () => {
  const { throwError } = useAuthError();

  return useMutation<AuthFederatedSignInResponse, AuthError, void>({
    mutationFn: async () => {
      try {
        return await FirebaseAuthentication.signInWithApple({
          mode: 'popup',
        });
      } catch (err) {
        throwError(err);
      }
    },
    mutationKey: ['useSignInWithApple'],
  });
};
