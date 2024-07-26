import { LocalizationContextProps } from './Localization.types';

export const DEFAULT_LOCALIZATION_CONTEXT_VALUE: LocalizationContextProps = {
  authError: {
    cancelled: 'The operation was cancelled, typically by the caller.',
    unknown:
      'An unknown error occurred. This might be due to network issues or a bug in the application.',
    'invalid-argument':
      'The client specified an invalid argument. Check the parameters passed to the Firestore function.',
    'deadline-exceeded':
      'The deadline for the operation was exceeded. The operation might have taken too long to complete.',
    'not-found':
      'The requested document was not found in the Firestore database.',
    'already-exists':
      'The document already exists. Attempting to create a document that already exists is not allowed.',
    'permission-denied':
      'The caller does not have permission to execute the specified operation.',
    'resource-exhausted':
      'The resource limits for the Firestore instance have been exhausted. This can happen if the quota is exceeded.',
    'failed-precondition':
      'The operation was rejected because the system is not in a state required for the operation’s execution.',
    aborted:
      'The operation was aborted, typically due to a concurrency issue or a transaction failure.',
    'out-of-range':
      'The operation attempted to access data outside the valid range.',
    unimplemented:
      'The operation is not implemented or is not supported/enabled in the Firestore database.',
    internal:
      'An internal error occurred. This is usually a server-side error that should be reported to Firestore support.',
    unavailable:
      'The Firestore service is currently unavailable. This might be due to a temporary server issue or network problems.',
    'data-loss':
      'Unrecoverable data loss or corruption occurred. This indicates a serious failure.',
    unauthenticated:
      'The request does not have valid authentication credentials for the operation.',
  },
};
