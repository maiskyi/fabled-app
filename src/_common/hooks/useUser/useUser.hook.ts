import { useAuth } from '@core/auth';
import { useTranslation } from '@core/localization';

export const useUser = () => {
  const { user } = useAuth();

  const { t } = useTranslation();

  const displayName = user?.displayName || t('defaults.userDisplayName');

  const avatar = user?.photoUrl;

  return { avatar, displayName, email: user?.email, uid: user?.uid };
};
