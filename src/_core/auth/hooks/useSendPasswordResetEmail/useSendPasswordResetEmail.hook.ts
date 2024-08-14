import { FirebaseAuthentication } from '@capacitor-firebase/authentication';
import { useMutation } from '@tanstack/react-query';

import { useAuthError, AuthError } from '../useAuthError';

import {
  SendPasswordResetEmailRequest,
  SendPasswordResetEmailResponse,
} from './useSendPasswordResetEmail.types';

export const useSendPasswordResetEmail = () => {
  const { throwError } = useAuthError();

  return useMutation<
    SendPasswordResetEmailResponse,
    AuthError,
    SendPasswordResetEmailRequest
  >({
    mutationFn: async (request) => {
      try {
        await FirebaseAuthentication.sendPasswordResetEmail(request);
      } catch (err) {
        throwError(err);
      }
    },
    mutationKey: ['useSendEmailVerification'],
  });
};
