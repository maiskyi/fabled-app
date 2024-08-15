import { useMemo } from 'react';
import { get } from 'lodash';

import { NotificationType, RoutePath } from '@bootstrap/constants';
import { useTranslation } from '@core/localization';
import { AuthErrorCodes } from '@core/auth';
import { useRoute } from '@core/navigation';

import { NotificationByCodeMap } from './Notification.types';

interface UseNotificationParams {
  type: NotificationType;
  code?: string;
}

const TYPES: NotificationType[] = [
  NotificationType.SendPasswordResetEmailSucceed,
  NotificationType.ConfirmPasswordResetSucceed,
  NotificationType.ConfirmPasswordResetFailed,
  NotificationType.InquirySucceed,
  NotificationType.InquiryFailed,
  NotificationType.FeedbackFailed,
  NotificationType.FeedbackSucceed,
];

type UseNotificationReturnType = [
  {
    cta: string;
    message: string;
    title: string;
  },
  () => void,
];

export const useNotification = ({
  type,
  code = null,
}: UseNotificationParams): UseNotificationReturnType => {
  const { t } = useTranslation();
  const [, navigate] = useRoute();

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
    (): Record<NotificationType, string> => ({
      [NotificationType.ConfirmPasswordResetSucceed]: t('actions.signIn'),
      [NotificationType.SendPasswordResetEmailSucceed]: t('actions.ok'),
      [NotificationType.ConfirmPasswordResetFailed]: '',
      [NotificationType.InquirySucceed]: t('actions.ok'),
      [NotificationType.InquiryFailed]: t('actions.ok'),
      [NotificationType.FeedbackFailed]: t('actions.ok'),
      [NotificationType.FeedbackSucceed]: t('actions.ok'),
    }),
    [t]
  );

  const ctaHandler = useMemo(
    (): Record<NotificationType, () => void> => ({
      [NotificationType.ConfirmPasswordResetSucceed]: () =>
        navigate({ action: 'replace', pathname: RoutePath.SignIn }),
      [NotificationType.SendPasswordResetEmailSucceed]: () =>
        navigate({
          action: 'back',
          pathname: RoutePath.Auth,
        }),
      [NotificationType.ConfirmPasswordResetFailed]: () => {},
      [NotificationType.InquirySucceed]: () =>
        navigate({
          action: 'back',
          pathname: RoutePath.Auth,
        }),
      [NotificationType.InquiryFailed]: () =>
        navigate({
          action: 'back',
          pathname: RoutePath.Auth,
        }),
      [NotificationType.FeedbackFailed]: () =>
        navigate({
          action: 'back',
          pathname: RoutePath.Auth,
        }),
      [NotificationType.FeedbackSucceed]: () =>
        navigate({
          action: 'back',
          pathname: RoutePath.Auth,
        }),
    }),
    [navigate]
  );

  const cta = get(ctaMapping, type);

  const title = get(titleMapping, type);

  const dispatch = get(ctaHandler, type);

  const message =
    get(messageCodeMapping, [type, code]) || get(messageMapping, type);

  return [{ cta, message, title }, dispatch];
};
