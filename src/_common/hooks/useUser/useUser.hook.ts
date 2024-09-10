import { useAuth } from '@core/auth';
import { useTranslation } from '@core/localization';
import { USER_AVATAR_SRC } from '@core/uikit';

export const useUser = () => {
  const { user } = useAuth();

  const { t } = useTranslation();

  const displayName = user?.displayName || t('defaults.userDisplayName');

  const avatar = user?.photoUrl || USER_AVATAR_SRC;

  return { avatar, displayName, uid: user?.uid };
};
