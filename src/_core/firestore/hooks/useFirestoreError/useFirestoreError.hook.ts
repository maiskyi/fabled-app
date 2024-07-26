import { useCallback } from 'react';

import { useContextSelector } from 'use-context-selector';
import { FirebaseError } from 'firebase/app';
import { get } from 'lodash';

import { LocalizationContext } from '../../contexts/LocalizationContext';

export const useFirestoreError = () => {
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
