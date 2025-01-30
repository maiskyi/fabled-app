import { FC, ReactElement } from 'react';

import { Box, Onboarding } from '@core/uikit';

export interface OnboardingSlideProps {
  title: ReactElement;
  description: string;
  image: string;
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
        <Box
          alignItems="center"
          display="flex"
          height={271}
          justifyContent="center"
          position="relative"
          width={333}
          zIndex={2}
        >
          <img
            alt=""
            src={image}
            style={{ height: '100%', objectFit: 'contain', width: '100%' }}
          />
        </Box>
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
