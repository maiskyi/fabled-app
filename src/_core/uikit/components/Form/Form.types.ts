import { ComponentProps, Key, ReactNode } from 'react';

import { IonInput } from '@ionic/react';

export type EnterKeyHint = ComponentProps<typeof IonInput>['enterkeyhint'];

export type FormSetErrors<T extends object> = (
  params: Partial<Record<keyof T, string>>
) => void;

export interface FormInstance<T extends object> {
  hasUnsavedChanges: () => boolean;
  setErrors: FormSetErrors<T>;
}

export interface OptionProps<T extends Key> {
  value: T;
  label: ReactNode;
}
