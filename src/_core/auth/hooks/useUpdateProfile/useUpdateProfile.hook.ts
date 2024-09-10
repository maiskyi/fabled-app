import { FirebaseAuthentication } from '@capacitor-firebase/authentication';
import { useMutation } from '@tanstack/react-query';

import { useAuthError, AuthError } from '../useAuthError';
import { useAuth } from '../useAuth';

import {
  UpdateProfileResponse,
  UpdateProfileRequest,
} from './useUpdateProfile.types';

export const useUpdateProfile = () => {
  const { throwError } = useAuthError();
  const { reload } = useAuth();

  return useMutation<UpdateProfileResponse, AuthError, UpdateProfileRequest>({
    mutationFn: async (request) => {
      try {
        await FirebaseAuthentication.updateProfile(request);
        await reload();
      } catch (error) {
        throwError(error);
      }
    },
    mutationKey: ['useUpdatePassword'],
  });
};
