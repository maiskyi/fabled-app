import { FirebaseAuthentication } from '@capacitor-firebase/authentication';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithCredential,
  UserCredential,
} from 'firebase/auth';
import { useMutation } from '@tanstack/react-query';
import { Capacitor } from '@capacitor/core';

import { useAuthError, AuthError } from '../useAuthError';

export const useSignInWithGoogle = () => {
  const { throwError } = useAuthError();

  return useMutation<UserCredential, AuthError, void>({
    mutationFn: async () => {
      try {
        const auth = getAuth();
        const result = await FirebaseAuthentication.signInWithGoogle({
          mode: Capacitor.isNativePlatform() ? 'redirect' : 'popup',
        });
        const credential = GoogleAuthProvider.credential(
          result.credential?.idToken
        );
        return await signInWithCredential(auth, credential);
      } catch (err) {
        throwError(err);
      }
    },
    mutationKey: ['useSignInWithGoogle'],
  });
};
