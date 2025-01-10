import { useMemo } from 'react';

import { useTranslation } from '@core/localization';

import { OnboardingItem } from './Onboarding.types';
import Image from './_assets/image.svg?react';

export const useOnboarding = () => {
  const { t } = useTranslation();

  const onboarding = useMemo(
    (): OnboardingItem[] => [
      {
        description: t('onboarding.library.description'),
        image: Image,
        title: t('onboarding.library.title'),
      },
      {
        description: t('onboarding.outline.description'),
        image: Image,
        title: t('onboarding.outline.title'),
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
