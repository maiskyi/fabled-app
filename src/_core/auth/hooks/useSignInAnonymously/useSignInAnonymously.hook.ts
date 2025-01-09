import { FirebaseAuthentication } from '@capacitor-firebase/authentication';
import { useMutation } from '@tanstack/react-query';

import { useAuthError, AuthError } from '../useAuthError';

import { SignInAnonymouslyResponse } from './useSignInAnonymously.types';

export const useSignInAnonymously = () => {
  const { throwError } = useAuthError();

  return useMutation<SignInAnonymouslyResponse, AuthError, void>({
    mutationFn: async () => {
      try {
        return await FirebaseAuthentication.signInAnonymously();
      } catch (err) {
        throwError(err);
      }
    },
    mutationKey: ['useSignInAnonymously'],
  });
};
