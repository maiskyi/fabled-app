import { LocalizationContextProps } from './Localization.types';

export const DEFAULT_LOCALIZATION_CONTEXT_VALUE: LocalizationContextProps = {
  authError: {
    aborted:
      'The operation was aborted, typically due to a concurrency issue or a transaction failure.',
    'already-exists':
      'The document already exists. Attempting to create a document that already exists is not allowed.',
    cancelled: 'The operation was cancelled, typically by the caller.',
    'data-loss':
      'Unrecoverable data loss or corruption occurred. This indicates a serious failure.',
    'deadline-exceeded':
      'The deadline for the operation was exceeded. The operation might have taken too long to complete.',
    'failed-precondition':
      'The operation was rejected because the system is not in a state required for the operation’s execution.',
    internal:
      'An internal error occurred. This is usually a server-side error that should be reported to Firestore support.',
    'invalid-argument':
      'The client specified an invalid argument. Check the parameters passed to the Firestore function.',
    'not-found':
      'The requested document was not found in the Firestore database.',
    'out-of-range':
      'The operation attempted to access data outside the valid range.',
    'permission-denied':
      'The caller does not have permission to execute the specified operation.',
    'resource-exhausted':
      'The resource limits for the Firestore instance have been exhausted. This can happen if the quota is exceeded.',
    unauthenticated:
      'The request does not have valid authentication credentials for the operation.',
    unavailable:
      'The Firestore service is currently unavailable. This might be due to a temporary server issue or network problems.',
    unimplemented:
      'The operation is not implemented or is not supported/enabled in the Firestore database.',
    unknown:
      'An unknown error occurred. This might be due to network issues or a bug in the application.',
  },
};
