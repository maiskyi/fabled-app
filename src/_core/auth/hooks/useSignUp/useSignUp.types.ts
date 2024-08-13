import {
  SignInResult,
  CreateUserWithEmailAndPasswordOptions,
} from '@capacitor-firebase/authentication';

export type SignUpRequest = CreateUserWithEmailAndPasswordOptions;

export type SignUpResponse = SignInResult;
