import { FC } from 'react';
import classNames from 'classnames';

import { IonCheckbox } from '@ionic/react';

import styles from './Checkbox.module.scss';

export interface CheckboxProps {
  checked?: boolean;
  className?: string;
}

export const Checkbox: FC<CheckboxProps> = ({ checked, className }) => {
  return (
    <IonCheckbox
      checked={checked}
      className={classNames(styles.root, className)}
    />
  );
};
