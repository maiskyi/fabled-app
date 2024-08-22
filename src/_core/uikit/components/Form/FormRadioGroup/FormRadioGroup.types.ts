import {
  FormControlBaseValidation,
  FormItemRuleFunction,
} from '../FormControl/FormControl.types';

export type FormRadioGroupValue = string | number;

export interface FormRadioGroupValidation extends FormControlBaseValidation {}

export interface FormRadioGroupRules {
  radioGroup: Record<keyof FormRadioGroupValidation, FormItemRuleFunction>;
}
