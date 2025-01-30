import { FC } from 'react';

import { Box, Card, Icon, Typography } from '@core/uikit';
import { useTranslation } from '@core/localization';
import { usePromptToSubscribe } from '@core/purchases';
import { PromptToSubscribe } from '@common/features';

export const ProfilePlan: FC = () => {
  const { t } = useTranslation();

  const [, dispatch] = usePromptToSubscribe({
    component: PromptToSubscribe,
    dissmissTimeout: 1,
  });

  const handleOnClick = () => {
    dispatch();
  };

  return (
    <Box marginTop={24}>
      <Card color="horizontal" onClick={handleOnClick}>
        <Card.Content>
          <Box alignItems="center" display="flex" gap={12}>
            <Box display="flex" flex={0}>
              <Icon fontSize={28} name="fire" />
            </Box>
            <Box display="flex" flex={1} flexDirection="column" gap={4}>
              <Typography variant="body-2" weight="semi-bold">
                Fabled Premium
              </Typography>
              <Typography variant="body-4">
                {t('intro.profile', {
                  plan: 'Fabled Premium',
                })}
              </Typography>
            </Box>
            <Box display="flex" flex={0}>
              <Icon fontSize={24} name="chevron-right" />
            </Box>
          </Box>
        </Card.Content>
      </Card>
    </Box>
  );
};
