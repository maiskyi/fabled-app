import { FormField } from '../Create.const';

export interface IndexForm {
  [FormField.Character]: string;
  [FormField.Description]: string;
  [FormField.ReadTime]: string;
  [FormField.Scene]: string;
}
