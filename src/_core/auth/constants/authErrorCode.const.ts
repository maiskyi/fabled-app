export enum AuthErrorCode {
  ExpiredActionCode = 'auth/expired-action-code',
  InvalidActionCode = 'auth/invalid-action-code',
  UserDisabled = 'auth/user-disabled',
  UserNotFound = 'auth/user-not-found',
  WeakPassword = 'auth/weak-password',
}
