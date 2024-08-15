import { FirebaseAuthentication } from '@capacitor-firebase/authentication';
import { useMutation } from '@tanstack/react-query';

import { useAuthError, AuthError } from '../useAuthError';

import {
  CreateUserWithEmailAndPasswordRequest,
  CreateUserWithEmailAndPasswordResponse,
} from './useCreateUserWithEmailAndPassword.types';

export const useCreateUserWithEmailAndPassword = () => {
  const { throwError } = useAuthError();

  return useMutation<
    CreateUserWithEmailAndPasswordResponse,
    AuthError,
    CreateUserWithEmailAndPasswordRequest
  >({
    mutationFn: async ({ email, password }) => {
      try {
        const result =
          await FirebaseAuthentication.createUserWithEmailAndPassword({
            email,
            password,
          });
        await FirebaseAuthentication.sendEmailVerification();
        return result;
      } catch (err) {
        throwError(err);
      }
    },
    mutationKey: ['useCreateUserWithEmailAndPassword'],
  });
};
