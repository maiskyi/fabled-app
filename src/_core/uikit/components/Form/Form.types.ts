import { ComponentProps } from 'react';

import { IonInput } from '@ionic/react';

export type EnterKeyHint = ComponentProps<typeof IonInput>['enterkeyhint'];

export interface FormInstance {
  hasUnsavedChanges: () => boolean;
}
