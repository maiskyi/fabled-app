import { useAuth } from '@core/auth';
import { useTranslation } from '@core/localization';

export const useUserDisplayName = () => {
  const { user } = useAuth();

  const { t } = useTranslation();

  const displayName = user?.displayName || t('defaults.userDisplayName');

  return { displayName };
};
