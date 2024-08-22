import { PropsWithChildren, ReactElement } from 'react';

import { IonRadioGroup } from '@ionic/react';

import { FormControl, FormControlBaseProps } from '../FormControl';

import { FormRadioGroupValidation } from './FormRadioGroup.types';
import { FormRadioGroupCard } from './FormRadioGroupCard/FormRadioGroupCard';
import { FormRadioGroupContext } from './FormRadioGroup.context';

interface FormRadioGroupPropsWithoutChildren
  extends FormControlBaseProps<FormRadioGroupValidation> {}

type FormRadioGroupProps =
  PropsWithChildren<FormRadioGroupPropsWithoutChildren>;

interface FormRadioGroupComponent {
  (props: FormRadioGroupProps): ReactElement;
  Card: typeof FormRadioGroupCard;
}

export const FormRadioGroup: FormRadioGroupComponent = ({
  children,
  ...props
}: FormRadioGroupProps) => {
  return (
    <FormControl type="radioGroup" {...props}>
      {({ value, onChange, invalid }) => {
        return (
          <IonRadioGroup name={props.name} value={value}>
            <FormRadioGroupContext.Provider
              value={{ invalid, onChange, value }}
            >
              {children}
            </FormRadioGroupContext.Provider>
          </IonRadioGroup>
        );
      }}
    </FormControl>
  );
};

FormRadioGroup.Card = FormRadioGroupCard;
