import { FC } from 'react';

import { Box, Onboarding } from '@core/uikit';

import { OnboardingItemImage } from '../../Onboarding.types';

import styles from './OnboardingSlide.module.scss';

interface OnboardingSlideProps {
  title: string;
  description: string;
  image: OnboardingItemImage;
}

export const OnboardingSlide: FC<OnboardingSlideProps> = ({
  title,
  description,
  image: Image,
}) => {
  return (
    <Box
      alignItems="center"
      display="flex"
      flexDirection="column"
      gap={24}
      height="100%"
      justifyContent="center"
    >
      <Box
        alignItems="center"
        aspectRatio={1}
        display="flex"
        justifyContent="center"
      >
        <Image className={styles.image} />
      </Box>
      <Box display="flex" flexDirection="column" gap={8}>
        <Box flex={0} textAlign="center">
          <Onboarding.Item.Title>{title}</Onboarding.Item.Title>
        </Box>
        <Box
          alignItems="center"
          display="flex"
          flex={0}
          flexDirection="column"
          justifyContent="center"
          textAlign="center"
        >
          <Onboarding.Item.Description>
            {description}
          </Onboarding.Item.Description>
        </Box>
      </Box>
    </Box>
  );
};
