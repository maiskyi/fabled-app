import { FormStarRatingRules } from './FormText.types';

export const FORM_STAR_RATING_RULES: FormStarRatingRules = {
  starRating: {
    max: ({ message, value }) => ({
      max: {
        message,
        value,
      },
    }),
    min: ({ message, value }) => ({
      min: {
        message,
        value,
      },
    }),
    required: ({ message, value }) => ({
      required: {
        message,
        value,
      },
    }),
  },
};
