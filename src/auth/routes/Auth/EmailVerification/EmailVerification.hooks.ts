import { get } from 'lodash';

import { AuthQueryStatus, AuthError } from '@core/auth';
import { useTranslation } from '@core/localization';

import {
  ACTION_TITLE_MAPPING,
  ACTION_MESSAGE_MAPPING,
} from './EmailVerification.const';

interface UseActionCopyParams {
  status: AuthQueryStatus;
  error?: AuthError;
}

export const useEmailVerificationCopy = ({ status }: UseActionCopyParams) => {
  const { t } = useTranslation();

  const title = t(get(ACTION_TITLE_MAPPING, [status]));

  const message = t(get(ACTION_MESSAGE_MAPPING, [status]));

  return { title, message };
};
