import { useMemo } from 'react';

import { OptionProps } from '@core/uikit';

export const useStaticOptions = () => {
  const readTime = useMemo(
    (): OptionProps<number>[] => [
      {
        label: '5 min',
        value: 5,
      },
      {
        label: '7 min',
        value: 7,
      },
      {
        label: '10 min',
        value: 10,
      },
    ],
    []
  );

  return { readTime };
};
