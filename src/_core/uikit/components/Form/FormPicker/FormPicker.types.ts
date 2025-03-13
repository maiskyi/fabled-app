import { FC } from 'react';

import {
  FormControlBaseValidation,
  FormItemRuleFunction,
} from '../FormControl/FormControl.types';
import { FormInputOptionProps, FormInputOptionValue } from '../../../types';

export interface FormPickerValidation extends FormControlBaseValidation {}

export interface FormPickerRules {
  picker: Record<keyof FormPickerValidation, FormItemRuleFunction>;
}

export interface FormPickerComponentProps<V extends FormInputOptionValue> {
  value: V;
  dismiss: () => void;
  onChange: (value: V) => void;
  options: FormInputOptionProps<V>[];
}

export type FormPickerComponent<V extends FormInputOptionValue> = FC<
  FormPickerComponentProps<V>
>;

export type FormPickerHeight = 'auto' | 'full';

export type FormPickerWidth = 'auto' | 'full';
