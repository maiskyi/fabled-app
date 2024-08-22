import { FC, ComponentProps } from 'react';
import classNames from 'classnames';
import { useContextSelector } from 'use-context-selector';

import { IonIcon, IonInput } from '@ionic/react';

import { FormControl, FormControlBaseProps } from '../FormControl';
import { IconName, ICON } from '../../Icon';
import { LocalizationContext } from '../../../contexts/LocalizationContext';

import { FormTextValidation } from './FormText.types';

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
  placeholder: initialPlaceholder,
  autocomplete,
  type = 'text',
  autocapitalize,
  ...props
}) => {
  const placeholder = useContextSelector(
    LocalizationContext,
    ({
      form: {
        text: { placeholder },
      },
    }) =>
      initialPlaceholder ||
      placeholder({ label: props.label, name: props.name })
  );

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
            labelPlacement={icon ? 'stacked' : 'floating'}
            mode="md"
            onIonBlur={onBlur}
            onIonInput={onChange}
            placeholder={placeholder}
            type={type}
            value={value}
          >
            {icon && (
              <IonIcon aria-hidden="true" icon={ICON[icon]} slot="start" />
            )}
          </IonInput>
        );
      }}
    </FormControl>
  );
};
