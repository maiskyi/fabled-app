import { createContext } from 'use-context-selector';

import { LOCALIZATION_CONTEXT_DEFAULT } from './LocalizationContext.const';
import { LocalizationContextProps } from './LocalizationContext.types';

export const LocalizationContext = createContext<LocalizationContextProps>(
  LOCALIZATION_CONTEXT_DEFAULT
);
