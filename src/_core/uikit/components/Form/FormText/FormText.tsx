import { FC, ComponentProps } from 'react';
import classNames from 'classnames';

import { IonIcon, IonInput } from '@ionic/react';

import { FormControl, FormControlBaseProps } from '../FormControl';
import { IconName, ICON } from '../../Icon';

import { FormTextValidation } from './FormText.types';

import styles from '../Form.module.scss';

interface FormTextProps extends FormControlBaseProps<FormTextValidation> {
  icon?: IconName;
  placeholder?: string;
  type?: 'text' | 'email';
  autocomplete?: ComponentProps<typeof IonInput>['autocomplete'];
  autocapitalize?: ComponentProps<typeof IonInput>['autoCapitalize'];
}

export const FormText: FC<FormTextProps> = ({
  icon,
  disabled,
  autofocus,
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
            className={classNames(styles.input, styles.outline, {
              'ion-invalid': invalid,
              'ion-touched': invalid,
            })}
            disabled={disabled}
            errorText={error?.message}
            fill="outline"
            helperText={help}
            mode="md"
            onIonBlur={onBlur}
            onIonInput={onChange}
            placeholder={props.label}
            type={type}
            value={value}
          >
            {icon && (
              <IonIcon
                aria-hidden="true"
                icon={ICON[icon]}
                slot="start"
                style={{
                  fontSize: 20,
                }}
              />
            )}
          </IonInput>
        );
      }}
    </FormControl>
  );
};
