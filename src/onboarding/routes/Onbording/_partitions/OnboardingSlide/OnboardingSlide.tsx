import { FC, ReactElement } from 'react';

import {
  Banner,
  BannerImageAsset,
  Box,
  Onboarding,
  BannerImageBackground,
} from '@core/uikit';

export interface OnboardingSlideProps {
  title: ReactElement;
  description: string;
  image: BannerImageAsset;
  background: BannerImageBackground;
}

export const OnboardingSlide: FC<OnboardingSlideProps> = ({
  title,
  description,
  image,
  background,
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
          <Banner.Image asset={image} background={background} />
        </Banner>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        gap={20}
        paddingInline={20}
        textAlign="center"
      >
        <Onboarding.Item.Title>{title}</Onboarding.Item.Title>
        <Onboarding.Item.Description>{description}</Onboarding.Item.Description>
      </Box>
    </Box>
  );
};
