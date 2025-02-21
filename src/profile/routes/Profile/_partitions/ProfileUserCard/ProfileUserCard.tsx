import { memo } from 'react';

import { Box, Avatar, Button, Typography } from '@core/uikit';
import { useAuth } from '@core/auth';
import { useUser } from '@common/hooks';
import { useTranslation } from '@core/localization';
import { useRoute } from '@core/navigation';
import { RoutePath } from '@bootstrap/constants';

export const ProfileUserCard = memo(function ProfileUserCard() {
  const { user } = useAuth();
  const { t } = useTranslation();
  const [, navigate] = useRoute();

  const { displayName: userDisplayName } = useUser();

  const handleOnEditname = () => {
    navigate({ action: 'push', pathname: RoutePath.ChangeName });
  };

  return (
    <Box paddingInline={20} paddingTop={130} position="relative">
      <Box
        backgroundColor="#020202"
        backgroundImage="repeating-linear-gradient(45deg, #161616 25%, transparent 25%, transparent 75%, #161616 75%, #161616), repeating-linear-gradient(45deg, #161616 25%, #020202 25%, #020202 75%, #161616 75%, #161616)"
        backgroundPosition="0 0, 10px 10px"
        backgroundSize="20px 20px"
        height={172}
        left={0}
        opacity={0.8}
        position="absolute"
        right={0}
        top={0}
      />
      <Box alignItems="end" display="flex" justifyContent="space-between">
        <Avatar border icon="user" size={84} />
        <Button
          color="dark"
          fill="outline"
          icon="edit-3"
          onClick={handleOnEditname}
          size="small"
        >
          {t('actions.editName')}
        </Button>
      </Box>
      <Box display="flex" flexDirection="column" gap={4} marginTop={20}>
        <Typography variant="body-1" weight="medium">
          {userDisplayName}
        </Typography>
        {!user?.email && (
          <Typography variant="body-3">
            {t('forms.idValue', { id: user?.uid })}
          </Typography>
        )}
        {!!user?.email && (
          <Typography variant="body-3">{user?.email}</Typography>
        )}
      </Box>
    </Box>
  );

  // return (
  //   <Card>
  //     <Card.Header>
  //       <Card.Avatar src={userAvatar} />
  //       {!user?.email && (
  //         <Card.Subtitle>{t('forms.idValue', { id: user?.uid })}</Card.Subtitle>
  //       )}
  //       {!!user?.email && <Card.Subtitle>{user?.email}</Card.Subtitle>}
  //       <Card.Title>{userDisplayName}</Card.Title>
  //     </Card.Header>
  //   </Card>
  // );
});
