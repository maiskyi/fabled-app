import { AuthErrorCode } from '../../types';

export class AuthError extends Error {
  constructor(
    public message: string,
    public code: AuthErrorCode
  ) {
    super(message);
  }
}
