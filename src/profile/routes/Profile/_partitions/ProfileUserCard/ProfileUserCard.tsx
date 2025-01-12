import { memo } from 'react';

import { Card } from '@core/uikit';
import { useAuth } from '@core/auth';
import { useUser } from '@common/hooks';
import { useTranslation } from '@core/localization';

export const ProfileUserCard = memo(function ProfileUserCard() {
  const { user } = useAuth();
  const { t } = useTranslation();

  const { displayName: userDisplayName, avatar: userAvatar } = useUser();

  return (
    <Card>
      <Card.Header>
        <Card.Avatar src={userAvatar} />
        {!user?.email && (
          <Card.Subtitle>{t('forms.idValue', { id: user?.uid })}</Card.Subtitle>
        )}
        {!!user?.email && <Card.Subtitle>{user?.email}</Card.Subtitle>}
        <Card.Title>{userDisplayName}</Card.Title>
      </Card.Header>
    </Card>
  );
});
