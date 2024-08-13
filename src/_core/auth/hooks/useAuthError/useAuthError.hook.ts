import { useCallback } from 'react';
import { get } from 'lodash';

import { useContextSelector } from 'use-context-selector';
import { FirebaseError } from 'firebase/app';

import { LocalizationContext } from '../../contexts/LocalizationContext';
import { AuthErrorCode } from '../../types';
import { UNKNOWN_AUTH_ERROR_CODE } from '../../constants';

import { AuthError } from './useAuthError.services';

export const useAuthError = () => {
  const authErrorMessage = useContextSelector(
    LocalizationContext,
    ({ authErrorMessage }) => authErrorMessage
  );

  const throwError = useCallback(
    (error: unknown) => {
      if (error instanceof FirebaseError) {
        const message = get(
          authErrorMessage,
          error.code,
          UNKNOWN_AUTH_ERROR_CODE
        );
        throw new AuthError(message, error.code as AuthErrorCode);
      } else {
        throw new Error('Auth error');
      }
    },
    [authErrorMessage]
  );

  return { throwError };
};
