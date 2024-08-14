import {
  SignInResult,
  CreateUserWithEmailAndPasswordOptions,
} from '@capacitor-firebase/authentication';

export type CreateUserWithEmailAndPasswordRequest =
  CreateUserWithEmailAndPasswordOptions;

export type CreateUserWithEmailAndPasswordResponse = SignInResult;
