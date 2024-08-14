import { FormTextRules } from './FormText.types';

export const FORM_TEXT_RULES: FormTextRules = {
  text: {
    email: ({ message }) => ({
      pattern: {
        message,
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
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
