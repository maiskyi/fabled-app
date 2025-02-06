// Roules
import { FORM_TEXT_RULES } from '../../FormText/FormText.const';
import { FORM_PASSWORD_RULES } from '../../FormPassword/FormPassword.const';
import { FORM_RADIO_GROUP_RULES } from '../../FormRadioGroup/FormRadioGroup.const';
import { FORM_SELECT_RULES } from '../../FormSelect/FormSelect.const';
import { FORM_TEXTAREA_RULES } from '../../FormTextarea/FormTextarea.const';
import { FORM_STAR_RATING_RULES } from '../../FormStarRating/FormText.const';
import { FORM_INLINE_RULES } from '../../FormPicker/FormPicker.const';
import { FORM_RANGE_RULES } from '../../FormSlide/FormSlide.const';
// Types
import { FormTextRules } from '../../FormText/FormText.types';
import { FormPasswordRules } from '../../FormPassword/FormPassword.types';
import { FormRadioGroupRules } from '../../FormRadioGroup/FormRadioGroup.types';
import { FormSelectRules } from '../../FormSelect/FormSelect.types';
import { FormTextareaRules } from '../../FormTextarea/FormTextarea.types';
import { FormStarRatingRules } from '../../FormStarRating/FormText.types';
import { FormPickerRules } from '../../FormPicker/FormPicker.types';
import { FormSlideRules } from '../../FormSlide/FormSlide.types';

interface FormControlRules
  extends FormTextRules,
    FormSelectRules,
    FormPasswordRules,
    FormRadioGroupRules,
    FormTextareaRules,
    FormStarRatingRules,
    FormPickerRules,
    FormSlideRules {}

export const FORM_CONTROL_RULES: FormControlRules = {
  ...FORM_TEXT_RULES,
  ...FORM_PASSWORD_RULES,
  ...FORM_RADIO_GROUP_RULES,
  ...FORM_SELECT_RULES,
  ...FORM_TEXTAREA_RULES,
  ...FORM_STAR_RATING_RULES,
  ...FORM_INLINE_RULES,
  ...FORM_RANGE_RULES,
};
