import { useMemo } from 'react';

import { useConfig } from '@bootstrap/providers';
import { FormInputOptionProps } from '@core/uikit';
import { useTranslation } from '@core/localization';

export const useOptions = () => {
  const { t } = useTranslation();
  const { characters, themes, scenes } = useConfig();

  const charactersOptions = useMemo(
    (): FormInputOptionProps<string>[] =>
      characters.map(({ id, title, image }) => ({
        image,
        label: title,
        value: id,
      })),
    [characters]
  );

  const themesOptions = useMemo(
    (): FormInputOptionProps<string>[] =>
      themes.map(({ id, description, title }) => ({
        label: title,
        note: description,
        value: id,
      })),
    [themes]
  );

  const placeOfEventOptions = useMemo(
    (): FormInputOptionProps<string>[] =>
      scenes.map(({ id, title, image, prompt }) => ({
        image,
        label: title,
        note: prompt?.id,
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
    placesOfEvent: placeOfEventOptions,
    readTimes: readTimeOptions,
    themes: themesOptions,
  };
};
