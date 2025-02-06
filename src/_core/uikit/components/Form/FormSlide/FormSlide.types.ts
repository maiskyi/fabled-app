import {
  FormControlBaseValidation,
  FormItemRuleFunction,
} from '../FormControl/FormControl.types';

export interface FormSlideValidation extends FormControlBaseValidation {}

export interface FormSlideRules {
  slide: Record<keyof FormSlideValidation, FormItemRuleFunction>;
}
