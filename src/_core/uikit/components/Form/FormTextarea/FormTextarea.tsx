import { FC, ComponentProps } from 'react';
import classNames from 'classnames';

import { IonInput, IonTextarea } from '@ionic/react';

import { FormControl, FormControlBaseProps } from '../FormControl';

import { FormTextareaValidation } from './FormTextarea.types';

interface FormTextareaProps
  extends FormControlBaseProps<FormTextareaValidation> {
  rows?: number;
  placeholder?: string;
  autocapitalize?: ComponentProps<typeof IonInput>['autoCapitalize'];
}

export const FormTextarea: FC<FormTextareaProps> = ({
  rows = 6,
  disabled,
  autofocus,
  placeholder,
  autocapitalize,
  ...props
}) => {
  const { validation } = props;

  return (
    <FormControl type="textarea" {...props}>
      {({ help, error, onBlur, invalid, onChange, value = '' }) => {
        return (
          <IonTextarea
            mode="md"
            rows={rows}
            value={value}
            fill="outline"
            helperText={help}
            onIonBlur={onBlur}
            disabled={disabled}
            label={props.label}
            autofocus={autofocus}
            onIonInput={onChange}
            labelPlacement="floating"
            placeholder={placeholder}
            errorText={error?.message}
            autoCapitalize={autocapitalize}
            maxlength={validation?.maxLength}
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
