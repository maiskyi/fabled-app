import { FirebaseAuthentication } from '@capacitor-firebase/authentication';
import { useMutation } from '@tanstack/react-query';
import { Capacitor } from '@capacitor/core';

import { useAuthError, AuthError } from '../useAuthError';
import { AuthFederatedSignInResponse } from '../../types';

export const useSignInWithGoogle = () => {
  const { throwError } = useAuthError();

  return useMutation<AuthFederatedSignInResponse, AuthError, void>({
    mutationFn: async () => {
      try {
        return await FirebaseAuthentication.signInWithGoogle({
          mode: Capacitor.isNativePlatform() ? 'redirect' : 'popup',
        });
      } catch (err) {
        throwError(err);
      }
    },
    mutationKey: ['useSignInWithGoogle'],
  });
};
