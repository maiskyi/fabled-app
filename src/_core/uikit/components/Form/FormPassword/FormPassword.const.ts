import { castArray } from 'lodash';

import { FormPasswordRules } from './FormPassword.types';

export const FORM_PASSWORD_RULES: FormPasswordRules = {
  password: {
    required: ({ message, value }) => ({
      required: {
        value,
        message,
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
          value,
          message,
        },
      };
    },
    minLength: ({ message, value }) => ({
      minLength: {
        value,
        message,
      },
    }),
  },
};
