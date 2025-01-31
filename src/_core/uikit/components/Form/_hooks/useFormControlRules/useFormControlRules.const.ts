import { FORM_TEXT_RULES } from '../../FormText/FormText.const';
import { FORM_PASSWORD_RULES } from '../../FormPassword/FormPassword.const';
// import { FORM_CHECKBOX_RULES } from '../../FormCheckbox/FormCheckbox.const';
// import { FORM_DATEPICKER_RULES } from '../../FormDatepicker/FormDatepicker.const';
import { FORM_RADIO_GROUP_RULES } from '../../FormRadioGroup/FormRadioGroup.const';
// import { FORM_CHECKBOX_GROUP_RULES } from '../../FormCheckboxGroup/FormCheckboxGroup.const';
import { FORM_SELECT_RULES } from '../../FormSelect/FormSelect.const';
// import { FORM_CHECKBOX_TOGGLE_RULES } from '../../FormCheckboxToggle/FormCheckboxToggle.const';
// import { FORM_PLAIN_RULES } from '../../FormPlain/FormPlain.const';
import { FORM_TEXTAREA_RULES } from '../../FormTextarea/FormTextarea.const';
import { FORM_STAR_RATING_RULES } from '../../FormStarRating/FormText.const';
import { FORM_INLINE_RULES } from '../../FormPicker/FormPicker.const';
// Types
import { FormTextRules } from '../../FormText/FormText.types';
import { FormPasswordRules } from '../../FormPassword/FormPassword.types';
// import { FormCheckboxRules } from '../../FormCheckbox/FormCheckbox.types';
// import { FormDatepickerRules } from '../../FormDatepicker/FormDatepicker.types';
import { FormRadioGroupRules } from '../../FormRadioGroup/FormRadioGroup.types';
// import { FormCheckboxGroupRules } from '../../FormCheckboxGroup/FormCheckboxGroup.types';
import { FormSelectRules } from '../../FormSelect/FormSelect.types';
// import { FormCheckboxToggleRules } from '../../FormCheckboxToggle/FormCheckboxToggle.types';
// import { FormPlainRules } from '../../FormPlain/FormPlain.types';
import { FormTextareaRules } from '../../FormTextarea/FormTextarea.types';
import { FormStarRatingRules } from '../../FormStarRating/FormText.types';
import { FormPickerRules } from '../../FormPicker/FormPicker.types';

interface FormControlRules
  extends FormTextRules,
    FormSelectRules,
    FormPasswordRules,
    // FormCheckboxRules,
    // FormDatepickerRules,
    FormRadioGroupRules,
    // FormCheckboxGroupRules,
    // FormCheckboxToggleRules,
    // FormPlainRules,
    FormTextareaRules,
    FormStarRatingRules,
    FormPickerRules {}

export const FORM_CONTROL_RULES: FormControlRules = {
  ...FORM_TEXT_RULES,
  ...FORM_PASSWORD_RULES,
  // ...FORM_CHECKBOX_RULES,
  // ...FORM_DATEPICKER_RULES,
  ...FORM_RADIO_GROUP_RULES,
  // ...FORM_CHECKBOX_GROUP_RULES,
  ...FORM_SELECT_RULES,
  // ...FORM_CHECKBOX_TOGGLE_RULES,
  // ...FORM_PLAIN_RULES,
  ...FORM_TEXTAREA_RULES,
  ...FORM_STAR_RATING_RULES,
  ...FORM_INLINE_RULES,
};
