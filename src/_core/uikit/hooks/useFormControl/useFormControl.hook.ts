import { useCallback } from 'react';
import { useWatch, useFormContext } from 'react-hook-form';

type UseFormControlReturnType<T> = [T, { setValue: (v: T) => void }];

export interface UseFormControlParams {
  name: string;
  watch?: boolean;
}

export const useFormControl = <T>({
  name,
  watch = true,
}: UseFormControlParams): UseFormControlReturnType<T> => {
  const value = useWatch({
    disabled: !watch,
    name,
  }) as T;

  const { setValue: setFormValue } = useFormContext();

  const setValue = useCallback(
    (v: T) => {
      setFormValue(name, v, {
        shouldDirty: true,
        shouldTouch: true,
        shouldValidate: true,
      });
    },
    [setFormValue, name]
  );

  return [value, { setValue }];
};
