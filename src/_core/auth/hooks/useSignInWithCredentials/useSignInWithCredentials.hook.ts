import { FirebaseAuthentication } from '@capacitor-firebase/authentication';
import { useMutation } from '@tanstack/react-query';

import { useAuthError, AuthError } from '../useAuthError';

import {
  SignInWithEmailAndPasswordRequest,
  SignInWithEmailAndPasswordResponse,
} from './useSignInWithCredentials.types';

export const useSignInWithEmailAndPassword = () => {
  const { throwError } = useAuthError();

  return useMutation<
    SignInWithEmailAndPasswordResponse,
    AuthError,
    SignInWithEmailAndPasswordRequest
  >({
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
    mutationKey: ['useSignInWithEmailAndPassword'],
  });
};
