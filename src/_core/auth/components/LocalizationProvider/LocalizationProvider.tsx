import { FC, PropsWithChildren } from 'react';
import { merge } from 'lodash';

import { PartialDeep } from 'type-fest';

import {
  LocalizationContext,
  LocalizationContextProps,
  DEFAULT_LOCALIZATION_CONTEXT_VALUE,
} from '../../contexts/LocalizationContext';

export type LocalizationProviderProps = PropsWithChildren<
  PartialDeep<LocalizationContextProps>
>;

export const LocalizationProvider: FC<LocalizationProviderProps> = ({
  children,
  ...props
}) => {
  return (
    <LocalizationContext.Provider
      value={merge({}, DEFAULT_LOCALIZATION_CONTEXT_VALUE, props)}
    >
      {children}
    </LocalizationContext.Provider>
  );
};
