import { FirebaseAuthentication } from '@capacitor-firebase/authentication';
import { useMutation } from '@tanstack/react-query';

import { useAuthError, AuthError } from '../useAuthError';
import { AuthFederatedSignInResponse } from '../../types';

export const useSignInWithApple = () => {
  const { throwError } = useAuthError();

  return useMutation<AuthFederatedSignInResponse, AuthError, void>({
    mutationFn: async () => {
      try {
        // const auth = getAuth();
        // const provider = new OAuthProvider('apple.com');
        // const {
        //   credential: { idToken, nonce },
        // } = await FirebaseAuthentication.signInWithApple({
        //   mode: 'popup',
        // });
        // const credential = provider.credential({ idToken, rawNonce: nonce });
        // return await signInWithCredential(auth, credential);
        return await FirebaseAuthentication.signInWithApple({
          mode: 'popup',
        });
      } catch (err) {
        throwError(err);
      }
    },
    mutationKey: ['useSignInWithApple'],
  });
};
