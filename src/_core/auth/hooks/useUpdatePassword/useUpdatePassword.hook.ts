import { FirebaseAuthentication } from '@capacitor-firebase/authentication';
import { useMutation } from '@tanstack/react-query';

import { useAuthError, AuthError } from '../useAuthError';

import {
  UpdatePasswordRequest,
  UpdatePasswordResponse,
} from './useUpdatePassword.types';

export const useUpdatePassword = () => {
  const { throwError } = useAuthError();

  return useMutation<UpdatePasswordResponse, AuthError, UpdatePasswordRequest>({
    mutationFn: async ({ newPassword }) => {
      try {
        await FirebaseAuthentication.updatePassword({
          newPassword,
        });
      } catch (error) {
        throwError(error);
      }
    },
    mutationKey: ['useUpdatePassword'],
  });
};
