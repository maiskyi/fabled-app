import { FirebaseAuthentication } from '@capacitor-firebase/authentication';
import { useMutation } from '@tanstack/react-query';

import { useAuthError, AuthError } from '../useAuthError';

import {
  ConfirmPasswordResetRequest,
  ConfirmPasswordResetResponse,
} from './useConfirmPasswordReset.types';

export const useConfirmPasswordReset = () => {
  const { throwError } = useAuthError();

  return useMutation<
    ConfirmPasswordResetResponse,
    AuthError,
    ConfirmPasswordResetRequest
  >({
    mutationFn: async (request) => {
      try {
        await FirebaseAuthentication.confirmPasswordReset(request);
      } catch (err) {
        throwError(err);
      }
    },
    mutationKey: ['useConfirmPasswordReset'],
  });
};
