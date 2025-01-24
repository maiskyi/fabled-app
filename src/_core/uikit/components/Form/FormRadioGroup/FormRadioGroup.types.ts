import {
  FormControlBaseValidation,
  FormItemRuleFunction,
} from '../FormControl/FormControl.types';

export interface FormRadioGroupValidation extends FormControlBaseValidation {}

export interface FormRadioGroupRules {
  radioGroup: Record<keyof FormRadioGroupValidation, FormItemRuleFunction>;
}

export type FormRadioGroupValue = string | number;
