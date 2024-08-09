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

// const minLengthInputError: FormValidationErrorFn = ({ name, label, value }) =>
//   `${label || name} must be at least ${value} characters`;

const maxLengthInputError: FormValidationErrorFn = ({ name, label, value }) =>
  `${label || name} must be not more then ${value} characters`;

export const LOCALIZATION_CONTEXT_DEFAULT: LocalizationContextProps = {
  form: {
    starRating: {
      errors: {
        generic: genericError,
        required: requiredInputError,
      },
    },
    textarea: {
      errors: {
        generic: genericError,
        required: requiredInputError,
        maxLength: maxLengthInputError,
      },
    },
    text: {
      errors: {
        email: patternInputError,
        generic: genericError,
        required: requiredInputError,
      },
    },
    select: {
      errors: {
        generic: genericError,
        required: requiredInputError,
      },
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
    // password: {
    //   errors: {
    //     minLength: minLengthInputError,
    //     generic: genericError,
    //     pattern: patternInputError,
    //     required: requiredInputError,
    //   },
    // },
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
  confirm: {
    cancelText: 'Cancel',
    confirmText: 'Yes',
  },
  tour: {
    next: 'Next',
    last: 'Let’s get helpful',
  },
};
