import { FormTextareaRules } from './FormTextarea.types';

export const FORM_TEXTAREA_RULES: FormTextareaRules = {
  textarea: {
    maxLength: ({ message, value }) => ({
      maxLength: {
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
