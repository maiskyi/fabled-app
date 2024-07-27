import { FormSelectRules } from './FormSelect.types';

export const FORM_SELECT_RULES: FormSelectRules = {
  select: {
    required: ({ message, value }) => ({
      required: {
        value,
        message,
      },
    }),
  },
};
