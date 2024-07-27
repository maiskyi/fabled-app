import {
  FormControlBaseValidation,
  FormItemRuleFunction,
} from '../FormControl/FormControl.types';

export interface FormTextareaValidation extends FormControlBaseValidation {
  maxLength?: number;
}

export interface FormTextareaRules {
  textarea: Record<keyof FormTextareaValidation, FormItemRuleFunction>;
}
