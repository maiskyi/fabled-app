import {
  FormControlBaseValidation,
  FormItemRuleFunction,
} from '../FormControl/FormControl.types';

export interface FormStarRatingValidation extends FormControlBaseValidation {}

export interface FormStarRatingRules {
  starRating: Record<keyof FormStarRatingValidation, FormItemRuleFunction>;
}
