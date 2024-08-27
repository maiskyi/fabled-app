import { FormRadioGroupRules } from './FormRadioGroup.types';

export const FORM_RADIO_GROUP_RULES: FormRadioGroupRules = {
  radioGroup: {
    required: ({ message, value }) => ({
      required: {
        message,
        value,
      },
    }),
  },
};
