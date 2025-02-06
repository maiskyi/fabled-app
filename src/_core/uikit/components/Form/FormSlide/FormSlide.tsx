import { FC } from 'react';

import { IonRange } from '@ionic/react';

import { FormControl, FormControlBaseProps } from '../FormControl';

import { FormSlideValidation } from './FormSlide.types';

import styles from './FormSlide.module.scss';

interface FormSlideProps extends FormControlBaseProps<FormSlideValidation> {
  max?: number;
  min?: number;
  snaps?: boolean;
  ticks?: boolean;
}

export const FormSlide: FC<FormSlideProps> = ({
  disabled,
  min,
  max,
  snaps,
  ticks,
  ...props
}) => {
  return (
    <FormControl type="slide" {...props}>
      {({ onBlur, onChange, value = 0 }) => {
        return (
          <IonRange
            className={styles.root}
            color="secondary"
            disabled={disabled}
            max={max}
            min={min}
            mode="ios"
            onIonBlur={onBlur}
            onIonChange={onChange}
            pin
            snaps={snaps}
            ticks={ticks}
            value={value}
          />
        );
      }}
    </FormControl>
  );
};
