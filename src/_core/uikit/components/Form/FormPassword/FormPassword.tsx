import { FC, Fragment } from 'react';
import classNames from 'classnames';
import { useContextSelector } from 'use-context-selector';

import { IonIcon, IonInput, IonInputPasswordToggle } from '@ionic/react';

import { FormControl, FormControlBaseProps } from '../FormControl';
import { IconName, ICON } from '../../Icon';
import { LocalizationContext } from '../../../contexts/LocalizationContext';

import { FormPasswordValidation } from './FormPassword.types';

interface FormPasswordProps
  extends FormControlBaseProps<FormPasswordValidation> {
  placeholder?: string;
  icon?: IconName;
}

export const FormPassword: FC<FormPasswordProps> = ({
  icon,
  disabled,
  autofocus,
  placeholder: initialPlaceholder,
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
              labelPlacement={icon ? 'stacked' : 'floating'}
              mode="md"
              onIonBlur={onBlur}
              onIonInput={onChange}
              placeholder={placeholder}
              type="password"
              value={value}
            >
              {icon && (
                <IonIcon aria-hidden="true" icon={ICON[icon]} slot="start" />
              )}
              {icon && <IonInputPasswordToggle mode="md" slot="end" />}
            </IonInput>
          </Fragment>
        );
      }}
    </FormControl>
  );
};
