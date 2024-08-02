import { createContext } from 'use-context-selector';

import { LocalizationContextProps } from './Localization.types';
import { DEFAULT_LOCALIZATION_CONTEXT_VALUE } from './Localization.const';

export const LocalizationContext = createContext<LocalizationContextProps>(
  DEFAULT_LOCALIZATION_CONTEXT_VALUE
);
