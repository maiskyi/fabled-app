import { groupBy } from 'lodash';
import { useMemo } from 'react';

import { useTranslation } from '@core/localization';
import { useRoute } from '@core/navigation';
import { PlanAction, RoutePath } from '@bootstrap/constants';
import { useLegal } from '@common/hooks';
import { useAuth } from '@core/auth';
import { usePurchases, PurchasesStoreProduct } from '@core/purchases';

import { ProfileMenuItem } from './Profile.types';

export const useProfileSubscription = () => {
  const { activeSubscriptions } = usePurchases();
  const { t } = useTranslation();

  const defaultSubscriptions: Partial<PurchasesStoreProduct>[] = [
    {
      description: t('defaults.planDescription'),
      title: t('defaults.plan'),
    },
  ];

  const subscriptions = activeSubscriptions.length
    ? activeSubscriptions
    : defaultSubscriptions;

  return { subscriptions };
};

export const useProfileMenu = () => {
  const { t } = useTranslation();
  const [, navigate] = useRoute();
  const { openPrivacyPolicy, openTermsAndConditions } = useLegal();
  const { user } = useAuth();
  const { subscriptions } = useProfileSubscription();

  const planItems = useMemo((): ProfileMenuItem[] => {
    return subscriptions.map(({ title, description }) => ({
      active: true,
      group: t('actions.plan'),
      icon: 'diamond-outline',
      label: title,
      note: description,
      onClick: () =>
        navigate({
          action: 'push',
          params: {
            action: PlanAction.Manage,
          },
          pathname: RoutePath.Plan,
        }),
    }));
  }, [t, subscriptions, navigate]);

  const menuItems = useMemo((): ProfileMenuItem[] => {
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

  const menu = useMemo(
    () => groupBy(menuItems, ({ group }) => group),
    [menuItems]
  );

  const plans = useMemo(
    () => groupBy(planItems, ({ group }) => group),
    [planItems]
  );

  return { menu, plans };
};
