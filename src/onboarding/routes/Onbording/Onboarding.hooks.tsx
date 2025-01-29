import { useMemo } from 'react';

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
        image: 'robot-1',
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
        image: 'robot-2',
        title: (
          <Translate
            components={{ hl: <OnboardingHl /> }}
            id="onboarding.library.title"
          />
        ),
      },
      {
        description: t('onboarding.outline.description'),
        image: 'robot-3',
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
        image: 'robots-1-2-3',
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
