import { SignInResult } from '@capacitor-firebase/authentication';

export interface SignInRequest {
  email: string;
  password: string;
}

export type SignInResponse = SignInResult;
