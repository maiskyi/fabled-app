import { AuthErrorCode } from '../../constants/authErrorCode.const';

import { LocalizationContextProps } from './Localization.types';

export const DEFAULT_LOCALIZATION_CONTEXT_VALUE: LocalizationContextProps = {
  authError: {
    [AuthErrorCode.WeakPassword]: 'Password is not strong enough',
    [AuthErrorCode.ExpiredActionCode]: 'Thrown if the action code has expired.',
    [AuthErrorCode.InvalidActionCode]:
      'Thrown if the action code is invalid. This can happen if the code is malformed or has already been used.',
    [AuthErrorCode.UserDisabled]:
      'Thrown if the user corresponding to the given action code has been disabled.',
    [AuthErrorCode.UserNotFound]:
      'Thrown if there is no user corresponding to the action code. This may have happened if the user was deleted between when the action code was issued and when this method was called.',
  },
};
