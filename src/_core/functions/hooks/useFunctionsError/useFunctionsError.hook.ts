import { useCallback } from 'react';
import { get } from 'lodash';
import { useContextSelector } from 'use-context-selector';

import { FirebaseError } from 'firebase/app';

import { LocalizationContext } from '../../contexts/LocalizationContext';

export const useFunctionsError = () => {
  const authError = useContextSelector(
    LocalizationContext,
    ({ authError }) => authError
  );

  const throwError = useCallback(
    (error: unknown) => {
      if (error instanceof FirebaseError) {
        const [, code] = error.code.split('/');
        const message = get(authError, code, authError.default);
        throw new Error(message, {
          cause: code,
        });
      } else {
        throw new Error(authError.default);
      }
    },
    [authError]
  );

  return { throwError };
};
