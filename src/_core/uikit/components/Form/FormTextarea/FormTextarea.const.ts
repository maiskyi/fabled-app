import { FormTextareaRules } from './FormTextarea.types';

export const FORM_TEXTAREA_RULES: FormTextareaRules = {
  textarea: {
    required: ({ message, value }) => ({
      required: {
        value,
        message,
      },
    }),
    maxLength: ({ message, value }) => ({
      maxLength: {
        value,
        message,
      },
    }),
  },
};
