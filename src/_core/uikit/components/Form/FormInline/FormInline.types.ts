import {
  FormControlBaseValidation,
  FormItemRuleFunction,
} from '../FormControl/FormControl.types';

export interface FormInlineValidation extends FormControlBaseValidation {}

export interface FormInlineRules {
  inline: Record<keyof FormInlineValidation, FormItemRuleFunction>;
}
