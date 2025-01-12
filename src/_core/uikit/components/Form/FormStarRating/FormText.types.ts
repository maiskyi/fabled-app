import {
  FormControlBaseValidation,
  FormItemRuleFunction,
} from '../FormControl/FormControl.types';

export interface FormStarRatingValidation extends FormControlBaseValidation {
  min?: number;
  max?: number;
}

export interface FormStarRatingRules {
  starRating: Record<keyof FormStarRatingValidation, FormItemRuleFunction>;
}
