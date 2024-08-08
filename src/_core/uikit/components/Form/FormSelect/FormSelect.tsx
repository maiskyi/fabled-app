import { Key, ReactElement } from 'react';
import classNames from 'classnames';

import { IonSelect, IonSelectOption, isPlatform } from '@ionic/react';

import { FormControl, FormControlBaseProps } from '../FormControl';
import { OptionProps } from '../Form.types';

import { FormSelectValidation } from './FormSelect.types';

interface FormSelectProps<T extends Key = string>
  extends FormControlBaseProps<FormSelectValidation> {
  options: OptionProps<T>[];
  placeholder?: string;
}

interface FormSelectComponent {
  <T extends Key = string>(
    props: FormSelectProps<T>
  ): ReactElement<any, any> | null;
}

export const FormSelect: FormSelectComponent = ({
  disabled,
  autofocus,
  options = [],
  placeholder,
  ...props
}: FormSelectProps<any>) => {
  return (
    <FormControl type="select" {...props}>
      {({ value, onBlur, onChange, invalid }) => (
        <IonSelect
          mode="md"
          value={value}
          fill="outline"
          onIonBlur={onBlur}
          disabled={disabled}
          label={props.label}
          autoFocus={autofocus}
          onIonChange={onChange}
          placeholder={placeholder}
          labelPlacement="floating"
          className={classNames({
            'ion-invalid': invalid,
            'ion-touched': invalid,
          })}
          interface={isPlatform('desktop') ? 'popover' : 'action-sheet'}
        >
          {options.map(({ value, label }) => {
            return (
              <IonSelectOption key={value} value={value}>
                {label}
              </IonSelectOption>
            );
          })}
        </IonSelect>
      )}
    </FormControl>
  );
};
