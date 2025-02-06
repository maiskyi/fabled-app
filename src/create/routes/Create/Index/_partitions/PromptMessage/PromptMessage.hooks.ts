import { useMemo } from 'react';

import { useConfig } from '@bootstrap/providers';
import { FormInputOptionProps } from '@core/uikit';
import { useTranslation } from '@core/localization';
import { GENDER } from '@common/assets';

export const useOptions = () => {
  const { t } = useTranslation();
  const { characters, themes, scenes } = useConfig();

  const genderOptions = useMemo(
    (): FormInputOptionProps<string>[] => [
      {
        image: GENDER.BOY,
        label: t('options.boy'),
        value: 'boy',
      },
      {
        image: GENDER.GIRL,
        label: t('options.girl'),
        value: 'girl',
      },
    ],
    [t]
  );

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
    gender: genderOptions,
    placesOfEvent: placeOfEventOptions,
    readTimes: readTimeOptions,
    themes: themesOptions,
  };
};
