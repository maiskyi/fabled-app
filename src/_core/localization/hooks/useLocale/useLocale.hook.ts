import { useContextSelector } from 'use-context-selector';

import { LocalizationContext } from '../../contexts/Localization.context';

type UseLocaleReturnType = [{ lng: string; isReady: boolean }];

export const useLocale = (): UseLocaleReturnType => {
  const lng = useContextSelector(LocalizationContext, ({ lng }) => lng);

  const isReady = useContextSelector(
    LocalizationContext,
    ({ isReady }) => isReady
  );

  return [{ isReady, lng }];
};
