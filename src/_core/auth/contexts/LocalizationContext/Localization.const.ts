import { AuthErrorCodes } from 'firebase/auth';

import { LocalizationContextProps } from './Localization.types';

export const DEFAULT_LOCALIZATION_CONTEXT_VALUE: LocalizationContextProps = {
  authError: {
    [AuthErrorCodes.WEAK_PASSWORD]: 'Password is not strong enough',
    [AuthErrorCodes.EXPIRED_OOB_CODE]: 'Thrown if the action code has expired.',
    [AuthErrorCodes.INVALID_OOB_CODE]:
      'Thrown if the action code is invalid. This can happen if the code is malformed or has already been used.',
    [AuthErrorCodes.USER_DISABLED]:
      'Thrown if the user corresponding to the given action code has been disabled.',
    [AuthErrorCodes.USER_DELETED]:
      'Thrown if there is no user corresponding to the action code. This may have happened if the user was deleted between when the action code was issued and when this method was called.',
  },
};
