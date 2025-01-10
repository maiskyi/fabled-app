import { FC } from 'react';

import { Box, Header, Onboarding } from '@core/uikit';

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
      display="flex"
      flexDirection="column"
      height="100%"
      justifyContent="center"
    >
      <Box flex={0} marginInline={-16}>
        <Header collapse="condense">
          <Header.Title size="large" wrap>
            {title}
          </Header.Title>
        </Header>
      </Box>
      <Box flex="0 0 300px">
        <Image className={styles.image} />
      </Box>
      <Box
        alignItems="center"
        display="flex"
        flex={0}
        flexDirection="column"
        justifyContent="center"
        textAlign="center"
      >
        <Onboarding.Item.Description>{description}</Onboarding.Item.Description>
      </Box>
    </Box>
  );
};
