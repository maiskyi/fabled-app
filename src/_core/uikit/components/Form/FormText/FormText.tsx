import { FC, ComponentProps } from 'react';
import classNames from 'classnames';

import { IonInput } from '@ionic/react';

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
            autoCapitalize={autocapitalize}
            autocomplete={autocomplete}
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
            type={type}
            value={value}
          />
        );
      }}
    </FormControl>
  );
};
