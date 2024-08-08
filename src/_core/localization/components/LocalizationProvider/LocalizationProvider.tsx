import { FC, PropsWithChildren, ReactNode } from 'react';
import { invoke } from 'lodash';
import { initReactI18next } from 'react-i18next';
import { useAsync } from 'react-use';
import i18n from 'i18next';

import { Device } from '@capacitor/device';

import { LocalizationContext } from '../../contexts/Localization.context';

import { LocalizationFormatters } from './LocalizationProvider.types';

export type LocalizationProviderProps = PropsWithChildren<{
  fallbackLng: string;
  fallback?: ReactNode;
  supportedLngs: string[];
  formatters?: LocalizationFormatters;
  resources: Record<string, object>;
}>;

export const LocalizationProvider: FC<LocalizationProviderProps> = ({
  children,
  resources,
  fallbackLng,
  supportedLngs,
  fallback = null,
  formatters = {},
}) => {
  const { value } = useAsync(async (): Promise<string> => {
    const { value: lng } = await Device.getLanguageTag();
    await i18n.use(initReactI18next).init({
      lng,
      fallbackLng,
      debug: false,
      supportedLngs,
      resources: Object.entries(resources).reduce(
        (res, [key, translation]) => ({
          ...res,
          [key]: {
            translation,
          },
        }),
        {}
      ),
      ns: ['translation'],
      interpolation: {
        format: (value, format) => {
          const [resolved] = i18n.languages;
          return invoke(formatters, [format, resolved], value) || value;
        },
      },
    });
    return i18n.language;
  });

  return (
    <LocalizationContext.Provider value={{ lng: value }}>
      {value ? children : fallback}
    </LocalizationContext.Provider>
  );
};
