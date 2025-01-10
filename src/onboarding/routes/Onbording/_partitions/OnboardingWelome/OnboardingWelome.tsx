import { FC } from 'react';

import { Box, Header, Logo, Onboarding, Text } from '@core/uikit';
import { useTranslation } from '@core/localization';

import styles from './OnboardingWelome.module.scss';

export const OnboardingWelome: FC = () => {
  const { t } = useTranslation();

  return (
    <Box display="flex" flexDirection="column" height="100%">
      <Box flex={0} marginInline={-16}>
        <Header collapse="condense">
          <Header.Title size="large" wrap>
            {t('onboarding.welcome.title')}
          </Header.Title>
        </Header>
      </Box>
      <Box
        alignItems="center"
        display="flex"
        flex={1}
        flexDirection="column"
        justifyContent="center"
      >
        <Box
          alignItems="flex-end"
          display="flex"
          flex={1}
          flexDirection="column"
          gap={16}
          justifyContent="center"
          paddingInline={20}
        >
          <Box alignItems="flex-end" display="flex" maxWidth={320}>
            <Logo height={100} />
            <Text className={styles.name}>abled</Text>
          </Box>
          <Box maxWidth={160} textAlign="right">
            <Text variant="h6">{t('copy.slogan')}</Text>
          </Box>
        </Box>
        <Box flex={0} textAlign="center">
          <Onboarding.Item.Description>
            {t('onboarding.welcome.description')}
          </Onboarding.Item.Description>
        </Box>
      </Box>
    </Box>
  );
};
