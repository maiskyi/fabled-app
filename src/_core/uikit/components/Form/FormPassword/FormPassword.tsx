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
              autofocus={autofocus}
              className={classNames({
                'ion-invalid': invalid,
                'ion-touched': invalid,
              })}
              disabled={disabled}
              errorText={error?.message}
              fill="outline"
              helperText={help}
              label={props.label}
              labelPlacement="floating"
              mode="md"
              onIonBlur={onBlur}
              onIonInput={onChange}
              placeholder={placeholder}
              type="password"
              value={value}
            >
              {/* <IonInputPasswordToggle mode="md" slot="end" /> */}
            </IonInput>
          </Fragment>
        );
      }}
    </FormControl>
  );
};
