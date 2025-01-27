import { FC, ComponentProps } from 'react';
import classNames from 'classnames';

import { IonInput, IonTextarea } from '@ionic/react';

import { FormControl, FormControlBaseProps } from '../FormControl';

import { FormTextareaValidation } from './FormTextarea.types';

import styles from '../Form.module.scss';

interface FormTextareaProps
  extends FormControlBaseProps<FormTextareaValidation> {
  rows?: number;
  placeholder?: string;
  autocapitalize?: ComponentProps<typeof IonInput>['autoCapitalize'];
}

export const FormTextarea: FC<FormTextareaProps> = ({
  rows = 4,
  disabled,
  autofocus,
  autocapitalize,
  ...props
}) => {
  const { validation } = props;

  return (
    <FormControl type="textarea" {...props}>
      {({ help, error, onBlur, invalid, onChange, value = '' }) => {
        return (
          <IonTextarea
            autoCapitalize={autocapitalize}
            autofocus={autofocus}
            className={classNames(styles.textarea, styles.outline, {
              'ion-invalid': invalid,
              'ion-touched': invalid,
            })}
            disabled={disabled}
            errorText={error?.message}
            fill="outline"
            helperText={help}
            maxlength={validation?.maxLength}
            mode="md"
            onIonBlur={onBlur}
            onIonInput={onChange}
            placeholder={props.label}
            rows={rows}
            value={value}
          />
        );
      }}
    </FormControl>
  );
};
