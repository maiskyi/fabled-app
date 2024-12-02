import { FC } from 'react';

import { IonCheckbox } from '@ionic/react';

export interface CheckboxProps {
  checked?: boolean;
  className?: string;
}

export const Checkbox: FC<CheckboxProps> = ({ checked, className }) => {
  return <IonCheckbox checked={checked} className={className} />;
};
