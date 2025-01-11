import { useMemo } from 'react';

import { useTranslation } from '@core/localization';

import Image from './_assets/image.svg?react';
import Library from './_assets/library.svg?react';
import Outline from './_assets/outline.svg?react';
import Personalized from './_assets/personalized.svg?react';
import { OnboardingSlideProps } from './_partitions/OnboardingSlide';

export const useOnboarding = () => {
  const { t } = useTranslation();

  const onboarding = useMemo(
    (): OnboardingSlideProps[] => [
      {
        description: t('onboarding.library.description'),
        image: Library,
        title: t('onboarding.library.title'),
      },
      {
        description: t('onboarding.outline.description'),
        image: Outline,
        title: t('onboarding.outline.title'),
      },
      {
        description: t('onboarding.personalized.description'),
        image: Personalized,
        title: t('onboarding.personalized.title'),
      },
      {
        description: t('onboarding.image.description'),
        image: Image,
        title: t('onboarding.image.title'),
      },
    ],
    [t]
  );

  return { onboarding };
};
