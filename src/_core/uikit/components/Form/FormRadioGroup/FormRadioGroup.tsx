import { PropsWithChildren, ReactElement } from 'react';
import classNames from 'classnames';

import { IonRadioGroup } from '@ionic/react';

import { FormControl, FormControlBaseProps } from '../FormControl';

import { FormRadioGroupValidation } from './FormRadioGroup.types';
import { FormRadioGroupItem } from './FormRadioGroupItem/FormRadioGroupItem';
import { FormRadioGroupCustom } from './FormRadioGroupCustom/FormRadioGroupCustom';
import { FormRadioGroupContext } from './FormRadioGroup.context';

import styles from './FormRadioGroup.module.scss';

interface FormRadioGroupPropsWithoutChildren
  extends FormControlBaseProps<FormRadioGroupValidation> {
  transparent?: boolean;
}

type FormRadioGroupProps =
  PropsWithChildren<FormRadioGroupPropsWithoutChildren>;

interface FormRadioGroupComponent {
  (props: FormRadioGroupProps): ReactElement;
  Item: typeof FormRadioGroupItem;
  Custom: typeof FormRadioGroupCustom;
}

export const FormRadioGroup: FormRadioGroupComponent = ({
  children,
  transparent,
  ...props
}: FormRadioGroupProps) => {
  return (
    <FormControl type="radioGroup" {...props}>
      {({ value, onChange, invalid }) => {
        return (
          <IonRadioGroup
            className={classNames(styles.root, {
              [styles.transparent]: transparent,
            })}
            name={props.name}
            onIonChange={onChange}
            value={value}
          >
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

FormRadioGroup.Item = FormRadioGroupItem;
FormRadioGroup.Custom = FormRadioGroupCustom;
