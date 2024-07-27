import {
  FormControlBaseValidation,
  FormItemRuleFunction,
} from '../FormControl/FormControl.types';

export interface FormTextValidation extends FormControlBaseValidation {
  email?: boolean;
}

export interface FormTextRules {
  text: Record<keyof FormTextValidation, FormItemRuleFunction>;
}
