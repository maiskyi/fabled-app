import {
  FormControlBaseValidation,
  FormItemRuleFunction,
} from '../FormControl/FormControl.types';

export interface FormSelectValidation extends FormControlBaseValidation {}

export interface FormSelectRules {
  select: Record<keyof FormSelectValidation, FormItemRuleFunction>;
}
