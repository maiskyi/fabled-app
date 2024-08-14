import { LocalizationContextProps } from './Localization.types';

export const DEFAULT_LOCALIZATION_CONTEXT_VALUE: LocalizationContextProps = {
  authError: {
    aborted: 'The operation was aborted, typically due to a concurrency issue.',
    'already-exists': 'The resource already exists.',
    cancelled: 'The operation was cancelled.',
    'data-loss': 'Unrecoverable data loss or corruption occurred.',
    'deadline-exceeded': 'The deadline for the operation was exceeded.',
    'failed-precondition':
      'The operation was rejected due to a failed precondition.',
    internal: 'An internal error occurred.',
    default: 'An unspecified error occurred. Please try again.',
    'invalid-argument': 'An invalid argument was provided.',
    'not-found': 'The requested resource was not found.',
    ok: 'The operation was successful.',
    'out-of-range': 'The operation was attempted past the valid range.',
    'permission-denied':
      'The caller does not have permission to execute the specified operation.',
    'resource-exhausted':
      'Some resource has been exhausted, typically a per-user quota.',
    unauthenticated:
      'The request does not have valid authentication credentials.',
    unavailable: 'The service is currently unavailable.',
    unimplemented: 'The operation is not implemented or supported.',
    unknown: 'An unknown error occurred.',
  },
};
