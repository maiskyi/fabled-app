import { FirebaseAuthentication } from '@capacitor-firebase/authentication';
import { useMutation } from '@tanstack/react-query';

import { useAuthError, AuthError } from '../useAuthError';

import {
  ActionCodeRequest,
  ActionCodeResponse,
} from './useApplyActionCode.types';

export const useApplyActionCode = () => {
  const { throwError } = useAuthError();

  return useMutation<ActionCodeResponse, AuthError, ActionCodeRequest>({
    mutationKey: ['useApplyActionCode'],
    mutationFn: async ({ oobCode }) => {
      try {
        return await FirebaseAuthentication.applyActionCode({ oobCode });
      } catch (err) {
        throwError(err);
      }
    },
  });
};
