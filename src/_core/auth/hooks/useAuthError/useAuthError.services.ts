import { AuthErrorCodes } from 'firebase/auth';

import { AuthErrorCode } from '../../types';

interface AuthErrorFields {
  email?: string;
  password?: string;
}

const EMAIL_ERROR_CODES: AuthErrorCode[] = [
  AuthErrorCodes.INVALID_LOGIN_CREDENTIALS,
  AuthErrorCodes.INVALID_EMAIL,
];

export class AuthError extends Error {
  public fields?: AuthErrorFields;

  constructor(
    public title: string,
    public message: string,
    public code: AuthErrorCode
  ) {
    super(message);

    if (EMAIL_ERROR_CODES.includes(code)) {
      this.fields = {
        email: message,
      };
    }

    if (code === AuthErrorCodes.WEAK_PASSWORD) {
      this.fields = {
        password: message,
      };
    }
  }
}
