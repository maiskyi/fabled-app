import {
  LocalizationContextProps,
  FormValidationErrorFn,
} from './LocalizationContext.types';

const genericError: FormValidationErrorFn = ({ name, label }) =>
  `${label || name} is invalid`;

const requiredInputError: FormValidationErrorFn = ({ name, label }) =>
  `${label || name} is required`;

const patternInputError: FormValidationErrorFn = ({ name, label }) =>
  `${label || name} is invalid`;

const minLengthInputError: FormValidationErrorFn = ({ name, label, value }) =>
  `${label || name} must be at least ${value} characters`;

const maxLengthInputError: FormValidationErrorFn = ({ name, label, value }) =>
  `${label || name} must be not more then ${value} characters`;

export const LOCALIZATION_CONTEXT_DEFAULT: LocalizationContextProps = {
  confirm: {
    cancelText: 'Cancel',
    confirmText: 'Yes',
  },
  form: {
    inline: {
      errors: {
        generic: genericError,
        required: requiredInputError,
      },
      placeholder: () => `Click to select`,
    },

    // checkbox: {
    //   errors: {
    //     generic: genericError,
    //     required: requiredInputError,
    //   },
    // },
    // datepicker: {
    //   locale: 'en-US',
    //   format: 'MM/DD/YYYY',
    //   buttons: {
    //     cancel: 'Cancel',
    //     confirm: 'Confirm',
    //   },
    //   errors: {
    //     generic: genericError,
    //     required: requiredInputError,
    //   },
    // },
    password: {
      errors: {
        generic: genericError,
        minLength: minLengthInputError,
        pattern: patternInputError,
        required: requiredInputError,
      },
      placeholder: ({ label }) => `Enter ${label.toLowerCase()}`,
    },

    select: {
      errors: {
        generic: genericError,
        required: requiredInputError,
      },
    },

    starRating: {
      errors: {
        generic: genericError,
        required: requiredInputError,
      },
    },

    text: {
      errors: {
        email: patternInputError,
        generic: genericError,
        required: requiredInputError,
      },
      placeholder: ({ label }) => `Enter ${label.toLowerCase()}`,
    },

    textarea: {
      errors: {
        generic: genericError,
        maxLength: maxLengthInputError,
        required: requiredInputError,
      },
    },
    // radioGroup: {
    //   errors: {
    //     generic: genericError,
    //     required: requiredInputError,
    //   },
    // },
    // checkboxGroup: {
    //   errors: {
    //     generic: genericError,
    //     required: requiredInputError,
    //   },
    // },
    // checkboxToggle: {
    //   errors: {
    //     generic: genericError,
    //     required: requiredInputError,
    //   },
    // },
    // plain: {
    //   errors: {
    //     generic: genericError,
    //     required: requiredInputError,
    //   },
    // },
  },
  tour: {
    last: 'Let’s get helpful',
    next: 'Next',
  },
};
