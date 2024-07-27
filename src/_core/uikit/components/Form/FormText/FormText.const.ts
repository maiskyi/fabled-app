import { FormTextRules } from './FormText.types';

export const FORM_TEXT_RULES: FormTextRules = {
  text: {
    required: ({ message, value }) => ({
      required: {
        value,
        message,
      },
    }),
    email: ({ message }) => ({
      pattern: {
        message,
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      },
    }),
  },
};
