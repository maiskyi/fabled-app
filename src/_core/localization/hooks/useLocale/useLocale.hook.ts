import { useContextSelector } from 'use-context-selector';

import { LocalizationContext } from '../../contexts/Localization.context';

type UseLocaleReturnType = [{ lng: string }];

export const useLocale = (): UseLocaleReturnType => {
  const lng = useContextSelector(LocalizationContext, ({ lng }) => lng);

  return [{ lng }];
};
