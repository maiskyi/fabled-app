import { FormInlineRules } from './FormInline.types';

export const FORM_INLINE_RULES: FormInlineRules = {
  inline: {
    required: ({ message, value }) => ({
      required: {
        message,
        value,
      },
    }),
  },
};
