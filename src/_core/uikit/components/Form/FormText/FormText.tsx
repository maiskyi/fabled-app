import { FC, ComponentProps } from 'react';

import { IonInput } from '@ionic/react';
import classNames from 'classnames';

import { FormControl, FormControlBaseProps } from '../FormControl';

import { FormTextValidation } from './FormText.types';

interface FormTextProps extends FormControlBaseProps<FormTextValidation> {
  placeholder?: string;
  type?: 'text' | 'email';
  autocomplete?: ComponentProps<typeof IonInput>['autocomplete'];
  autocapitalize?: ComponentProps<typeof IonInput>['autoCapitalize'];
}

export const FormText: FC<FormTextProps> = ({
  disabled,
  autofocus,
  placeholder,
  autocomplete,
  type = 'text',
  autocapitalize,
  ...props
}) => {
  return (
    <FormControl type="text" {...props}>
      {({ help, error, onBlur, invalid, onChange, value = '' }) => {
        return (
          <IonInput
            type={type}
            value={value}
            helperText={help}
            onIonBlur={onBlur}
            disabled={disabled}
            autofocus={autofocus}
            onIonInput={onChange}
            placeholder={placeholder}
            autocomplete={autocomplete}
            autoCapitalize={autocapitalize}
            label={props.label}
            fill="outline"
            labelPlacement="stacked"
            errorText={error?.message}
            className={classNames({
              'ion-invalid': invalid,
              'ion-touched': invalid,
            })}
          />
        );
      }}
    </FormControl>
  );
};
