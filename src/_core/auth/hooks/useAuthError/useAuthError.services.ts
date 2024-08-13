import { AuthErrorCodes } from 'firebase/auth';

import { AuthErrorCode } from '../../types';

interface AuthErrorFields {
  email?: string;
}

export class AuthError extends Error {
  public fields?: AuthErrorFields;

  constructor(
    public title: string,
    public message: string,
    public code: AuthErrorCode
  ) {
    super(message);

    if (code === AuthErrorCodes.INVALID_LOGIN_CREDENTIALS) {
      this.fields = {
        email: message,
      };
    }
  }
}
