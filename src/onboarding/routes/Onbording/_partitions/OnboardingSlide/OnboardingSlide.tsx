import { FC } from 'react';

import {
  Box,
  Onboarding,
  useMediaSwitch,
  SvgFunctionComponent,
} from '@core/uikit';

export interface OnboardingSlideProps {
  title: string;
  description: string;
  image: SvgFunctionComponent;
}

export const OnboardingSlide: FC<OnboardingSlideProps> = ({
  title,
  description,
  image: Image,
}) => {
  const { value: width } = useMediaSwitch({
    lg: 600,
    md: 500,
    sm: 300,
    xl: 600,
    xs: 300,
  });

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
        width={width}
      >
        <Onboarding.Item.Svg Svg={Image} height="auto" width="auto" />
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
