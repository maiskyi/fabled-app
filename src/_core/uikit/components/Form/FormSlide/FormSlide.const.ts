import { FormSlideRules } from './FormSlide.types';

export const FORM_RANGE_RULES: FormSlideRules = {
  slide: {
    required: ({ message, value }) => ({
      required: {
        message,
        value,
      },
    }),
  },
};
