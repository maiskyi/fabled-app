import { memo } from 'react';

import { Card } from '@core/uikit';
import { useAuth } from '@core/auth';
import { useUser } from '@common/hooks';

export const ProfileUserCard = memo(function ProfileUserCard() {
  const { user } = useAuth();

  const { displayName: userDisplayName, avatar: userAvatar } = useUser();

  return (
    <Card>
      <Card.Header>
        <Card.Avatar src={userAvatar} />
        <Card.Title>{userDisplayName}</Card.Title>
        <Card.Subtitle>{user?.email}</Card.Subtitle>
      </Card.Header>
    </Card>
  );
});
