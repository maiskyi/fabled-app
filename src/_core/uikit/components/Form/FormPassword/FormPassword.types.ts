import {
  FormControlBaseValidation,
  FormItemRuleFunction,
} from '../FormControl/FormControl.types';

export interface FormPasswordValidation extends FormControlBaseValidation {
  pattern?: RegExp | RegExp[];
  minLength?: number;
}

export interface FormPasswordRules {
  password: Record<keyof FormPasswordValidation, FormItemRuleFunction>;
}
