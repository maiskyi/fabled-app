import {
  SignInResult,
  SignInWithEmailAndPasswordOptions,
} from '@capacitor-firebase/authentication';

export type SignInRequest = SignInWithEmailAndPasswordOptions;

export type SignInResponse = SignInResult;
