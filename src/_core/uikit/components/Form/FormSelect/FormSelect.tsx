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
          autoFocus={autofocus}
          className={classNames({
            'ion-invalid': invalid,
            'ion-touched': invalid,
          })}
          disabled={disabled}
          fill="outline"
          interface={isPlatform('desktop') ? 'popover' : 'action-sheet'}
          label={props.label}
          labelPlacement="floating"
          mode="md"
          onIonBlur={onBlur}
          onIonChange={onChange}
          placeholder={placeholder}
          value={value}
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
