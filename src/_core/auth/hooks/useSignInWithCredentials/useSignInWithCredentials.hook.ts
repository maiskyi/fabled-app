import {
  SignInResult,
  FirebaseAuthentication,
  SignInWithEmailAndPasswordOptions,
} from '@capacitor-firebase/authentication';
import { useMutation } from '@tanstack/react-query';

import { useAuthError, AuthError } from '../useAuthError';

export const useSignInWithCredentials = () => {
  const { throwError } = useAuthError();

  return useMutation<
    SignInResult,
    AuthError,
    SignInWithEmailAndPasswordOptions
  >({
    mutationKey: ['useSignInWithCredentials'],
    mutationFn: async ({ email, password }) => {
      try {
        const result = await FirebaseAuthentication.signInWithEmailAndPassword({
          email,
          password,
        });
        return result;
      } catch (error) {
        throwError(error);
      }
    },
  });
};
