import { FormTextValidation } from '../../components/Form/FormText/FormText.types';
import { FormSelectValidation } from '../../components/Form/FormSelect/FormSelect.types';
import { FormPasswordValidation } from '../../components/Form/FormPassword/FormPassword.types';
// import { FormCheckboxValidation } from '../../components/Form/FormCheckbox/FormCheckbox.types';
// import { FormDatepickerValidation } from '../../components/Form/FormDatepicker/FormDatepicker.types';
// import { FormRadioGroupValidation } from '../../components/Form/FormRadioGroup/FormRadioGroup.types';
// import { FormCheckboxGroupValidation } from '../../components/Form/FormCheckboxGroup/FormCheckboxGroup.types';
// import { FormCheckboxToggleValidation } from '../../components/Form/FormCheckboxToggle/FormCheckboxToggle.types';
import { FormTextareaValidation } from '../../components/Form/FormTextarea/FormTextarea.types';
import { FormStarRatingValidation } from '../../components/Form/FormStarRating/FormText.types';
import { FormPickerValidation } from '../../components/Form/FormPicker/FormPicker.types';
// import { FormPlainValidation } from '../../components/Form/FormPlain/FormPlain.types';

interface FormValidationErrorFnParams {
  name: string;
  label?: string;
  value?: unknown;
}

export type FormValidationErrorFn = (
  params: FormValidationErrorFnParams
) => string;

interface FormValidationGenericErrorFnParams {
  name: string;
  label?: string;
  value?: unknown;
  code: string;
}

interface FormGenericError {
  generic: (v: FormValidationGenericErrorFnParams) => string;
}

interface FormControlPlaceholderParams {
  label: string;
  name: string;
}

interface Form {
  text: {
    placeholder: (params: FormControlPlaceholderParams) => string;
    errors: Record<keyof FormTextValidation, FormValidationErrorFn> &
      FormGenericError;
  };
  picker: {
    placeholder: (params: FormControlPlaceholderParams) => string;
    errors: Record<keyof FormPickerValidation, FormValidationErrorFn> &
      FormGenericError;
  };
  select: {
    errors: Record<keyof FormSelectValidation, FormValidationErrorFn> &
      FormGenericError;
  };
  textarea: {
    errors: Record<keyof FormTextareaValidation, FormValidationErrorFn> &
      FormGenericError;
  };
  starRating: {
    errors: Record<keyof FormStarRatingValidation, FormValidationErrorFn> &
      FormGenericError;
  };
  password: {
    placeholder: (params: FormControlPlaceholderParams) => string;
    errors: Record<keyof FormPasswordValidation, FormValidationErrorFn> &
      FormGenericError;
  };
  // checkbox: {
  //   errors: Record<keyof FormCheckboxValidation, FormValidationErrorFn> &
  //     FormGenericError;
  // };
  // datepicker: {
  //   locale: string;
  //   format: string;
  //   buttons: {
  //     cancel: string;
  //     confirm: string;
  //   };
  //   errors: Record<keyof FormDatepickerValidation, FormValidationErrorFn> &
  //     FormGenericError;
  // };
  // radioGroup: {
  //   errors: Record<keyof FormRadioGroupValidation, FormValidationErrorFn> &
  //     FormGenericError;
  // };
  // checkboxGroup: {
  //   errors: Record<keyof FormCheckboxGroupValidation, FormValidationErrorFn> &
  //     FormGenericError;
  // };
  // checkboxToggle: {
  //   errors: Record<keyof FormCheckboxToggleValidation, FormValidationErrorFn> &
  //     FormGenericError;
  // };
  // plain: {
  //   errors: Record<keyof FormPlainValidation, FormValidationErrorFn> &
  //     FormGenericError;
  // };
}

interface Confirm {
  confirmText: string;
  cancelText: string;
}

export interface LocalizationContextProps {
  form: Form;
  confirm: Confirm;
  tour: {
    next: string;
    last: string;
  };
}
