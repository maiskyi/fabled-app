import { FC, Fragment } from 'react';
import classNames from 'classnames';

import { IonInput } from '@ionic/react';

import { FormControl, FormControlBaseProps } from '../FormControl';

import { FormPasswordValidation } from './FormPassword.types';

interface FormPasswordProps
  extends FormControlBaseProps<FormPasswordValidation> {
  placeholder?: string;
}

export const FormPassword: FC<FormPasswordProps> = ({
  disabled,
  autofocus,
  placeholder,
  ...props
}) => {
  return (
    <FormControl type="password" {...props}>
      {({ value = '', onChange, onBlur, invalid, help, error }) => {
        return (
          <Fragment>
            <IonInput
              fill="outline"
              mode="md"
              value={value}
              helperText={help}
              onIonBlur={onBlur}
              disabled={disabled}
              label={props.label}
              autofocus={autofocus}
              onIonInput={onChange}
              labelPlacement="floating"
              placeholder={placeholder}
              errorText={error?.message}
              type="password"
              className={classNames({
                'ion-invalid': invalid,
                'ion-touched': invalid,
              })}
            >
              {/* <IonInputPasswordToggle mode="md" slot="end" /> */}
            </IonInput>
          </Fragment>
        );
      }}
    </FormControl>
  );
};
