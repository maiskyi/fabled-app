import { useContextSelector } from 'use-context-selector';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useAsyncFn } from 'react-use';

import { AuthContext } from '../../contexts/AuthContext';
import { useAuthError } from '../useAuthError';

const provider = new GoogleAuthProvider();

export const useGoogleSignIn = () => {
  const auth = useContextSelector(AuthContext, ({ auth }) => auth);

  const { throwError } = useAuthError();

  return useAsyncFn(async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      return GoogleAuthProvider.credentialFromResult(result);
    } catch (err) {
      throwError(err);
    }
  });
};
