import { useMemo } from 'react';

import { ASSETS } from '@core/uikit';
import { Translate, useTranslation } from '@core/localization';
import { APP_NAME } from '@common/constants';

import { OnboardingSlideProps } from './_partitions/OnboardingSlide';
import { OnboardingHl } from './_partitions/OnboardingHl';

export const useOnboarding = () => {
  const { t } = useTranslation();

  const onboarding = useMemo(
    (): OnboardingSlideProps[] => [
      {
        description: t('onboarding.welcome.description'),
        image: ASSETS.ROBOTS_1_2_3,
        title: (
          <Translate
            components={{ hl: <OnboardingHl /> }}
            id="onboarding.welcome.title"
            values={{ name: APP_NAME }}
          />
        ),
      },
      {
        description: t('onboarding.library.description'),
        image: ASSETS.ROBOT_1,
        title: (
          <Translate
            components={{ hl: <OnboardingHl /> }}
            id="onboarding.library.title"
          />
        ),
      },
      {
        description: t('onboarding.outline.description'),
        image: ASSETS.ROBOT_2,
        title: (
          <Translate
            components={{ hl: <OnboardingHl /> }}
            id="onboarding.outline.title"
          />
        ),
      },
      // {
      //   description: t('onboarding.personalized.description'),
      //   image: Personalized,
      //   title: t('onboarding.personalized.title'),
      // },
      {
        description: t('onboarding.image.description'),
        image: ASSETS.ROBOT_3,
        title: (
          <Translate
            components={{ hl: <OnboardingHl /> }}
            id="onboarding.image.title"
          />
        ),
      },
    ],
    [t]
  );

  return { onboarding };
};
