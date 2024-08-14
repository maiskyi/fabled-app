import { useMemo } from 'react';
import { get } from 'lodash';

import { NotificationType, RoutePath } from '@bootstrap/constants';
import { useTranslation } from '@core/localization';
import { AuthErrorCodes } from '@core/auth';

import { NotificationByCodeMap } from './Notification.types';

interface UseNotificationCopyParams {
  type: NotificationType;
  code?: string;
  next: RoutePath;
}

const TYPES: NotificationType[] = [
  NotificationType.SendPasswordResetEmailSucceed,
  NotificationType.ConfirmPasswordResetSucceed,
  NotificationType.ConfirmPasswordResetFailed,
];

export const useNotificationCopy = ({
  type,
  next,
  code = null,
}: UseNotificationCopyParams) => {
  const { t } = useTranslation();

  const titleMapping = useMemo((): Record<NotificationType, string> => {
    return TYPES.reduce(
      (res, type) => ({
        ...res,
        [type]: t(`notifications.${type}.title`),
      }),
      {} as Record<NotificationType, string>
    );
  }, [t]);

  const messageMapping = useMemo((): Record<NotificationType, string> => {
    return TYPES.reduce(
      (res, type) => ({
        ...res,
        [type]: t(`notifications.${type}.message`),
      }),
      {} as Record<NotificationType, string>
    );
  }, [t]);

  const messageCodeMapping = useMemo(
    (): NotificationByCodeMap => ({
      [NotificationType.ConfirmPasswordResetFailed]: {
        [AuthErrorCodes.EXPIRED_OOB_CODE]: t(
          [
            'notifications',
            NotificationType.ConfirmPasswordResetFailed,
            AuthErrorCodes.EXPIRED_OOB_CODE,
          ].join('.')
        ),
      },
    }),
    [t]
  );

  const ctaMapping = useMemo(
    (): Partial<Record<RoutePath, string>> => ({
      [RoutePath.SignIn]: t('actions.signIn'),
    }),
    [t]
  );

  const cta = get(ctaMapping, [next]);

  const title = get(titleMapping, type);

  const message =
    get(messageCodeMapping, [type, code]) || get(messageMapping, type);

  return { cta, message, title };
};
