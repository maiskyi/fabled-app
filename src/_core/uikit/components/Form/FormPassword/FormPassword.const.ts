import { castArray } from 'lodash';

import { FormPasswordRules } from './FormPassword.types';

export const FORM_PASSWORD_RULES: FormPasswordRules = {
  password: {
    minLength: ({ message, value }) => ({
      minLength: {
        message,
        value,
      },
    }),
    pattern: ({ message, value }) => {
      if (Array.isArray(value)) {
        return {
          validate: value.reduce(
            (res, pattern, index) => ({
              ...res,
              [`pattern${index}`]: (v: string) => {
                return pattern.test(v) || castArray(message)[index];
              },
            }),
            {}
          ),
        };
      }
      return {
        pattern: {
          message,
          value,
        },
      };
    },
    required: ({ message, value }) => ({
      required: {
        message,
        value,
      },
    }),
  },
};
