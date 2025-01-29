import { useMemo } from 'react';

import { useTranslation } from '@core/localization';

import { OnboardingSlideProps } from './_partitions/OnboardingSlide';

export const useOnboarding = () => {
  const { t } = useTranslation();

  const onboarding = useMemo(
    (): OnboardingSlideProps[] => [
      {
        description: t('onboarding.library.description'),
        image: 'tree-robots',
        title: t('onboarding.library.title'),
      },
      {
        description: t('onboarding.library.description'),
        image: 'tree-robots',
        title: t('onboarding.library.title'),
      },
      {
        description: t('onboarding.outline.description'),
        image: 'tree-robots',
        title: t('onboarding.outline.title'),
      },
      // {
      //   description: t('onboarding.personalized.description'),
      //   image: Personalized,
      //   title: t('onboarding.personalized.title'),
      // },
      {
        description: t('onboarding.image.description'),
        image: 'tree-robots',
        title: t('onboarding.image.title'),
      },
    ],
    [t]
  );

  return { onboarding };
};
