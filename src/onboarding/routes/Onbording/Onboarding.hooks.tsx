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
        background: 'ultramarine-blue',
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
        background: 'lavender-indigo',
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
        background: 'ultramarine-blue',
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
        background: 'lavender-indigo',
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
