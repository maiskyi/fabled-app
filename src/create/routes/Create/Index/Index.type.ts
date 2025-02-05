import { FormField } from '../Create.const';

export interface IndexForm {
  [FormField.CharacterId]?: string;
  [FormField.ReadTime]: number;
  [FormField.placeOfEventId]: string;
  [FormField.PromptId]: string;
  [FormField.MoralLessonId]: string;
}
