import { FC } from 'react';

import { Box, Logo, Text } from '@core/uikit';
import { useTranslation } from '@core/localization';

import styles from './Wallpaper.module.scss';

export const Wallpaper: FC = () => {
  const { t } = useTranslation();

  return (
    <Box
      alignItems="flex-end"
      display="flex"
      flexDirection="column"
      gap={16}
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
  );
};
