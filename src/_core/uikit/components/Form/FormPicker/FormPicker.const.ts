import { FormPickerRules } from './FormPicker.types';

export const FORM_INLINE_RULES: FormPickerRules = {
  picker: {
    required: ({ message, value }) => ({
      required: {
        message,
        value,
      },
    }),
  },
};
