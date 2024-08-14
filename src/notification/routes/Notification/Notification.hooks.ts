import { useMemo } from 'react';
import { get } from 'lodash';

import { NotificationType } from '@bootstrap/constants';
import { useTranslation } from '@core/localization';

interface UseNotificationCopyParams {
  type: NotificationType;
}

export const useNotificationCopy = ({ type }: UseNotificationCopyParams) => {
  const { t } = useTranslation();

  const titleMapping = useMemo(
    (): Record<NotificationType, string> => ({
      [NotificationType.SendPasswordResetEmailSucceed]: t(
        'notifications.sendPasswordResetEmailSucceed.title'
      ),
    }),
    [t]
  );

  const messageMapping = useMemo(
    (): Record<NotificationType, string> => ({
      [NotificationType.SendPasswordResetEmailSucceed]: t(
        'notifications.sendPasswordResetEmailSucceed.message'
      ),
    }),
    [t]
  );

  const title = get(titleMapping, type);

  const message = get(messageMapping, type);

  return { message, title };
};
