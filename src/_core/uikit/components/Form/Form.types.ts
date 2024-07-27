import { ComponentProps, Key, ReactNode } from 'react';

import { IonInput } from '@ionic/react';

export type EnterKeyHint = ComponentProps<typeof IonInput>['enterkeyhint'];

export interface FormInstance {
  hasUnsavedChanges: () => boolean;
}

export interface OptionProps<T extends Key> {
  value: T;
  label: ReactNode;
}
