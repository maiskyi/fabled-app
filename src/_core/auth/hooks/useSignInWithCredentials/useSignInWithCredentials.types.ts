import { SignInResult } from '@capacitor-firebase/authentication';

export interface SignInWithEmailAndPasswordRequest {
  email: string;
  password: string;
}

export type SignInWithEmailAndPasswordResponse = SignInResult;
