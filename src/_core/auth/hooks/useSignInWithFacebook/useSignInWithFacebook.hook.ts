import { FirebaseAuthentication } from '@capacitor-firebase/authentication';
import { useMutation } from '@tanstack/react-query';

import { useAuthError, AuthError } from '../useAuthError';
import { AuthFederatedSignInResponse } from '../../types';

export const useSignInWithFacebook = () => {
  const { throwError } = useAuthError();

  return useMutation<AuthFederatedSignInResponse, AuthError, void>({
    mutationFn: async () => {
      try {
        return await FirebaseAuthentication.signInWithFacebook({
          mode: 'popup',
          scopes: ['email', 'public_profile'],
        });
      } catch (err) {
        throwError(err);
      }
    },
    mutationKey: ['useSignInWithFacebook'],
  });
};
