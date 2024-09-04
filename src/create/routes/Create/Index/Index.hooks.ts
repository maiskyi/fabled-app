import { useMemo } from 'react';

import { useConfig } from '@bootstrap/providers';
import { FormInputOptionProps } from '@core/uikit';
import { useTranslation } from '@core/localization';

export const useOptions = () => {
  const { t } = useTranslation();
  const { characters, themes, scenes } = useConfig();

  const charactersOptions = useMemo(
    (): FormInputOptionProps<string>[] =>
      characters.map(
        ({ title, description, sys: { id }, illustration: { url } }) => ({
          image: url,
          label: title,
          note: description,
          value: id,
        })
      ),
    [characters]
  );

  const themesOptions = useMemo(
    (): FormInputOptionProps<string>[] =>
      themes.map(({ description, title, sys: { id } }) => ({
        label: title,
        note: description,
        value: id,
      })),
    [themes]
  );

  const scenesOptions = useMemo(
    (): FormInputOptionProps<string>[] =>
      scenes.map(({ title, sys: { id }, illustration: { url } }) => ({
        image: url,
        label: title,
        value: id,
      })),
    [scenes]
  );

  const readTimeOptions = useMemo(
    (): FormInputOptionProps<number>[] =>
      [5, 7, 10].map((value) => ({
        label: t('options.minutesValue', { value }),
        value,
      })),
    [t]
  );

  return {
    characters: charactersOptions,
    readTimes: readTimeOptions,
    scenes: scenesOptions,
    themes: themesOptions,
  };
};
