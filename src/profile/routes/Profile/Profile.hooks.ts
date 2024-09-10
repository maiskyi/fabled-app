import { groupBy } from 'lodash';
import { useMemo } from 'react';

import { useTranslation } from '@core/localization';
import { useRoute } from '@core/navigation';
import { RoutePath } from '@bootstrap/constants';
import { useLegal } from '@common/hooks';
import { useAuth } from '@core/auth';

import { ProfileMenuItem } from './Profile.types';

export const useProfileMenu = () => {
  const { t } = useTranslation();
  const [, navigate] = useRoute();
  const { openPrivacyPolicy, openTermsAndConditions } = useLegal();
  const { user } = useAuth();

  const items = useMemo((): ProfileMenuItem[] => {
    return [
      {
        active: user.providerData[0].providerId === 'password',
        group: t('actions.settings'),
        icon: 'lock-closed-outline',
        label: t('actions.changePassword'),
        onClick: () =>
          navigate({ action: 'push', pathname: RoutePath.ChangePassword }),
      } as ProfileMenuItem,
      {
        active: user.providerData[0].providerId === 'password',
        group: t('actions.settings'),
        icon: 'person-outline',
        label: t('actions.changeName'),
        onClick: () =>
          navigate({ action: 'push', pathname: RoutePath.ChangeName }),
      } as ProfileMenuItem,
      {
        active: true,
        group: t('actions.support'),
        icon: 'mail-outline',
        label: t('actions.contactUs'),
        onClick: () =>
          navigate({ action: 'push', pathname: RoutePath.ContactUs }),
      } as ProfileMenuItem,
      {
        active: true,
        group: t('actions.support'),
        icon: 'chatbox-ellipses-outline',
        label: t('actions.shareYourFeedback'),
        onClick: () =>
          navigate({ action: 'push', pathname: RoutePath.Feedback }),
      } as ProfileMenuItem,
      {
        active: true,
        group: t('actions.legal'),
        icon: 'document-text-outline',
        label: t('actions.privacyPolicy'),
        onClick: openPrivacyPolicy,
      } as ProfileMenuItem,
      {
        active: true,
        group: t('actions.legal'),
        icon: 'document-text-outline',
        label: t('actions.termsAndConditions'),
        onClick: openTermsAndConditions,
      } as ProfileMenuItem,
    ].filter(({ active }) => active);
  }, [t, navigate, openPrivacyPolicy, openTermsAndConditions, user]);

  const menu = useMemo(() => groupBy(items, ({ group }) => group), [items]);

  return { menu };
};
