import { useAsyncFn } from 'react-use';

import { FirebaseAuthentication } from '@capacitor-firebase/authentication';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithCredential,
} from 'firebase/auth';

import { useAuthError } from '../useAuthError';

export const useGoogleSignIn = () => {
  const { throwError } = useAuthError();

  return useAsyncFn(async () => {
    try {
      const auth = getAuth();
      const result = await FirebaseAuthentication.signInWithGoogle();
      const credential = GoogleAuthProvider.credential(
        result.credential?.idToken
      );
      return await signInWithCredential(auth, credential);
    } catch (err) {
      throwError(err);
    }
  });
};
