import { FirebaseAuthentication } from '@capacitor-firebase/authentication';
import { useMutation } from '@tanstack/react-query';

import { useAuthError, AuthError } from '../useAuthError';

import {
  GetCurrentUserRequest,
  GetCurrentUserResponse,
} from './useGetCurrentUser.types';

export const useGetCurrentUser = () => {
  const { throwError } = useAuthError();

  return useMutation<GetCurrentUserResponse, AuthError, GetCurrentUserRequest>({
    mutationKey: ['useGetCurrentUser'],
    mutationFn: async () => {
      try {
        return await FirebaseAuthentication.getCurrentUser();
      } catch (err) {
        throwError(err);
      }
    },
  });
};
