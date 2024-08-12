import {
  SignInResult,
  FirebaseAuthentication,
  CreateUserWithEmailAndPasswordOptions,
} from '@capacitor-firebase/authentication';
import { useMutation } from '@tanstack/react-query';

import { useAuthError } from '../useAuthError';

export const useSignUp = () => {
  const { throwError } = useAuthError();

  return useMutation<
    SignInResult,
    Error,
    CreateUserWithEmailAndPasswordOptions
  >({
    mutationKey: ['useSignUp'],
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
  });
};
