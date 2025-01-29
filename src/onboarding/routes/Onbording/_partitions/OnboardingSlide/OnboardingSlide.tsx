import { FC } from 'react';

import { Banner, BannerImageAsset, Box, Onboarding } from '@core/uikit';

export interface OnboardingSlideProps {
  title: string;
  description: string;
  image: BannerImageAsset;
}

export const OnboardingSlide: FC<OnboardingSlideProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <Box
      alignItems="center"
      display="flex"
      flexDirection="column"
      gap={24}
      height="100%"
    >
      <Box alignItems="center" display="flex" flex={1} justifyContent="center">
        <Banner>
          <Banner.Image asset={image} />
        </Banner>
      </Box>
      <Box display="flex" flexDirection="column" gap={20} textAlign="center">
        <Onboarding.Item.Title>{title}</Onboarding.Item.Title>
        <Onboarding.Item.Description>{description}</Onboarding.Item.Description>
      </Box>
    </Box>
  );
};
