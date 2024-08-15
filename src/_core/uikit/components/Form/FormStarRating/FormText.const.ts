import { FormStarRatingRules } from './FormText.types';

export const FORM_STAR_RATING_RULES: FormStarRatingRules = {
  starRating: {
    required: ({ message, value }) => ({
      required: {
        message,
        value,
      },
    }),
  },
};
