import { AuthActionCopyMap } from '../Auth.types';

export const ACTION_TITLE_MAPPING: AuthActionCopyMap = {
  error: 'notifications.emailVerificationFailed.title',
  idle: '',
  pending: 'notifications.emailVerificationInProgress.title',
  success: 'notifications.emailVerificationSucceed.title',
};

export const ACTION_MESSAGE_MAPPING: AuthActionCopyMap = {
  error: 'notifications.emailVerificationFailed.error',
  idle: '',
  pending: 'notifications.emailVerificationInProgress.message',
  success: 'notifications.emailVerificationSucceed.message',
};