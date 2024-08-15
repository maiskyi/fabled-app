import { ActionCopyMap } from './EmailVerification.types';

export const ACTION_TITLE_MAPPING: ActionCopyMap = {
  error: 'notifications.emailVerificationFailed.title',
  idle: 'notifications.emailVerificationInProgress.title',
  pending: 'notifications.emailVerificationInProgress.title',
  success: 'notifications.emailVerificationSucceed.title',
};

export const ACTION_MESSAGE_MAPPING: ActionCopyMap = {
  error: 'notifications.emailVerificationFailed.error',
  idle: 'notifications.emailVerificationInProgress.message',
  pending: 'notifications.emailVerificationInProgress.message',
  success: 'notifications.emailVerificationSucceed.message',
};
