import { useCallback } from 'react';
import { get } from 'lodash';

import { useContextSelector } from 'use-context-selector';
import { FirebaseError } from 'firebase/app';

import { LocalizationContext } from '../../contexts/LocalizationContext';

export const useAuthError = () => {
  const authError = useContextSelector(
    LocalizationContext,
    ({ authError }) => authError
  );

  const throwError = useCallback(
    (error: unknown) => {
      if (error instanceof FirebaseError) {
        const message = get(authError, error.code, 'Auth error');
        throw new Error(message, {
          cause: error.code,
        });
      } else {
        throw new Error('Auth error');
      }
    },
    [authError]
  );

  return { throwError };
};
