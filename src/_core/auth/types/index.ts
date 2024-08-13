import { AuthErrorCodes } from 'firebase/auth';
import { ValueOf } from 'type-fest';

import { UNKNOWN_AUTH_ERROR_CODE } from '../constants';

export type AuthErrorCode =
  | ValueOf<typeof AuthErrorCodes>
  | typeof UNKNOWN_AUTH_ERROR_CODE;

export type AuthQueryStatus = 'error' | 'idle' | 'pending' | 'success';

export enum AuthActionMode {
  VerifyEmail = 'verifyEmail',
}
